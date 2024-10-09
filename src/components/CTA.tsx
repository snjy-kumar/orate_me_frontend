import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of successful job seekers who have improved their interview skills with our AI-powered platform. Start your journey to interview success today!
        </p>
        <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
          <Link href="/signup">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}