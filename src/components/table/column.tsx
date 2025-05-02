"use client"
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

export const columns = (updateStatus: (username: string, newStatus: string) => void): ColumnDef<User>[] => [
  {
    accessorKey: "organization",
    header: "Organization",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "dateJoined",
    header: "Date Joined",
  },
  {
    accessorKey: "status",
    header: "Status",
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
            <DropdownMenuItem onClick={() => updateStatus(user.username, "Blacklisted")}>Blacklist User</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateStatus(user.username, "Active")}>
              Activate User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
