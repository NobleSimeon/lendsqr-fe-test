"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Bell, ChevronDown, Menu, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AppSidebar } from "./app-sidebar";

export default function Navbar() {
    const [searchState, setSearchState] = useState(false)

  return (
    <header className="fixed top-0 z-20 bg-white border-b border-gray-200 w-full">
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        <div className="flex items-center gap-8">
          <Link href="/dashboard">
            <Image src="/Group.svg" alt="Lendsqr" width={120} height={30} />
          </Link>

          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <AppSidebar />
            </SheetContent>
          </Sheet> */}
        </div>
        <div className="hidden md:flex items-center max-w-md w-full">
          <Input
            placeholder="Search for anything"
            className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            size="icon"
            className="rounded-l-none bg-[#39CDCC] hover:bg-[#39CDCC]/90 h-10 px-4"
          >
            <Search className="h-4 w-4 text-white" />
            <span className="sr-only">Search Button</span>
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <Button
            size="icon"
            className="bg-[#39CDCC] hover:bg-[#39CDCC]/90 h-10 px-4 rounded-full md:hidden"
            onClick={() => {
              console.log("Search button clicked");
              setSearchState(!searchState)}}
          >
            <Search className="h-4 w-4 text-white" />
            <span className="sr-only">Open search input</span>
          </Button>
          <Link
            href="#"
            className="text-[#213F7D] underline text-sm"
          >
            Docs
          </Link>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-[#213F7D]" />
            <span className="sr-only">Open Notification</span>
          </Button>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border border-[#213F7D]">
              <AvatarImage src="/images/avatar.png" alt="Adedeji" />
              <AvatarFallback className="bg-[#213F7D] text-white">
                A
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex items-center gap-1">
              <span className="text-sm font-medium text-[#213F7D]">
                Adedeji
              </span>
              <ChevronDown className="h-4 w-4 text-[#213F7D]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
    {searchState && <div className="md:hidden px-4 pb-3 absolute inset-0 bg-white">
      <div className="flex items-center justify-center">
        <ArrowLeft onClick={() => {
              console.log("Search button clicked");
              setSearchState(!searchState)}} />
        <Input
          placeholder="Search for anything"
          className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button size="icon" className="rounded-l-none bg-[#39CDCC] hover:bg-[#39CDCC]/90 h-10 px-4">
          <Search className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>}
    </header>
  );
}
