import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare } from "lucide-react"
import { WalletCard } from "@/components/wallet-card"

export default function ConnectWalletPage() {
  const wallets = [
    {
      name: "Trust",
      logo: "/images/trust.png",
      description: "Trust Wallet",
    },
    {
      name: "Wallet connect",
      logo: "/images/wallet-connect.jpg",
      description: "WalletConnect Protocol",
    },
    {
      name: "Atomic",
      logo: "/images/atomic.png",
      description: "Atomic Wallet",
    },
    {
      name: "Metamask",
      logo: "/images/metamask.png",
      description: "MetaMask",
    },
    {
      name: "Rainbow",
      logo: "/images/rainbow.png",
      description: "D'CENT Wallet",
    },
    {
      name: "Argent",
      logo: "/images/Argent.jpeg",
      description: "ZelCore",
    },
    {
      name: "Gnosis Safe Multisig",
      logo: "/images/Gnosis Safe Multisig.jpeg",
      description: "Nash",
    },
    {
      name: "Crypto.com | DeFi Wallet",
      logo: "/images/Crypto.com | DeFi Wallet.png",
      description: "Coinomi",
    },
    {
      name: "Pillar",
      logo: "/images/Pillar.png",
      description: "GridPlus",
    },
    {
      name: "imToken",
      logo: "/images/imtoken.jpeg",
      description: "CYBAVO Wallet",
    },
    {
      name: "Anchor",
      logo: "/images/Anchor.png",
      description: "Tokenary",
    },
    {
      name: "ONTO",
      logo: "/images/ONTO.png",
      description: "Wazirx",
    },
    {
      name: "TokenPocket",
      logo: "/images/TokenPocket.png",
      description: "Torus",
    },
    {
      name: "MathWallet",
      logo: "/images/MathWallet.png",
      description: "Spatium",
    },
    {
      name: "BitPay",
      logo: "/images/BitPay.jpg",
      description: "Binance Chain",
    },
    {
      name: "Maiar",
      logo: "/images/Maiar.png",
      description: "Equal",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation - Made sticky */}
      <nav className="sticky top-0 bg-white/80  z-50">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
          <Link href="#" className="text-blue-600 text-base sm:text-lg font-semibold hover:text-blue-700 transition-colors">
            Wallets
          </Link>

          <div className="flex justify-center">
            <Image
              src="/images/wallet-connect.jpg"
              alt="COIN NODE Logo"
              width={60}
              height={60}
              className="rounded-full shadow-md sm:w-[80px] sm:h-[80px]"
            />
          </div>

          <Link href="#" className="text-blue-600 text-base sm:text-lg font-semibold hover:text-blue-700 transition-colors">
            dApps
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Connect Your Wallet</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Multiple iOS and Android wallets support the protocol. Simply scan a QR code from your desktop computer
            screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile
            browsers are supported via mobile deep linking.
          </p>
        </div>

        {/* Wallet Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
          {wallets.map((wallet, index) => (
            <Link 
              key={index} 
              href={`/connect-wallet/${encodeURIComponent(wallet.name)}`}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <WalletCard name={wallet.name} logo={wallet.logo} />
            </Link>
          ))}
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-12 mb-12 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Secure Wallet Connection</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              All connections are encrypted and secure. Your private keys never leave your device. Connect with
              confidence to access decentralized applications and manage your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md">
                Learn More
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 sm:space-x-12 mb-8 sm:mb-12">
          <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Discord</span>
          </Link>
          <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Twitter</span>
          </Link>
          <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
            <Github className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Github</span>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 font-medium text-sm sm:text-base">
          © 2025 COIN NODE. All rights reserved.
        </footer>
      </main>
    </div>
  )
}