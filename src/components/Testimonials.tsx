import React from 'react'
import { Star } from 'lucide-react'
import SectionDivider from './SectionDivider'

const testimonials = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Recent SMLE Graduate",
    content: "SMLE BOOST was instrumental in my exam success. The adaptive learning algorithm helped me focus on my weak areas efficiently.",
    rating: 5
  },
  {
    name: "Mohammed Al-Faisal",
    role: "Medical Student",
    content: "The extensive question bank and timed practice exams gave me the confidence I needed. Highly recommend!",
    rating: 5
  },
  {
    name: "Dr. Fatima Hassan",
    role: "SMLE Instructor",
    content: "As an instructor, I'm impressed by the quality and accuracy of SMLE BOOST's content. It's a valuable resource for my students.",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <>
      <SectionDivider fillColor="#202020" bgColor="#f7f8fa" />
      <section id="testimonials" className="py-16 bg-[#202020]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#f7f8fa] animate-fade-in-down">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f7f8fa] p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#acc56a] fill-current" />
                  ))}
                </div>
                <p className="text-[#202020] mb-4">{testimonial.content}</p>
                <div className="font-semibold text-[#202020]">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider fillColor="#f7f8fa" bgColor="#202020" />
    </>
  )
}

export default Testimonials