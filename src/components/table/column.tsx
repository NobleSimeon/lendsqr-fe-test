"use client";
import type { User } from "@/data";
import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "../statusBadge";
import FilterSVG from "../../../public/icons/FilterSVG";
import UserActionsCell from "./UserActionsCell";

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
        <UserActionsCell user={user} updateStatus={updateStatus} />
      );
    },
  },
];
