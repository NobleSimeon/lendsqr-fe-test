"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Bell, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "./ui/sidebar";
import { useGlobalFilter } from "@/context/FilterContext";

export default function Navbar() {
  const [searchInputState, setSearchInputState] = useState(false);
  const { toggleSidebar, open, isMobile } = useSidebar();

  const { globalFilter, setGlobalFilter } = useGlobalFilter(); // Assuming you have a globalFilter context to manage the globalFilter state

  return (
    <header className="fixed top-0 z-20 bg-white border-b border-gray-200 w-full">
      <div className="flex items-center justify-between gap-3 px-4 md:px-8 h-16">
        <div className="flex items-center flex-shrink-0 gap-1">
          <Link href="/dashboard">
            <Image
              src="/Group.svg"
              alt="Lendsqr"
              width={120}
              height={30}
              priority
            />{" "}
            {/*TODO: https://nextjs.org/docs/api-reference/next/image#priority*/}
            <h1 className="sr-only">Lendsqr</h1>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={() => toggleSidebar()}
          >
            <ArrowRight
              className={`h-4 w-4 text-[#213F7D] ml-2 ${
                open && !isMobile ? "rotate-180" : "rotate-0"
              } duration-300`}
            />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
        {/* This is for laptop input box */}
        <div className="hidden md:flex items-center max-w-md flex-shrink w-full">

          <Input
            placeholder="Search for anything"
            className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={globalFilter} // Bind the input value to the globalFilter state
            onChange={(e) => setGlobalFilter(e.target.value)} // Update the globalFilter state on input change
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
            onClick={() => setSearchInputState((prev) => !prev)}
            aria-expanded={searchInputState}
            aria-controls="mobile-search-input"
          >
            <Search className="h-4 w-4 text-white" />
            <span className="sr-only">Toggle search input</span>
          </Button>
          <Link href="#" className="text-[#213F7D] underline text-sm">
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

      {/* Mobile Search Input */}
      {/* FIXME: Blocked aria-hidden on an element because its descendant retained focus. https://w3c.github.io/aria/#aria-hidden.*/}
      <div
        id="mobile-search-input"
        className={`absolute inset-0 bg-white px-4 flex items-center justify-center transition-transform duration-300 ${
          searchInputState
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        aria-hidden={!searchInputState}
      >
        <ArrowLeft
          onClick={() => setSearchInputState(false)}
          className="cursor-pointer"
        />
        <Input
          placeholder="Search for anything"
          className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          // FIXME: Issues with Aria hidden and focus element ancestor
          tabIndex={!searchInputState && !isMobile ? -1 : 0}
          value={globalFilter} // Bind the input value to the globalFilter state
          onChange={(e) => setGlobalFilter(e.target.value)} // Update the globalFilter state on input change
        />
        <Button
          size="icon"
          className="rounded-l-none bg-[#39CDCC] hover:bg-[#39CDCC]/90 h-10 px-4"
        >
          <Search className="h-4 w-4 text-white" />
          <span className="sr-only">Enter search</span>
        </Button>
      </div>
    </header>
  );
}
