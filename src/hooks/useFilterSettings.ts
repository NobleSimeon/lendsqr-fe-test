import { useState } from "react";

export interface FilterValues {
  organization: string
  username: string
  email: string
  date: Date | undefined
  phoneNumber: string
  status: string
}

const useFilterSettings = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterValues>({
    organization: "",
    username: "",
    email: "",
    date: undefined,
    phoneNumber: "",
    status: "",
  });

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };



  return {
    isFilterOpen,
    setIsFilterOpen,
    handleFilterClick,
    filters,
    setFilters,
  };
};

export default useFilterSettings;