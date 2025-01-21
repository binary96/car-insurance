"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QuoteResults() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name")
  const email = searchParams.get("email")
  const carMake = searchParams.get("carMake")
  const carModel = searchParams.get("carModel")
  const carYear = searchParams.get("carYear")
  const coverageType = searchParams.get("coverageType")

  // In a real application, you would calculate this based on the form data
  const quoteAmount = Math.floor(Math.random() * (500000 - 100000 + 1) + 100000)

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Quote Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Car:</strong> {carYear} {carMake} {carModel}
        </p>
        <p>
          <strong>Coverage Type:</strong> {coverageType}
        </p>
        <p className="text-2xl font-bold mt-4">Estimated Quote: ₦{quoteAmount.toLocaleString()}</p>
      </CardContent>
    </Card>
  )
}

