import {
    BarChart2,
    Briefcase,
    ClipboardList,
    FileText,
    HandCoins,
    Landmark,
    PiggyBank,
    ScrollText,
    Settings,
    Sliders,
    UserCheck,
    Users,
  } from "lucide-react";
  import type { LucideIcon } from "lucide-react";

  export type SidebarLink = {
    label: string;
    icon: LucideIcon;
    path: string;
};

export type SidebarGroup = {
    label: string;
    links: SidebarLink[];
};
  // Sidebar structure with nested arrays
 export const sidebarGroups: SidebarGroup[] = [
    {
      label: "CUSTOMERS",
      links: [
        { label: "Users", icon: Users, path: "/dashboard/users" },
        { label: "Guarantors", icon: UserCheck, path: "#" },
        { label: "Loans", icon: Landmark, path: "#" },
        { label: "Decision Models", icon: HandCoins, path: "#" },
        { label: "Savings", icon: PiggyBank, path: "#" },
        { label: "Loan Requests", icon: ScrollText, path: "#" },
        { label: "Whitelist", icon: FileText, path: "#" },
        { label: "Karma", icon: FileText, path: "#" },
      ],
    },
    {
      label: "BUSINESSES",
      links: [
        { label: "Organization", icon: Briefcase, path: "#" },
        { label: "Loan Products", icon: Landmark, path: "#" },
        { label: "Savings Products", icon: PiggyBank, path: "#" },
        { label: "Fees and Charges", icon: ClipboardList, path: "#" },
        { label: "Transactions", icon: ScrollText, path: "#" },
        { label: "Services", icon: Settings, path: "#" },
        { label: "Service Account", icon: UserCheck, path: "#" },
        { label: "Settlements", icon: ScrollText, path: "#" },
        { label: "Reports", icon: BarChart2, path: "#" },
      ],
    },
    {
      label: "SETTINGS",
      links: [
        { label: "Preferences", icon: Settings, path: "#" },
        { label: "Fees and Pricing", icon: BarChart2, path: "#" },
        { label: "Audit Logs", icon: Sliders, path: "#" },
      ],
    },
  ];

