"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign-up attempt with:", { name, email, password })
    router.push("/")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <Card className="flex w-[800px] h-[500px]">
        {/* Left Column (Gradient Background) */}
        <div className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center rounded-l-xl">
          {/* Optional: You can add an image here */}
          {/* <img src="/path/to/your/image.jpg" alt="Background" className="object-cover w-full h-full" /> */}
        </div>

        {/* Right Column (Form) */}
        <div className="flex-1 p-6">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Create a new account to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Choose a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button className="w-full mt-4" type="submit">Sign Up</Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p>Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link></p>
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}
