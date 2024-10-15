"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Mic, MessageSquare, Timer, Award, AlertTriangle, 
  Sparkles, Brain, Activity, ArrowUp, ArrowDown
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const EnhancedInterviewAnalysis = () => {
  const [currentTime, setCurrentTime] = useState('00:00');
  
  const mockAnalysis = {
    scores: {
      tone: { score: 4.7, label: 'NEEDS WORK', color: 'text-orange-500' },
      vocab: { score: 4.3, label: 'NEEDS WORK', color: 'text-orange-500' },
      content: { score: 6.9, label: 'GOOD', color: 'text-yellow-500' },
      overall: { score: 7.8, label: 'AVERAGE', color: 'text-blue-500' }
    },
    transcript: [
      { time: '00:05', text: 'Hello, my name is Sarah Chen, and I have over three years of experience in product management.' },
      { time: '00:15', text: 'I believe I would be an excellent fit for this role because of my proven track record in launching successful products.' },
      { time: '00:25', text: 'In my current role, I led the development of our flagship analytics platform.' }
    ],
    wordAnalysis: {
      fillerWords: ['um', 'like', 'you know', 'sort of'],
      strongWords: ['proven', 'launched', 'led', 'successful'],
      weakWords: ['maybe', 'kind of', 'hopefully', 'pretty much']
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-black font-bold">Interview Self-Assessment</h1>
          <div className="text-blue-500 flex items-center space-x-2">
            <Timer className="" />
            <span className="text-lg font-semibold">{currentTime}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Analysis */}
          <div className="space-y-6">
          <Progress />
            {/* Performance Meters */}
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <h2 className="font-semibold flex items-center gap-2">
                  <Activity className="text-blue-500" />
                  Performance Metrics
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(mockAnalysis.scores).map(([key, value]) => (
                    <div key={key} className="flex flex-col items-center">
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#eee"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className={value.color}
                            strokeDasharray={`${value.score * 10}, 100`}
                          />
                          <text x="18" y="20" className="text-center font-bold" textAnchor="middle" dominantBaseline="middle">
                            {value.score}
                          </text>
                        </svg>
                      </div>
                      <span className="font-medium mt-2 capitalize">{key}</span>
                      <span className={`text-sm ${value.color}`}>{value.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Word Analysis */}
            <Card className="bg-white">
              <CardHeader>
                <h2 className="font-semibold flex items-center gap-2">
                  <MessageSquare className="text-purple-500" />
                  Language Analysis
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      Filler Words
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {mockAnalysis.wordAnalysis.fillerWords.map((word, i) => (
                        <span key={i} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <ArrowUp className="h-4 w-4 text-green-500" />
                      Strong Words
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {mockAnalysis.wordAnalysis.strongWords.map((word, i) => (
                        <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <ArrowDown className="h-4 w-4 text-red-500" />
                      Weak Words
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {mockAnalysis.wordAnalysis.weakWords.map((word, i) => (
                        <span key={i} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="bg-white">
              <CardHeader>
                <h2 className="font-semibold flex items-center gap-2">
                  <Brain className="text-indigo-500" />
                  AI Recommendations
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="min-w-[24px] pt-1">
                      <Sparkles className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Structure Your Response</h3>
                      <p className="text-gray-600 text-sm">Begin with a clear introduction, follow with 2-3 key achievements, and end with a strong connection to the role.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="min-w-[24px] pt-1">
                      <Mic className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Improve Delivery</h3>
                      <p className="text-gray-600 text-sm">Reduce filler words and speak at a more measured pace to enhance clarity and confidence.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="min-w-[24px] pt-1">
                      <Award className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Highlight Achievements</h3>
                      <p className="text-gray-600 text-sm">Include more specific metrics and outcomes when discussing your experience.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Video and Transcript */}
          <div className="space-y-6">
            {/* Video Player */}
            <Card className="bg-white">
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400">Video Player</div>
                </div>
              </CardContent>
            </Card>

            {/* Transcript */}
            <Card className="bg-white">
              <CardHeader>
                <h2 className="font-semibold">Real-time Transcript</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {mockAnalysis.transcript.map((entry, index) => (
                    <div key={index} className="flex space-x-3">
                      <span className="text-sm text-gray-500 min-w-[45px]">{entry.time}</span>
                      <p className="text-gray-700">{entry.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* <Progress /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedInterviewAnalysis;