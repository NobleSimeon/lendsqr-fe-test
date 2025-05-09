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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 bg-white text-[#213F7D] px-4 py-2 rounded shadow transition"
      >
        Skip to main content
      </a>
        {/* Navbar at the top */}
        <Navbar />

        {/* Sidebar and main content container */}
        <div className="flex flex-1 pt-16">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main content */}
          <main id="main-content" tabIndex={-1} className="flex-1 max-sm:p-3 p-6 overflow-auto max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </div>
      </GlobalFilterProvider>
    </SidebarProvider>
  );
}
