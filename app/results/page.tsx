import { QuoteResults } from "./quote-results"

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Car Insurance Quote</h1>
      <QuoteResults />
    </div>
  )
}

