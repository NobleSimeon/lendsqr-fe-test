import StatCard from "@/components/stat-card";
import UserTable from "@/components/table/usertable";
import { columns } from "@/components/table/column";
import { usersData } from "@/data";
import { Landmark, PiggyBank, UserCheck, Users } from "lucide-react";
const UsersPage = () => {
  // This is the main page for the users dashboard
  // It will be used to display a list of users
  return (
    <>
      <h2 className="text-2xl font-medium text-[#213F7D] mb-6">Users</h2>
      <div className="@container">
        <div className="grid grid-cols-1 @md:grid-cols-2 @2xl:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Users className="h-5 w-5 text-[#DF18FF]" />}
            title="USERS"
            value="2,453"
            iconBg="bg-[#DF18FF]/10"
          />
          <StatCard
            icon={<UserCheck className="h-5 w-5 text-[#5718FF]" />}
            title="ACTIVE USERS"
            value="2,453"
            iconBg="bg-[#5718FF]/10"
          />
          <StatCard
            icon={<Landmark className="h-5 w-5 text-[#F55F44]" />}
            title="USERS WITH LOANS"
            value="12,453"
            iconBg="bg-[#F55F44]/10"
          />
          <StatCard
            icon={<PiggyBank className="h-5 w-5 text-[#FF3366]" />}
            title="USERS WITH SAVINGS"
            value="102,453"
            iconBg="bg-[#FF3366]/10"
          />
        </div>
      </div>
      <UserTable />
    </>
  );
};

export default UsersPage;
