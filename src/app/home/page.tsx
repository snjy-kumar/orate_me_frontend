import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const data = {
  "activity": {
    "actId": "B98765",
    "title": "Job Interview - Self Introduction",
    "question": "Introduce yourself, highlighting why you are the best fit for this job role.",
    "desc": "Evaluate your ability to present yourself and emphasize your strengths for the job role.",
    "category": "Interview Skills"
  },
  "suggestions": {
    "improve": ["Provide more concrete examples of achievements", "Shorten introduction to maintain focus"],
    "avoid": ["Overusing filler words", "Using general statements without specific backing"],
    "keepItUp": ["Confident tone", "Clear articulation of key strengths"]
  },
  "words": {
    "filler": ["um", "like", "you know"],
    "strong": ["driven", "proven", "innovative"],
    "weak": ["maybe", "kind of", "hopefully"]
  },
  "media": {
    "type": "video",
    "transcription": [
      { "timestamp": "00:05", "text": "Hello, um, my name is John Doe, and I have over five years of experience in, like, software development." },
      { "timestamp": "00:15", "text": "I believe I am, you know, the best fit for this role because of my, uh, proven ability to lead cross-functional teams." },
      { "timestamp": "00:25", "text": "I led a team that developed an, like, award-winning app that increased user engagement by 40%." },
      { "timestamp": "00:35", "text": "I am highly driven, innovative, and always looking for ways to, um, improve processes and outcomes." }
    ],
    "link": "https://example.com/video123",
    "date": "2024-09-21"
  },
  "rating": {
    "tone": {
      "score": 4.7,
      "category": "Bad"
    },
    "vocab": {
      "score": 4.3,
      "category": "Bad"
    },
    "content": {
      "score": 6.9,
      "category": "Good"
    },
    "overall": {
      "score": 7.8,
      "category": "Average"
    }
  },
  "suggestedSpeech": "Hello, my name is John Doe, and I bring over five years of experience in software development. I am confident that I am the best fit for this role because of my track record in leading cross-functional teams to deliver high-quality, innovative products on time. In my previous role, I successfully led a team that developed an award-winning app, increasing user engagement by 40%. I am results-driven, always looking for ways to optimize processes, and I believe my skills align perfectly with the goals of this company."
}

const ratingsCategory = [
  {
    "title": "Worst",
    "start": 1,
    "end": 3.99
  },
  {
    "title": "Bad",
    "start": 4,
    "end": 5.99
  },
  {
    "title": "Good",
    "start": 6,
    "end": 7.99
  },
  {
    "title": "Average",
    "start": 8,
    "end": 8.99
  },
  {
    "title": "Excellent",
    "start": 9,
    "end": 9.99
  },
  {
    "title": "Outstanding",
    "start": 10,
    "end": 10
  }
]

function RatingMeter({ score, category, label }: { score: number; category: string; label: string }) {
  const getColor = (category: string) => {
    switch (category) {
      case "Worst": return "#FF4136"
      case "Bad": return "#FF851B"
      case "Good": return "#FFDC00"
      case "Average": return "#0074D9"
      case "Excellent": return "#2ECC40"
      case "Outstanding": return "#B10DC9"
      default: return "#AAAAAA"
    }
  }

  const angle = (score / 10) * 180
  const color = getColor(category)

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full pt-[50%]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50">
          <defs>
            <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={color} stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M5 50 A45 45 0 0 1 95 50" fill="none" stroke="#e0e0e0" strokeWidth="10" />
          <path 
            d={`M5 50 A45 45 0 0 1 ${50 + 45 * Math.cos((180 - angle) * Math.PI / 180)} ${50 - 45 * Math.sin((180 - angle) * Math.PI / 180)}`} 
            fill="none" 
            stroke={`url(#gradient-${label})`} 
            strokeWidth="10" 
            strokeLinecap="round"
          />
          <circle 
            cx={50 + 45 * Math.cos((180 - angle) * Math.PI / 180)} 
            cy={50 - 45 * Math.sin((180 - angle) * Math.PI / 180)} 
            r="6" 
            fill={color}
            filter="url(#glow)"
          />
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold" style={{color}}>{score.toFixed(1)}</span>
          <span className="text-xs font-medium uppercase tracking-wider">{category}</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium text-gray-600">{label}</span>
    </div>
  )
}

function highlightWords(text: string, words: { [key: string]: string[] }) {
  const allWords = Object.values(words).flat()
  return text.split(' ').map((word, index) => {
    const lowerWord = word.toLowerCase()
    if (words.filler.includes(lowerWord)) {
      return <span key={index} className="bg-yellow-200">{word} </span>
    } else if (words.strong.includes(lowerWord)) {
      return <span key={index} className="bg-green-200">{word} </span>
    } else if (words.weak.includes(lowerWord)) {
      return <span key={index} className="bg-red-200">{word} </span>
    }
    return word + ' '
  })
}

export default function ActivityResult() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="lg:w-3/5 p-6 space-y-6 overflow-y-auto">
        <Card className="bg-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>{data.activity.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{data.activity.question}</p>
            <p className="text-sm">{data.activity.desc}</p>
            <Badge className="mt-2">{data.activity.category}</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Ratings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(data.rating).map(([key, value]) => (
                <RatingMeter key={key}  score={value.score} category={value.category} label={key.charAt(0).toUpperCase() + key.slice(1)} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Suggestions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(data.suggestions).map(([key, value]) => (
              value && value.length > 0 && (
                <Card key={key} className={`bg-${key === 'improve' ? 'blue-50' : key === 'avoid' ? 'red-50' : 'green-50'}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg capitalize">{key}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5">
                      {value.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Word and Sentiment Analysis</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(data.words).map(([key, value]) => (
              <Card key={key} className={`bg-${key === 'filler' ? 'yellow-50' : key === 'strong' ? 'green-50' : 'red-50'}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg capitalize">{key} Words</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {value.map((word, index) => (
                      <Badge key={index} variant="secondary">{word}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Suggested Speech</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{data.suggestedSpeech}</p>
          </CardContent>
        </Card>
      </div>

      <div className="lg:w-2/5 p-6 space-y-6 bg-gray-50 overflow-y-auto">
        <Card className="bg-white shadow-md">
          <CardContent className="p-0">
            <video controls className="w-full">
              <source src={data.media.link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Transcription</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-400px)]">
              {data.media.transcription.map((item, index) => (
                <div key={index} className="p-2 hover:bg-gray-100">
                  <span className="font-bold mr-2">{item.timestamp}</span>
                  <span>{highlightWords(item.text, data.words)}</span>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}