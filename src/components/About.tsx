import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="py-20 bg-purple-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/interview.jpg" alt="AI Interview Preparation" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Revolutionizing Interview Preparation</h2>
            <p className="text-lg mb-6">
              At InterviewAI Pro, we&apos;re harnessing the power of artificial intelligence to transform how people prepare for interviews. Our platform allows you to upload practice interview videos and receive instant, comprehensive feedback on your performance.
            </p>
            <p className="text-lg mb-6">
              From analyzing your body language and tone to evaluating the content of your responses, our AI provides detailed insights to help you improve. And for those who want an extra edge, we offer the option to connect with real interview coaches for personalized guidance.
            </p>
            <Button size="lg">Discover Our Technology</Button>
          </div>
        </div>
      </div>
    </section>
  )
}