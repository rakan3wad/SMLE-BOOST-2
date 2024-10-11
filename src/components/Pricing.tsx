import React, { useState, useEffect } from 'react'
import { Check, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionDivider from './SectionDivider'

const features = [
  "Access to thousands of SMLE real questions",
  "Adaptive learning algorithm based on scientific research",
  "Performance tracking and analytics",
  "Mobile-friendly platform",
  "Daily content updates",
  "Solve any medical question with our AI agent",
  "Custom study plan based on your exam's date and personality",
  "Interface identical to the real exam's interface",
  "24/7 customer support"
];

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }
        
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SectionDivider fillColor="#202020" />
      <section id="pricing" className="py-16 bg-[#202020]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#f7f8fa]">Limited Time Offer</h2>
          <div className="max-w-md mx-auto bg-[#f7f8fa] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-[#202020]">$499</span>
                <span className="text-lg text-gray-500 line-through">$2000</span>
              </div>
              <p className="text-[#202020] mb-6">Lifetime access to SMLE BOOST</p>
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-[#202020]">
                    <Check className="w-5 h-5 text-[#acc56a] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link
                  to="/get-started"
                  className="bg-[#acc56a] text-[#202020] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block"
                >
                  Join the whitelist 🧾
                </Link>
              </div>
              <div className="mt-6 text-center">
                <p className="text-[#202020] mb-2">Offer ends in:</p>
                <div className="flex justify-center items-center space-x-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-[#202020]">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <p className="text-sm text-gray-500">Hours</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-[#202020]">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <p className="text-sm text-gray-500">Minutes</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-[#202020]">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <p className="text-sm text-gray-500">Seconds</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-red-600 mt-4 font-semibold animate-pulse">Limited seats available!</p>
            </div>
            <div className="bg-[#202020] p-4 text-center">
              <p className="text-[#f7f8fa] text-sm">
                <Clock className="inline-block w-4 h-4 mr-1" />
                Money-back guarantee if you score less than 90%
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing