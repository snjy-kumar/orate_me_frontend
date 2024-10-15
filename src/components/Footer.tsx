import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"
import Image from "next/image"


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="">
              <Image src="/orateme_icon.png" width={40} height={40} alt="Orate Me Logo"  className="rounded-full"/>
            </Link>
            <h3 className="text-lg font-semibold mb-4">OrateMe</h3>
            <p className="text-sm text-gray-400">Enhacing your interview with best AI platform. OrateMe is a platform that can help you ace your next interview. </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-sm text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-sm text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Github size={25} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={25} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={25} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={25} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 OrateMe Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}