import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function UserDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <Link
        href="/users"
        className="inline-flex items-center text-[#545F7D] hover:text-[#213F7D] transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Back to Users</span>
      </Link>
      {children}
    </div>
  );
}
