"use client";

import { createContext, useContext, useState } from "react";

type GlobalFilterContextType = {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
};

const GlobalFilterContext = createContext<GlobalFilterContextType | undefined>(undefined);

export const GlobalFilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <GlobalFilterContext.Provider value={{ globalFilter, setGlobalFilter }}>
      {children}
    </GlobalFilterContext.Provider>
  );
};

export const useGlobalFilter = () => {
  const context = useContext(GlobalFilterContext);
  if (!context) {
    throw new Error("useGlobalFilter must be used within a GlobalFilterProvider");
  }
  return context;
};