import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Video } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-purple-700 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Master Your Interviews with AI</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">Revolutionize your interview preparation with our AI-powered platform. Upload your practice videos and receive instant, personalized feedback.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-700">
              <Video className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}