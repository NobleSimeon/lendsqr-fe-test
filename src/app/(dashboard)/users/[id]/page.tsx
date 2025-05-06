"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Star, StarHalf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getUserById } from "@/lib/getUserById"

interface UserDetailsProps {
params: Promise<{
    id: string
}>
}

export default function UserDetailsPage({ params }: UserDetailsProps) {
  // In a real app, you would fetch user data based on the ID
  // For this example, we'll use mock data
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Resolve the params Promise and extract the ID
    params.then((resolvedParams) => {
      setUserId(resolvedParams.id);
    });
  }, [params]);

  // Mock function to fetch user data
  const user = userId ? getUserById(userId) : null;

  if (!user) {
    return <div className="p-8">User not found</div>
  }

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Link
        href="/users"
        className="inline-flex items-center text-[#545F7D] hover:text-[#213F7D] transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Back to Users</span>
      </Link>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-medium text-[#213F7D]">User Details</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="border-[#E4033B] text-[#E4033B] hover:bg-[#E4033B]/10">
            BLACKLIST USER
          </Button>
          <Button variant="outline" className="border-[#39CDCC] text-[#39CDCC] hover:bg-[#39CDCC]/10">
            ACTIVATE USER
          </Button>
        </div>
      </div>

      {/* User summary card */}
      <div className="bg-white rounded-md shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-8 border-b pb-6">
          {/* User avatar and name */}
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-[#213F7D]/10 text-[#213F7D] text-xl">
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-medium text-[#213F7D]">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-[#545F7D]">{user.accountNumber}</p>
            </div>
          </div>

          {/* User tier */}
          <div className="border-r pr-8 hidden md:block">
            <p className="text-sm text-[#545F7D]">User&apos;s Tier</p>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 fill-[#E9B200] text-[#E9B200]" />
              <StarHalf className="h-4 w-4 fill-[#E9B200] text-[#E9B200]" />
              <Star className="h-4 w-4 text-[#E9B200]/30" />
            </div>
          </div>

          {/* User balance */}
          <div>
            <p className="text-xl font-medium text-[#213F7D]">₦{user.accountBalance}</p>
            <p className="text-sm text-[#545F7D]">{user.bankName}/Nigeria</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="general-details" className="mt-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto bg-transparent border-b">
            {["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"].map(
              (tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.toLowerCase().replace(/\s+/g, "-")}
                  className={`py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[#39CDCC] data-[state=active]:text-[#39CDCC] data-[state=active]:shadow-none text-sm`}
                >
                  {tab}
                </TabsTrigger>
              ),
            )}
          </TabsList>

          <TabsContent value="general-details" className="pt-6">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-[#213F7D] mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Full Name</p>
                  <p className="text-base text-[#545F7D]">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Phone Number</p>
                  <p className="text-base text-[#545F7D]">{user.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Email Address</p>
                  <p className="text-base text-[#545F7D]">{user.email}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">BVN</p>
                  <p className="text-base text-[#545F7D]">{user.bvn}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Gender</p>
                  <p className="text-base text-[#545F7D]">{user.gender}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Marital Status</p>
                  <p className="text-base text-[#545F7D]">{user.maritalStatus}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Children</p>
                  <p className="text-base text-[#545F7D]">{user.children}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Type of Residence</p>
                  <p className="text-base text-[#545F7D]">{user.residence}</p>
                </div>
              </div>
            </div>

            {/* Education and Employment */}
            <div className="mb-8 pt-6 border-t">
              <h3 className="text-base font-medium text-[#213F7D] mb-6">Education and Employment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Level of Education</p>
                  <p className="text-base text-[#545F7D]">{user.education.level}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Employment Status</p>
                  <p className="text-base text-[#545F7D]">{user.education.employmentStatus}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Sector of Employment</p>
                  <p className="text-base text-[#545F7D]">{user.education.sector}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Duration of Employment</p>
                  <p className="text-base text-[#545F7D]">{user.education.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Office Email</p>
                  <p className="text-base text-[#545F7D]">{user.education.officeEmail}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Monthly Income</p>
                  <p className="text-base text-[#545F7D]">{user.education.monthlyIncome}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Loan Repayment</p>
                  <p className="text-base text-[#545F7D]">{user.education.loanRepayment}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mb-8 pt-6 border-t">
              <h3 className="text-base font-medium text-[#213F7D] mb-6">Socials</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Twitter</p>
                  <p className="text-base text-[#545F7D]">{user.socials.twitter}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Facebook</p>
                  <p className="text-base text-[#545F7D]">{user.socials.facebook}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Instagram</p>
                  <p className="text-base text-[#545F7D]">{user.socials.instagram}</p>
                </div>
              </div>
            </div>

            {/* Guarantor */}
            <div className="mb-8 pt-6 border-t">
              <h3 className="text-base font-medium text-[#213F7D] mb-6">Guarantor</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Full Name</p>
                  <p className="text-base text-[#545F7D]">
                    {user.guarantor.firstName} {user.guarantor.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Phone Number</p>
                  <p className="text-base text-[#545F7D]">{user.guarantor.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Email Address</p>
                  <p className="text-base text-[#545F7D]">{user.guarantor.email}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Relationship</p>
                  <p className="text-base text-[#545F7D]">{user.guarantor.relationship}</p>
                </div>
              </div>
            </div>

            {/* Second Guarantor */}
            <div className="pt-6 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Full Name</p>
                  <p className="text-base text-[#545F7D]">
                    {user.guarantor.firstName} {user.guarantor.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Phone Number</p>
                  <p className="text-base text-[#545F7D]">{user.guarantor.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Email Address</p>
                  <p className="text-base text-[#545F7D]">{user.guarantor.email}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">Relationship</p>
                  <p className="text-base text-[#545F7D]">{user.guarantor.relationship}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="py-8 text-center text-[#545F7D]">
              <p>Documents information will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="bank-details">
            <div className="py-8 text-center text-[#545F7D]">
              <p>Bank details information will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="loans">
            <div className="py-8 text-center text-[#545F7D]">
              <p>Loans information will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="savings">
            <div className="py-8 text-center text-[#545F7D]">
              <p>Savings information will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="app-and-system">
            <div className="py-8 text-center text-[#545F7D]">
              <p>App and system information will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

