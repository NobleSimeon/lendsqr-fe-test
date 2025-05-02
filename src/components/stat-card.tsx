import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  icon: ReactNode
  iconBg: string
  title: string
  value: string
}

export default function StatCard({ icon, iconBg, title, value }: StatCardProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-6">
        <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center mb-4`}>{icon}</div>
        <h3 className="text-sm font-medium text-[#545F7D] mb-2">{title}</h3>
        <p className="text-2xl font-semibold text-[#213F7D]">{value}</p>
      </CardContent>
    </Card>
  )
}