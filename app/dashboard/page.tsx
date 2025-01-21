"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [user, setUser] = useState<{ name: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
    } else {
      // In a real application, you would verify the token on the server
      // and get the user's information
      setUser({ name: "John Doe" })
    }
  }, [router])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h2>
        <p className="mb-4">Your car insurance policy details will be displayed here.</p>
        <button
          onClick={() => {
            localStorage.removeItem("token")
            router.push("/")
          }}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </main>
    </div>
  )
}

