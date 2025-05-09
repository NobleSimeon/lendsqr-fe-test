"use client";
import type { User } from "@/data";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface Props {
  user: User;
  updateStatus: (username: string, newStatus: string) => void;
}

export default function UserActionsCell({ user, updateStatus }: Props) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push(`/users/${user.id}`)}>
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateStatus(user.username, "Blacklisted")}>
          Blacklist User
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateStatus(user.username, "Active")}>
          Activate User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
