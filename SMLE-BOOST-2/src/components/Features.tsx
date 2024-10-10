import React from 'react'
import { BookOpen, Target, Clock, BarChart } from 'lucide-react'

const features = [
  { icon: BookOpen, title: 'Extensive Question Bank', description: 'Access thousands of SMLE REAL questions covering all specialties.' },
  { icon: Target, title: 'Targeted Learning', description: 'Focus on your weak areas with our adaptive learning algorithm based on researches' },
  { icon: Clock, title: 'Timed Practice', description: 'Simulate exam conditions with timed question sets and full-length mock exams.' },
  { icon: BarChart, title: 'Performance Tracking', description: 'Monitor your progress with performance reports.' },
]

const Features = () => {
  return (
    <section id="features" className="py-8 sm:py-12 bg-[#f7f8fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#202020] animate-fade-in-down">Why Choose SMLE BOOST?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center transform transition duration-500 hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <feature.icon className="w-12 h-12 text-[#acc56a] mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#202020]">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#202020] opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features