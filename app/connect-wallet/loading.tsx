export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <h2 className="text-xl font-medium text-gray-700">Loading wallets...</h2>
        <p className="text-gray-500">Please wait while we fetch available wallets</p>
      </div>
    </div>
  )
}

