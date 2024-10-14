import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Zap, BarChart, UserPlus, Shield, Headphones, Brain, Globe, Calendar,  } from "lucide-react" 
// Sparkles is not in working
// import { SquareArrowOutUpRight } from 'lucide-react';

const features = [
  { icon: Video, title: "AI Video Analysis", description: "Upload your practice interviews for instant AI-powered feedback" },
  { icon: Zap, title: "Real-time Feedback", description: "Get immediate insights on your body language, tone, and responses" },
  { icon: BarChart, title: "Performance Metrics", description: "Track your progress with detailed analytics and improvement suggestions" },
  { icon: UserPlus, title: "Expert Coaching", description: "Connect with real interview coaches for personalized guidance" },
  { icon: Shield, title: "Secure & Private", description: "Your data is protected with bank-grade encryption" },
  { icon: Brain, title: "AI-Powered Insights", description: "Benefit from advanced machine learning algorithms" },
  { icon: Globe, title: "Industry-Specific Prep", description: "Tailored preparation for various industries and roles" },
  { icon: Calendar, title: "Interview Scheduling", description: "Easily schedule mock interviews with AI or human coaches" },
  // { icon: Sparkles, title: "Custom Scenarios", description: "Practice with AI-generated interview scenarios" },
  { icon: Headphones, title: "24/7 Support", description: "Get help anytime with our round-the-clock customer support" },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features to Ace Your Interviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-300 hover:border-blue-500 transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
                {/* <SquareArrowOutUpRight className="relative left-80 " /> // this icon is for more details needed regarding the feature */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}