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
      name: "Tokenary",
      logo: "/images/wallets/tokenary.png",
      description: "Tokenary",
    },
    {
      name: "Wazirx",
      logo: "/images/wallets/wazirx.png",
      description: "Wazirx",
    },
    {
      name: "Torus",
      logo: "/images/wallets/torus.png",
      description: "Torus",
    },
    {
      name: "Spatium",
      logo: "/images/wallets/spatium.png",
      description: "Spatium",
    },
    {
      name: "Binance Chain",
      logo: "/images/wallets/binance.png",
      description: "Binance Chain",
    },
    {
      name: "Equal",
      logo: "/images/wallets/equal.png",
      description: "Equal",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-6xl">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-12">
            <Link href="#" className="text-blue-500 text-lg font-medium">
              Wallets
            </Link>

            <div className="flex justify-center">
              <Image
                src="/images/wallet-connect.jpg"
                alt="COIN NODE Logo"
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>

            <Link href="#" className="text-blue-500 text-lg font-medium">
              dApps
            </Link>
          </div>

          {/* Wallets Header */}
          <h1 className="text-4xl font-medium text-gray-600 text-center mb-8">Wallets</h1>

          {/* Description */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gray-600 leading-relaxed">
              Multiple iOS and Android wallets support the protocol. Simply scan a QR code from your desktop computer
              screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile
              browsers are supported via mobile deep linking.
            </p>
          </div>

          {/* Wallet Grid - First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-12">
            {wallets.slice(0, 4).map((wallet, index) => (
              <Link key={index} href={`/connect-wallet/${encodeURIComponent(wallet.name)}`}>
                <WalletCard name={wallet.name} logo={wallet.logo} />
              </Link>
            ))}
          </div>

          {/* Wallet Grid - Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-12">
            {wallets.slice(4, 8).map((wallet, index) => (
              <Link key={index} href={`/connect-wallet/${encodeURIComponent(wallet.name)}`}>
                <WalletCard name={wallet.name} logo={wallet.logo} />
              </Link>
            ))}
          </div>

          {/* Wallet Grid - Third Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-12">
            {wallets.slice(8, 12).map((wallet, index) => (
              <Link key={index} href={`/connect-wallet/${encodeURIComponent(wallet.name)}`}>
                <WalletCard name={wallet.name} logo={wallet.logo} />
              </Link>
            ))}
          </div>

          {/* Wallet Grid - Fourth Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20">
            {wallets.slice(12).map((wallet, index) => (
              <Link key={index} href={`/connect-wallet/${encodeURIComponent(wallet.name)}`}>
                <WalletCard name={wallet.name} logo={wallet.logo} />
              </Link>
            ))}
          </div>

          {/* Additional Information */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-medium text-gray-700 mb-4">Secure Wallet Connection</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              All connections are encrypted and secure. Your private keys never leave your device. Connect with
              confidence to access decentralized applications and manage your digital assets.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors">
                Learn More
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-md transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>Discord</span>
            </Link>
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
              <Twitter className="w-5 h-5 mr-2" />
              <span>Twitter</span>
            </Link>
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              <span>Github</span>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm">© 2025 COIN NODE. All rights reserved.</div>
        </div>
      </main>
    </div>
  )
}
