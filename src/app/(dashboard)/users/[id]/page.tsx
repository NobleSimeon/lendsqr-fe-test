"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import UserDetailsTab from "@/components/user-details-tab";
import { UserDetails } from "@/data";
import { getUserById } from "@/lib/getUserById";
import { Star, StarHalf } from "lucide-react";
import { useEffect, useState } from "react";
import Loading from "../loading";

interface UserDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default function UserDetailsPage({ params }: UserDetailsProps) {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resolvedParams = await params;
        const userData = await getUserById(resolvedParams.id);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [params]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="p-8">
        User not found, Kindly go back to the users page
      </div>
    );
  }

  return (
    <>
      {/* Back button */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-medium text-[#213F7D]">User Details</h2>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="border-[#E4033B] text-[#E4033B] hover:bg-[#E4033B]/10"
          >
            BLACKLIST USER
          </Button>
          <Button
            variant="outline"
            className="border-[#39CDCC] text-[#39CDCC] hover:bg-[#39CDCC]/10"
          >
            ACTIVATE USER
          </Button>
        </div>
      </div>

      {/* User summary card */}
      <main className="bg-white rounded-md shadow-sm max-sm:p-3 p-6">
        <div className="flex flex-col md:flex-row gap-8 border-b pb-6">
          <div className="flex flex-col sm:flex-row gap-8">
            {/* User avatar and name */}
            <figure className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-[#213F7D]/10 text-[#213F7D] text-xl">
                  {user.firstName.charAt(0)}
                  {user.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <figcaption className="flex flex-col gap-2">
                <p className="text-xl font-medium text-[#213F7D]">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-[#545F7D]">{user.accountNumber}</p>
              </figcaption>
            </figure>

            {/* User tier */}
            <div className="sm:border-r max-sm:border-b sm:pb-0 pb-4 pr-8">
              <p className="text-sm text-[#545F7D]">User&apos;s Tier</p>
              <div className="flex items-center mt-1">
                <Star
                  className="h-4 w-4 fill-[#E9B200] text-[#E9B200]"
                  aria-label="Star"
                />
                <StarHalf
                  className="h-4 w-4 fill-[#E9B200] text-[#E9B200]"
                  aria-label="Star Half"
                />
                <Star
                  className="h-4 w-4 text-[#E9B200]/30"
                  aria-label="Star Empty"
                />
              </div>
            </div>
          </div>

          {/* User balance */}
          <div>
            <p className="text-xl font-medium text-[#213F7D]">
              <span className="sr-only">Balance</span> ₦{user.accountBalance}
            </p>
            <p className="text-sm text-[#545F7D]">
              <span className="sr-only">Bank</span> {user.bankName}/Nigeria
            </p>
          </div>
        </div>

        {/* Tabs */}
        <UserDetailsTab user={user} />
      </main>
    </>
  );
}
