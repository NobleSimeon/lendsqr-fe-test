"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { usersData } from "@/data"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { DataTablePagination } from "./tablePaginate"


interface userTableProps<Tuser, TValue> {
  columns: ColumnDef<Tuser, TValue>[]
  data: Tuser[]
}

function UserTable<Tuser, TValue>({
  columns,
  data,
}: userTableProps<Tuser, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  )
}


// const UserTable = () => {
//   return (
//     <div className="bg-white rounded-md shadow-sm overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="text-xs font-semibold text-[#545F7D] uppercase">
//                 <div className="flex items-center gap-1">
//                   Organization
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                       fill="#545F7D"
//                     />
//                   </svg>
//                 </div>
//               </TableHead>
//               <TableHead className="text-xs font-semibold text-[#545F7D] uppercase">
//                 <div className="flex items-center gap-1">
//                   Username
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                       fill="#545F7D"
//                     />
//                   </svg>
//                 </div>
//               </TableHead>
//               <TableHead className="text-xs font-semibold text-[#545F7D] uppercase">
//                 <div className="flex items-center gap-1">
//                   Email
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                       fill="#545F7D"
//                     />
//                   </svg>
//                 </div>
//               </TableHead>
//               <TableHead className="text-xs font-semibold text-[#545F7D] uppercase">
//                 <div className="flex items-center gap-1">
//                   Phone Number
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                       fill="#545F7D"
//                     />
//                   </svg>
//                 </div>
//               </TableHead>
//               <TableHead className="text-xs font-semibold text-[#545F7D] uppercase">
//                 <div className="flex items-center gap-1">
//                   Date Joined
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                       fill="#545F7D"
//                     />
//                   </svg>
//                 </div>
//               </TableHead>
//               <TableHead className="text-xs font-semibold text-[#545F7D] uppercase">
//                 <div className="flex items-center gap-1">
//                   Status
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                       fill="#545F7D"
//                     />
//                   </svg>
//                 </div>
//               </TableHead>
//               <TableHead></TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {usersData.map((user, index) => (
//               <TableRow key={index}>
//                 <TableCell className="text-sm text-[#545F7D]">{user.organization}</TableCell>
//                 <TableCell className="text-sm text-[#545F7D]">{user.username}</TableCell>
//                 <TableCell className="text-sm text-[#545F7D]">{user.email}</TableCell>
//                 <TableCell className="text-sm text-[#545F7D]">{user.phoneNumber}</TableCell>
//                 <TableCell className="text-sm text-[#545F7D]">{user.dateJoined}</TableCell>
//                 <TableCell>
//                   <StatusBadge status={user.status} />
//                 </TableCell>
//                 <TableCell>
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" size="icon" className="h-8 w-8">
//                         <MoreHorizontal className="h-4 w-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       <DropdownMenuItem>View Details</DropdownMenuItem>
//                       <DropdownMenuItem>Blacklist User</DropdownMenuItem>
//                       <DropdownMenuItem>Activate User</DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         {/* Pagination */}
//         <div className="flex items-center justify-between p-4 border-t">
//           <div className="flex items-center gap-2 text-sm text-[#545F7D]">
//             <span>Showing</span>
//             <select className="bg-[#213F7D]/10 rounded px-2 py-1 text-xs">
//               <option>100</option>
//               <option>50</option>
//               <option>20</option>
//             </select>
//             <span>out of 100</span>
//           </div>

//           {/* <Pagination>
//             <PaginationContent>
//               <PaginationPrevious href="#" />
//               <PaginationItem>
//                 <PaginationLink href="#" isActive>
//                   1
//                 </PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">2</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">3</PaginationLink>
//               </PaginationItem>
//               <PaginationEllipsis />
//               <PaginationItem>
//                 <PaginationLink href="#">15</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">16</PaginationLink>
//               </PaginationItem>
//               <PaginationNext href="#" />
//             </PaginationContent>
//           </Pagination> */}
//         </div>
//       </div>
//   )
// }

export default UserTable