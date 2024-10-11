import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#202020] text-[#f7f8fa] py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-[#f7f8fa] opacity-80 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} SMLE BOOST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer