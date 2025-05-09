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
        { label: "Users", icon: Users, path: "/users" },
        { label: "Guarantors", icon: UserCheck, path: "/guarantors" },
        { label: "Loans", icon: Landmark, path: "/loans" },
        { label: "Decision Models", icon: HandCoins, path: "/decision-models" },
        { label: "Savings", icon: PiggyBank, path: "/savings" },
        { label: "Loan Requests", icon: ScrollText, path: "/loan-requests" },
        { label: "Whitelist", icon: FileText, path: "/whitelist" },
        { label: "Karma", icon: FileText, path: "/karma" },
      ],
    },
    {
      label: "BUSINESSES",
      links: [
        { label: "Organization", icon: Briefcase, path: "/organization" },
        { label: "Loan Products", icon: Landmark, path: "/loan-products" },
        { label: "Savings Products", icon: PiggyBank, path: "/savings-products" },
        { label: "Fees and Charges", icon: ClipboardList, path: "/fees-and-charges" },
        { label: "Transactions", icon: ScrollText, path: "/transactions" },
        { label: "Services", icon: Settings, path: "/services" },
        { label: "Service Account", icon: UserCheck, path: "/service-account" },
        { label: "Settlements", icon: ScrollText, path: "/settlements" },
        { label: "Reports", icon: BarChart2, path: "/reports" },
      ],
    },
    {
      label: "SETTINGS",
      links: [
        { label: "Preferences", icon: Settings, path: "/preferences" },
        { label: "Fees and Pricing", icon: BarChart2, path: "/fees-and-pricing" },
        { label: "Audit Logs", icon: Sliders, path: "/audit-logs" },
      ],
    },
  ];

