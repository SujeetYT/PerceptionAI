import React from "react"
import logo from "./../assets/logo.png"

const Navbar = () => {
  return (
  <nav className="sticky w-[100%] top-0 z-50 bg-[#c9c9c9] border-b-[1px] border-[#ffffff2f] backdrop-filter backdrop-blur-lg bg-opacity-30">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <span className="w-[120px]"><img src={logo} alt="Logo" className="invert"/></span>
        <div className="flex space-x-4 text-white">
          <a href="#">Home</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar