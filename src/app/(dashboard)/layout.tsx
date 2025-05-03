import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import {  SidebarProvider } from "@/components/ui/sidebar";
import { GlobalFilterProvider } from "@/context/FilterContext";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <GlobalFilterProvider>
      {/* Main container */}
      <div className="min-h-screen relative flex flex-col bg-[#FBFBFB] w-full">
        {/* Navbar at the top */}
        <Navbar />

        {/* Sidebar and main content container */}
        <div className="flex flex-1 pt-16">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main content */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
      </GlobalFilterProvider>
    </SidebarProvider>
  );
}
