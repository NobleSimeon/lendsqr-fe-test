"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  // Extract the last segment of the path as the page name
  const segments = pathname.split("/").filter(Boolean);
  const pageName = segments.length > 0 ? segments[segments.length - 1].replace(/-/g, " ") : "this";
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h1 className="text-2xl font-bold mb-4 text-[#213F7D]">Page Not Found</h1>
      <p className="mb-6 text-[#545F7D]">
        You are trying to access <span className="font-semibold">{formattedPageName} Page</span> but we don&apos;t have that yet.<br />
        Go back to the <Link href="/users" className="text-[#39CDCC] underline">users page</Link>.
      </p>
    </div>
  );
} 