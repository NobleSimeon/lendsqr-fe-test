"use client"

import type React from "react"
import { Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import useFilterSettings, { FilterValues } from "@/hooks/useFilterSettings"

interface FilterFormProps {
  isOpen: boolean
  onClose: () => void
  onFilter: (filters: FilterValues) => void
  onClearFilters: () => void
}


export default function FilterForm({ isOpen, onClose, onFilter, onClearFilters }: FilterFormProps) {
  const {filters, setFilters} = useFilterSettings()

  const handleChange = (field: keyof FilterValues, value: string | Date | undefined) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleReset = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: undefined,
      phoneNumber: "",
      status: "",
    })
    onClearFilters(); // Clear the table filters
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter(filters) // pass the filter values to the parent component
    onClose() // close the filter form after applying filters
  }

  if (!isOpen) return null

  return (
    <div className="absolute left-0 top-10 z-50 bg-white rounded-md shadow-lg border border-gray-200 w-64 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-[#213F7D]">Filter</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="organization" className="text-xs text-[#545F7D]">
            Organization
          </label>
          <Select value={filters.organization} onValueChange={(value) => handleChange("organization", value)}>
            <SelectTrigger id="organization" className="h-10 text-sm w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lendsqr">Lendsqr</SelectItem>
              <SelectItem value="irorun">Irorun</SelectItem>
              <SelectItem value="lendstar">Lendstar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="username" className="text-xs text-[#545F7D]">
            Username
          </label>
          <Input
            id="username"
            value={filters.username}
            onChange={(e) => handleChange("username", e.target.value)}
            placeholder="User"
            className="h-10 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs text-[#545F7D]">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={filters.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email"
            className="h-10 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-xs text-[#545F7D]">
            Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-10 text-sm",
                  !filters.date && "text-muted-foreground",
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {filters.date ? format(filters.date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={filters.date}
                onSelect={(date) => handleChange("date", date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="text-xs text-[#545F7D]">
            Phone Number
          </label>
          <Input
            id="phoneNumber"
            value={filters.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            placeholder="Phone Number"
            className="h-10 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="text-xs text-[#545F7D]">
            Status
          </label>
          <Select value={filters.status} onValueChange={(value) => handleChange("status", value)}>
            <SelectTrigger id="status" className="h-10 text-sm w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="blacklisted">Blacklisted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="flex-1 h-10 text-sm border-[#545F7D] text-[#545F7D]"
          >
            Reset
          </Button>
          <Button type="submit" className="flex-1 h-10 text-sm bg-[#39CDCC] hover:bg-[#39CDCC]/90">
            Filter
          </Button>
        </div>
      </form>
    </div>
  )
}
