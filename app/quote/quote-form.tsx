"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function QuoteForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    carMake: "",
    carModel: "",
    carYear: "",
    coverageType: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    // For this example, we'll just redirect to a results page with the data in the URL
    const queryString = new URLSearchParams(formData).toString()
    router.push(`/results?${queryString}`)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="carMake">Car Make</Label>
        <Input id="carMake" name="carMake" value={formData.carMake} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="carModel">Car Model</Label>
        <Input id="carModel" name="carModel" value={formData.carModel} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="carYear">Car Year</Label>
        <Input
          id="carYear"
          name="carYear"
          type="number"
          min="1900"
          max="2025"
          value={formData.carYear}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="coverageType">Coverage Type</Label>
        <Select name="coverageType" onValueChange={(value) => handleSelectChange("coverageType", value)} required>
          <SelectTrigger>
            <SelectValue placeholder="Select coverage type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Get Quote
      </Button>
    </form>
  )
}

