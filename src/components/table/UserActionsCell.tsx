"use client";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import type { User } from "@/data";

interface Props {
  user: User;
  updateStatus: (username: string, newStatus: string) => void;
}

export default function UserActionsCell({ user, updateStatus }: Props) {
  const router = useRouter();

  const handleViewDetails = () => {
    // Split username to get first and last name
    const [firstName, lastName] = user.username.split(' ');

    // Create URL parameters with user data
    const params = new URLSearchParams({
      firstName,
      lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      status: user.status,
      dateJoined: user.dateJoined,
      organization: user.organization,
    });

    // Navigate to user details page with ID and search params
    router.push(`/users/${user.id}?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleViewDetails}>
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
