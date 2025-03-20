import { ExternalLink } from "lucide-react"

interface QuickStartCardProps {
  title: string
  className?: string
}

export function QuickStartCard({ title, className = "" }: QuickStartCardProps) {
  return (
    <div
      className={`bg-[#1a2235] rounded-md p-6 h-40 flex flex-col relative group border-l-4 border-blue-500 ${className}`}
    >
      <div className="absolute top-3 right-3">
        <ExternalLink className="w-5 h-5 text-gray-400" />
      </div>
      <div className="mt-auto">
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
    </div>
  )
}

