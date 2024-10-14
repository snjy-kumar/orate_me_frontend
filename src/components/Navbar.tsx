import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className=" top-0 left-0 right-0 z-50 bg-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200">
            {/* AI Interview Prep || SoftSkillsAI*/} OrateMe
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/features" className="text-white hover:text-blue-500">
                Features
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/pricing" className="text-white hover:text-blue-500">
                Pricing
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about" className="text-white hover:text-blue-500">
                About
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login" className="bg-white text-blue-500 hover:text-white hover:bg-gray-800">
                Login
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/signup" className="bg-blue-500 text-white hover:bg-white hover:text-blue-500">
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}