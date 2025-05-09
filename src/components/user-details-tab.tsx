import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserDetails } from "@/data";
import { useState } from "react";
const tabOptions = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];
const UserDetailsTab = ({ user }: { user: UserDetails }) => {
    const [activeTab, setActiveTab] = useState(
        tabOptions[0].toLowerCase().replace(/\s+/g, "-")
      );
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          {/* Desktop Tab List */}
          <TabsList className="hidden md:grid grid-cols-3 md:grid-cols-6 h-auto bg-transparent border-b">
            {tabOptions.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.toLowerCase().replace(/\s+/g, "-")}
                className="py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[#39CDCC] data-[state=active]:text-[#39CDCC] data-[state=active]:shadow-none text-sm"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Mobile Select Dropdown */}
          <div className="md:hidden mb-4">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tabOptions.map((tab, index) => (
                  <SelectItem
                    key={index}
                    value={tab.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {tab}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="general-details" className="pt-6">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-[#213F7D] mb-6">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Full Name
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Phone Number
                  </p>
                  <p className="text-base text-[#545F7D]">{user.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Email Address
                  </p>
                  <p className="text-base text-[#545F7D]">{user.email}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">BVN</p>
                  <p className="text-base text-[#545F7D]">{user.bvn}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Gender
                  </p>
                  <p className="text-base text-[#545F7D]">{user.gender}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Marital Status
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.maritalStatus}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Children
                  </p>
                  <p className="text-base text-[#545F7D]">{user.children}</p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Type of Residence
                  </p>
                  <p className="text-base text-[#545F7D]">{user.residence}</p>
                </div>
              </div>
            </div>

            {/* Education and Employment */}
            <div className="mb-8 pt-6 border-t">
              <h3 className="text-base font-medium text-[#213F7D] mb-6">
                Education and Employment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Level of Education
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.education.level}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Employment Status
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.education.employmentStatus}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Sector of Employment
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.education.sector}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Duration of Employment
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.education.duration}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Office Email
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.education.officeEmail}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Monthly Income
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.education.monthlyIncome}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Loan Repayment
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.education.loanRepayment}
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mb-8 pt-6 border-t">
              <h3 className="text-base font-medium text-[#213F7D] mb-6">
                Socials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Twitter
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.socials.twitter}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Facebook
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.socials.facebook}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#545F7D] uppercase mb-2">
                    Instagram
                  </p>
                  <p className="text-base text-[#545F7D]">
                    {user.socials.instagram}
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantor */}
            <div className="mb-8 pt-6 border-t">
              <h3 className="text-base font-medium text-[#213F7D] mb-6">
                Guarantor
              </h3>
              <div className="space-y-6 divide-y">
                {user.guarantor.map((guarantor, i) => {
                  return (
                    <div
                      key={i}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 py-4"
                    >
                      <div>
                        <p className="text-xs text-[#545F7D] uppercase mb-2">
                          Full Name
                        </p>
                        <p className="text-base text-[#545F7D]">
                          {guarantor.firstName} {guarantor.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#545F7D] uppercase mb-2">
                          Phone Number
                        </p>
                        <p className="text-base text-[#545F7D]">
                          {guarantor.phoneNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#545F7D] uppercase mb-2">
                          Email Address
                        </p>
                        <p className="text-base text-[#545F7D]">
                          {guarantor.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#545F7D] uppercase mb-2">
                          Relationship
                        </p>
                        <p className="text-base text-[#545F7D]">
                          {guarantor.relationship}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
  )
}

export default UserDetailsTab;
