import React from "react"
import logo from "./../assets/logo.png"

const Navbar = () => {

  const sticky = ()=>{
    //  here creating the navBar variable
    console.log('sticky');
    // var header = document.querySelector("header");  // selecting the navbar tag using getElementbyID function
    // header.classList.toggle("stick", window.scrollY > 0); // this will toggle the class name to the name called "sticky" and then on sticky class the css part comes into play!! ;)
  }

  return (
  <nav className="sticky top-0 z-50 bg-[#c9c9c9] border-b-[1px] border-[#ffffff2f] backdrop-filter backdrop-blur-lg bg-opacity-30" onScroll={sticky}>
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