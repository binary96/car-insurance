"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

