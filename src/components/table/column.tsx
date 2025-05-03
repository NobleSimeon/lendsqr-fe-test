"use client";
import { User } from "@/data";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import StatusBadge from "../statusBadge";
import FilterSVG from "../../../public/icons/FilterSVG";

export const columns = (
  updateStatus: (username: string, newStatus: string) => void,
  handleFilterClick: () => void
): ColumnDef<User>[] => [
  {
    accessorKey: "organization",
    header: () => (
      <div className="flex items-center gap-1">
        Organization
        <button
          onClick={() => {
            return handleFilterClick();
          }}
        >
          <FilterSVG className="h-4 w-4 ml-2" />
        </button>
      </div>
    ),
  },
  {
    accessorKey: "username",
    header: () => (
      <div className="flex items-center gap-1">
        Username
        <button
          onClick={() => {
            return handleFilterClick();
          }}
        >
          <FilterSVG className="h-4 w-4 ml-2" />
        </button>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="flex items-center gap-1">
        Email
        <button
          onClick={() => {
            return handleFilterClick();
          }}
        >
          <FilterSVG className="h-4 w-4 ml-2" />
        </button>
      </div>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: () => (
      <div className="flex items-center gap-1">
        Phone Number
        <button
          onClick={() => {
            return handleFilterClick();
          }}
        >
          <FilterSVG className="h-4 w-4 ml-2" />
        </button>
      </div>
    ),
  },
  {
    accessorKey: "dateJoined",
    header: () => (
      <div className="flex items-center gap-1">
        Date Joined
        <button
          onClick={() => {
            return handleFilterClick();
          }}
        >
          <FilterSVG className="h-4 w-4 ml-2" />
        </button>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="flex items-center gap-1">
        Status
        <button
          onClick={() => {
            return handleFilterClick();
          }}
        >
          <FilterSVG className="h-4 w-4 ml-2" />
        </button>
      </div>
    ),
    cell: ({ row }) => {
      const user = row.original;
      return <StatusBadge status={user.status} />;
    },
  },
  {
    id: "actions",
    header: () => <div className="sr-only">Actions</div>,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateStatus(user.username, "Blacklisted")}
            >
              Blacklist User
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateStatus(user.username, "Active")}
            >
              Activate User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
