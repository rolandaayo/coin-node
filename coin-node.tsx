"use client"

import { ArrowUpRight, ChevronRight, MoreVertical, Settings } from "lucide-react"
import { useState } from "react"

export default function CoinNode() {
  const [activeTab, setActiveTab] = useState("COIN NODE")

  return (
    <div className="flex flex-col min-h-screen bg-[#111119] text-white">
      {/* Browser Chrome UI */}
      <div className="bg-[#2b2b2b] text-white p-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="font-medium">Chrome</span>
          <span className="text-gray-400">File</span>
          <span className="text-gray-400">Edit</span>
          <span className="text-gray-400">View</span>
          <span className="text-gray-400">History</span>
          <span className="text-gray-400">Bookmarks</span>
          <span className="text-gray-400">Profiles</span>
          <span className="text-gray-400">Tab</span>
          <span className="text-gray-400">Window</span>
          <span className="text-gray-400">Help</span>
        </div>
        <div className="text-gray-400">4:54</div>
      </div>

      {/* Browser Tabs */}
      <div className="bg-[#2b2b2b] flex items-center text-xs border-b border-gray-700">
        <div className="flex overflow-x-auto">
          <div className="flex items-center px-3 py-2 border-r border-gray-700 bg-[#3a3a3a]">
            <span className="w-4 h-4 mr-2 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
              E
            </span>
            <span className="whitespace-nowrap">EOS price today, E...</span>
            <button className="ml-2 text-gray-400 hover:text-gray-200">×</button>
          </div>
          <div className="flex items-center px-3 py-2 border-r border-gray-700 bg-[#3a3a3a]">
            <span className="w-4 h-4 mr-2 bg-yellow-500 rounded flex items-center justify-center text-white text-xs"></span>
            <span className="whitespace-nowrap">Login</span>
            <button className="ml-2 text-gray-400 hover:text-gray-200">×</button>
          </div>
          <div className="flex items-center px-3 py-2 border-r border-gray-700 bg-[#3a3a3a]">
            <span className="w-4 h-4 mr-2 bg-blue-500 rounded flex items-center justify-center text-white text-xs"></span>
            <span className="whitespace-nowrap">Temporary US Pho...</span>
            <button className="ml-2 text-gray-400 hover:text-gray-200">×</button>
          </div>
          <div className="flex items-center px-3 py-2 border-r border-gray-700 bg-[#3a3a3a]">
            <span className="w-4 h-4 mr-2 bg-red-500 rounded flex items-center justify-center text-white text-xs"></span>
            <span className="whitespace-nowrap">Best Coins Today</span>
            <button className="ml-2 text-gray-400 hover:text-gray-200">×</button>
          </div>
          <div className="flex items-center px-3 py-2 border-r border-gray-700 bg-[#3a3a3a]">
            <span className="w-4 h-4 mr-2 bg-gray-500 rounded flex items-center justify-center text-white text-xs">
              A
            </span>
            <span className="whitespace-nowrap">ADVOXA $0.00105...</span>
            <button className="ml-2 text-gray-400 hover:text-gray-200">×</button>
          </div>
          <div className="flex items-center px-3 py-2 border-r border-gray-700 bg-[#3a3a3a]">
            <span className="w-4 h-4 mr-2 bg-black rounded flex items-center justify-center text-white text-xs"></span>
            <span className="whitespace-nowrap">Create Next App</span>
            <button className="ml-2 text-gray-400 hover:text-gray-200">×</button>
          </div>
          <div className="flex items-center px-3 py-2 border-r border-gray-700 bg-[#3a3a3a]">
            <span className="w-4 h-4 mr-2 bg-gray-500 rounded flex items-center justify-center text-white text-xs"></span>
            <span className="whitespace-nowrap">COIN NODE</span>
            <button className="ml-2 text-gray-400 hover:text-gray-200">×</button>
          </div>
        </div>
        <button className="px-3 py-2 text-gray-400 hover:text-gray-200">+</button>
      </div>

      {/* URL Bar */}
      <div className="bg-[#2b2b2b] flex items-center p-2 border-b border-gray-700">
        <div className="flex items-center space-x-2 text-gray-400">
          <button className="p-1 hover:bg-gray-700 rounded">
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
          </button>
        </div>
        <div className="flex items-center mx-2 flex-1 bg-[#3a3a3a] rounded px-2 py-1 text-sm">
          <span className="text-gray-300">app.cryptofxmtrading.com</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <button className="p-1 hover:bg-gray-700 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 17-1.5-1.5M12 17V10M16 16.5V14a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2.5" />
              <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
          <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white">R</div>
          <button className="p-1 hover:bg-gray-700 rounded">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col items-center">
        {/* Settings Icon */}
        <div className="self-end mb-4">
          <Settings className="w-6 h-6 text-gray-400" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold mb-8 mt-4">COIN NODE</h1>

        {/* Description */}
        <p className="text-center mb-4">
          COIN NODE is an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).
        </p>
        <p className="text-center mb-8">The protocol establishes a remote connection using a Bridge server.</p>

        {/* Buttons */}
        <div className="flex space-x-4 mb-12">
          <button className="bg-[#1a1a2e] border border-[#3a3a6a] text-white px-6 py-3 rounded-md hover:bg-[#2a2a4e] transition">
            Connect Wallet
          </button>
          <button className="bg-[#1a1a2e] border border-[#3a3a6a] text-white px-6 py-3 rounded-md hover:bg-[#2a2a4e] transition">
            Collab.Join
          </button>
        </div>

        {/* Crypto Ticker */}
        <div className="w-full max-w-5xl bg-[#1a1a2e] rounded-md p-2 mb-12">
          <div className="flex items-center text-xs">
            <div className="flex items-center mr-4">
              <span className="text-gray-400 text-xs">Powered by</span>
              <span className="ml-1 font-semibold">CoinMarketCap</span>
            </div>

            <div className="flex flex-1 justify-between">
              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">$0.730396</div>
                <div className="flex items-center">
                  <span className="text-red-500">▼ -1.36%</span>
                  <span className="ml-2 text-gray-400">USDC</span>
                </div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">$1.00</div>
                <div className="flex items-center">
                  <span className="text-gray-400">▼ 0%</span>
                  <span className="ml-2 text-gray-400">BTC</span>
                </div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">$85,039.96</div>
                <div className="flex items-center">
                  <span className="text-green-500">▲ 0.37%</span>
                  <span className="ml-2 text-gray-400">XRP</span>
                </div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">$2.45</div>
                <div className="flex items-center">
                  <span className="text-red-500">▼ -4.33%</span>
                  <span className="ml-2 text-gray-400">XRP</span>
                </div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">$0.999703</div>
                <div className="flex items-center">
                  <span className="text-red-500">▼ -0.03%</span>
                  <span className="ml-2 text-gray-400">USDT</span>
                </div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">$1,975.57</div>
                <div className="flex items-center">
                  <span className="text-red-500">▼ -3.35%</span>
                  <span className="ml-2 text-gray-400">ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <h2 className="text-xl font-semibold text-blue-400 mb-6">Quick Start</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Row 1 */}
          <div className="bg-[#1a1a2e] border border-[#3a3a6a] rounded-md p-6 h-40 relative">
            <h3 className="text-lg font-medium mb-2">Migration</h3>
            <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
          </div>

          <div className="bg-[#1a1a2e] border border-[#3a3a6a] rounded-md p-6 h-40 relative">
            <h3 className="text-lg font-medium mb-2">Validate</h3>
            <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
          </div>

          <div className="bg-[#1a1a2e] border border-[#3a3a6a] rounded-md p-6 h-40 relative">
            <h3 className="text-lg font-medium mb-2">Restore</h3>
            <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
          </div>

          {/* Row 2 */}
          <div className="bg-[#1a1a2e] border border-[#3a3a6a] rounded-md p-6 h-40 relative">
            <h3 className="text-lg font-medium mb-2">Stake</h3>
            <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
          </div>

          <div className="bg-[#1a1a2e] border border-[#3a3a6a] rounded-md p-6 h-40 relative">
            <h3 className="text-lg font-medium mb-2">Swapping</h3>
            <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
          </div>

          <div className="bg-[#1a1a2e] border border-[#3a3a6a] rounded-md p-6 h-40 relative">
            <h3 className="text-lg font-medium mb-2">Buying</h3>
            <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

