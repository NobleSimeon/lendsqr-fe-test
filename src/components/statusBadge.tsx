export default function StatusBadge({ status }: { status: string }) {
    const getStatusStyles = (status: string) => {
      switch (status.toLowerCase()) {
        case "active":
          return "bg-[#39CD62]/10 text-[#39CD62]"
        case "inactive":
          return "bg-[#545F7D]/10 text-[#545F7D]"
        case "pending":
          return "bg-[#E9B200]/10 text-[#E9B200]"
        case "blacklisted":
          return "bg-[#E4033B]/10 text-[#E4033B]"
        default:
          return "bg-[#545F7D]/10 text-[#545F7D]"
      }
    }
  
    return <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(status)}`}>{status}</span>
  }