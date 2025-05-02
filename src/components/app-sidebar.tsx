"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sidebarGroups } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, ChevronDown, Home, X } from "lucide-react";
import Image from "next/image";

export function AppSidebar() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <Sidebar className="pt-16">
      <SidebarHeader>
        {isMobile && <div className="flex items-center justify-between mb-6 px-4">
          <Image src="/Group.svg" alt="Lendsqr" width={120} height={30} />
          <SidebarTrigger className="md:hidden">
            <X className="h-4 w-4 text-[#213F7D]" />
          </SidebarTrigger>
        </div>}
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center gap-2 text-[#213F7D] font-medium">
                  <Briefcase className="h-4 w-4" />
                  <span>Switch Organization</span>
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Lendsqr</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Irorun</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {sidebarGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-xs font-medium text-[#545F7D]">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.links.map((link) => (
                  <SidebarMenuItem key={link.label}>
                    <SidebarMenuButton asChild isActive={isActive(link.path)}>
                      <Link
                        href={link.path}
                        className="flex items-center gap-2"
                      >
                        <link.icon className="h-4 w-4" />
                        <span>{link.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
