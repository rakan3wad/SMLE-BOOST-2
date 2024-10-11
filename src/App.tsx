import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import GetStartedForm from './components/GetStartedForm'
import Dashboard from './components/Dashboard'

function App() {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/get-started" element={<GetStartedForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={
            <>
              <Header />
              <main className="flex-grow">
                <Hero />
                <Features />
                <Testimonials />
                <FAQ />
                <Pricing />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App