"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
    router.push("/");
  };

  const backgroundImageUrl = "https://cdn.pixabay.com/photo/2024/08/13/19/02/ai-generated-8966887_1280.jpg";

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-400 to-purple-400 p-5">
      <Card className="flex w-[800px] h-[500px] overflow-hidden shadow-lg">
        <div
          className="flex-1 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center text-white text-center p-5">
            <h1 className="text-4xl">OrateMe</h1>
            <p className="text-lg mt-2">Master the Art of Speaking</p>
          </div>
        </div>

        <div className="flex-1 p-10 flex flex-col justify-center bg-white">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
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
                <div className="mb-4">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="rememberMe" className="mr-2" />
                    <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember Me</label>
                  </div>
                  <Link href="/reset" className="text-indigo-400 hover:underline">Forgot Password?</Link>
                </div>
              </CardContent>
              <Button className="w-full mt-2" type="submit">Login</Button>
              <p className="mt-4 text-sm text-gray-600">
                Don&apos;t have an account? <Link href="/signup" className="text-indigo-400 cursor-pointer">Register</Link>
              </p>
            </form>
        </div>
      </Card>
    </div>
  );
};

export default AuthPage;