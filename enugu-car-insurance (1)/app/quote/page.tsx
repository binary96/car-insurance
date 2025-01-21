"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Script from "next/script"

declare global {
  interface Window {
    PaystackPop: any
  }
}

export default function Quote() {
  const [carMake, setCarMake] = useState("")
  const [carModel, setCarModel] = useState("")
  const [carYear, setCarYear] = useState("")
  const [coverageType, setCoverageType] = useState("")
  const [quoteAmount, setQuoteAmount] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const calculatedQuote = Math.floor(Math.random() * (500000 - 100000 + 1) + 100000)
    setQuoteAmount(calculatedQuote)
  }

  const handlePayment = () => {
    if (typeof window.PaystackPop === "undefined") {
      alert("Paystack is not loaded yet. Please try again in a moment.")
      return
    }
    const handler = window.PaystackPop.setup({
      key: "your_paystack_public_key", // Replace with your actual Paystack public key
      email: "customer@email.com",
      amount: quoteAmount * 100, // Paystack expects amount in kobo
      currency: "NGN",
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      callback: (response: any) => {
        alert("Payment complete! Reference: " + response.reference)
        router.push("/dashboard")
      },
      onClose: () => {
        alert("Transaction was not completed, window closed.")
      },
    })
    handler.openIframe()
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Get a Quote</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="carMake" className="block mb-2">
              Car Make
            </label>
            <input
              type="text"
              id="carMake"
              value={carMake}
              onChange={(e) => setCarMake(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="carModel" className="block mb-2">
              Car Model
            </label>
            <input
              type="text"
              id="carModel"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="carYear" className="block mb-2">
              Car Year
            </label>
            <input
              type="number"
              id="carYear"
              value={carYear}
              onChange={(e) => setCarYear(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="coverageType" className="block mb-2">
              Coverage Type
            </label>
            <select
              id="coverageType"
              value={coverageType}
              onChange={(e) => setCoverageType(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Select coverage type</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Quote
          </button>
        </form>
        {quoteAmount > 0 && (
          <div className="mt-6">
            <p className="text-xl font-bold mb-4">Your Quote: ₦{quoteAmount.toLocaleString()}</p>
            <button
              onClick={handlePayment}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Pay with Paystack
            </button>
          </div>
        )}
      </div>
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />
    </div>
  )
}

