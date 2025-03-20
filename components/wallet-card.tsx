"use client"

import Image from "next/image"

interface WalletCardProps {
  name: string
  logo: string
  onClick?: () => void
}

export function WalletCard({ name, logo, onClick }: WalletCardProps) {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
      <div className="mb-4 w-24 h-24 flex items-center justify-center">
        <Image src={logo || "/placeholder.svg"} alt={name} width={80} height={80} className="object-contain" />
      </div>
      <h3 className="text-lg font-medium text-gray-700">{name}</h3>
    </div>
  )
}

