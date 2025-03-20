import Image from "next/image"

interface WalletLogoProps {
  name: string
  src: string
}

export function WalletLogo({ name, src }: WalletLogoProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 w-24 h-24 flex items-center justify-center">
        <Image src={src || "/placeholder.svg"} alt={name} width={80} height={80} className="object-contain" />
      </div>
      <h3 className="text-lg font-medium text-gray-700">{name}</h3>
    </div>
  )
}

