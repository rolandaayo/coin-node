import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, QrCode } from "lucide-react"

export default function WalletConnectionPage({
  params,
}: {
  params: { wallet: string }
}) {
  const walletName = decodeURIComponent(params.wallet)

  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl">
          {/* Back Button */}
          <Link href="/connect-wallet" className="flex items-center text-blue-500 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to wallets</span>
          </Link>

          {/* Wallet Connection */}
          <div className="text-center mb-8">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt={walletName}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <h1 className="text-3xl font-medium text-gray-700 mb-2">Connect to {walletName}</h1>
            <p className="text-gray-600 mb-8">Scan the QR code with your {walletName} app to connect securely</p>
          </div>

          {/* QR Code */}
          <div className="flex justify-center mb-12">
            <div className="border-4 border-gray-200 rounded-lg p-4 bg-white">
              <div className="w-64 h-64 bg-gray-100 flex items-center justify-center">
                <QrCode className="w-48 h-48 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Alternative Methods */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Other connection methods</h2>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors">
                Open {walletName} App
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-md transition-colors">
                Copy Link
              </button>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-center text-gray-500 text-sm">
            <p>
              Having trouble connecting?{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                View connection help
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

