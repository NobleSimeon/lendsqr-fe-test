import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  // Generate page numbers with ellipsis
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (pageCount <= maxVisiblePages) {
      // If the total number of pages is less than or equal to the max visible pages, show all pages
      for (let i = 0; i < pageCount; i++) {
        pages.push(i);
      }
    } else {
      // Always include the first page
      pages.push(0);

      // Determine the range of pages to show around the current page
      const start = Math.max(1, pageIndex - 1);
      const end = Math.min(pageCount - 2, pageIndex + 1);

      // Add ellipsis if there are pages between the first page and the start of the range
      if (start > 1) {
        pages.push("...");
      }

      // Add the range of pages around the current page
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis if there are pages between the end of the range and the last page
      if (end < pageCount - 2) {
        pages.push("...");
      }

      // Always include the last page
      pages.push(pageCount - 1);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between p-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          {"<"}
        </Button>
        {pages.map((page, index) =>
          typeof page === "number" ? (
            <Button
              key={index}
              variant={pageIndex === page ? "default" : "outline"}
              className={`h-8 w-8 p-0 ${
                pageIndex === page ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => table.setPageIndex(page)}
            >
              {page + 1}
            </Button>
          ) : (
            <span
              key={index}
              className="h-8 w-8 flex items-center justify-center"
            >
              ...
            </span>
          )
        )}
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          {">"}
        </Button>
  
      </div>
    </div>
  );
}
