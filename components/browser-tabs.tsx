"use client"
import { ChevronLeft, ChevronRight, RotateCw, Star, Settings, MoreVertical } from "lucide-react"

interface BrowserTabsProps {
  url?: string
}

export function BrowserTabs({ url = "app.cryptofxmtrading.com" }: BrowserTabsProps) {
  const tabs = [
    { title: "EOS price today, E...", active: false },
    { title: "Login", active: false },
    { title: "Temporary US Pho...", active: false },
    { title: "Best Coins Today", active: false },
    { title: "ADVOXA $0.00105...", active: false },
    { title: "Create Next App", active: false },
    { title: "COIN NODE", active: true },
  ]

  return (
    <div className="bg-[#202124] text-gray-300 w-full">
      {/* Tab Bar */}
      <div className="flex items-center border-b border-gray-700 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex items-center px-3 py-2 min-w-[120px] max-w-[180px] border-r border-gray-700 ${
              tab.active ? "bg-[#0d111a]" : "bg-[#202124] hover:bg-[#292b2e]"
            }`}
          >
            <div className="w-4 h-4 mr-2 flex-shrink-0">
              {index === 0 && <div className="w-4 h-4 rounded-full bg-blue-500"></div>}
              {index === 1 && <div className="w-4 h-4 rounded-full bg-yellow-500"></div>}
              {index === 6 && <div className="w-4 h-4 rounded-full bg-gray-500"></div>}
            </div>
            <span className="truncate text-sm">{tab.title}</span>
          </div>
        ))}
        <div className="p-2">
          <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-700">
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      {/* Address Bar */}
      <div className="flex items-center px-2 py-1 bg-[#202124]">
        <button className="p-1 rounded-full hover:bg-gray-700">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-700">
          <ChevronRight className="w-5 h-5" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-700">
          <RotateCw className="w-5 h-5" />
        </button>

        <div className="mx-2 flex-1 bg-[#303134] rounded-full px-3 py-1 flex items-center">
          <span className="text-sm">{url}</span>
        </div>

        <button className="p-1 rounded-full hover:bg-gray-700">
          <Star className="w-5 h-5" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-700">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-700">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

