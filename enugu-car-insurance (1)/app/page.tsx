"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Enugu Car Insurance</h1>
          <nav>
            <Link href="/login" className="mr-4 hover:underline">
              Login
            </Link>
            <Link href="/signup" className="hover:underline">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Protect Your Vehicle in Enugu State</h2>
          <p className="text-xl mb-8">Get affordable and reliable car insurance tailored for Enugu residents.</p>
          <Link
            href="/quote"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Quote Now
          </Link>
        </div>
      </main>
      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Enugu Car Insurance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

