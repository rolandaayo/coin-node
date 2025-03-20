export function CryptoTicker() {
  const cryptoData = [
    { name: "USDC", price: "$1.00", change: "+0%", symbol: "USDC" },
    { name: "Bitcoin", price: "$85,039.96", change: "+0.37%", symbol: "BTC" },
    { name: "XRP", price: "$2.45", change: "-4.33%", symbol: "XRP" },
    { name: "Tether USDT", price: "$0.99970", change: "-0.03%", symbol: "USDT" },
    { name: "Ethereum", price: "$1,975.57", change: "-3.35%", symbol: "ETH" },
  ]

  return (
    <div className="bg-white bg-opacity-5 rounded-md p-4 w-full">
      <div className="flex items-center text-xs mb-2">
        <span className="text-gray-400">Powered by</span>
        <span className="ml-2 font-semibold">CoinMarketCap</span>
      </div>
      <div className="flex justify-between">
        {cryptoData.map((crypto, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="text-sm font-medium">{crypto.name}</div>
            <div className="flex items-center">
              <div className="text-lg font-semibold">{crypto.price}</div>
              <div
                className={`ml-2 text-xs ${
                  crypto.change.startsWith("+")
                    ? "text-green-500"
                    : crypto.change === "+0%"
                      ? "text-gray-400"
                      : "text-red-500"
                }`}
              >
                {crypto.change}
              </div>
            </div>
            <div className="text-xs text-gray-400">{crypto.symbol}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

