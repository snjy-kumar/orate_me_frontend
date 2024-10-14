import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  { name: "Alex Johnson", role: "Software Engineer", content: "This AI interview prep platform helped me land my dream job at a top tech company. The feedback on my body language was invaluable!", avatar: "/avatar2.jpeg" },
  { name: "Samantha Lee", role: "Marketing Specialist", content: "I was skeptical at first, but the AI-powered insights truly improved my interview skills. Highly recommended for any job seeker!", avatar: "/avatar1.jpeg" },
  { name: "David Chen", role: "Recent Graduate", content: "As a fresh graduate, I was nervous about interviews. This platform boosted my confidence and helped me secure multiple job offers.", avatar: "/avatar3.jpeg" },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50">
              <CardHeader className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.name} width={60} height={60} className="rounded-full" />
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">&quot;{testimonial.content}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}