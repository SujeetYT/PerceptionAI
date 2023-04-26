import React from 'react'
import Carousel from '../Components/Carousel'
import img1 from "./../assets/carousel/image1.png"
import img2 from "./../assets/carousel/image2.png"
import img3 from "./../assets/carousel/image3.png"
import { ChevronRight, ChevronsRight } from 'react-feather'

const slides = [
    img1, img2, img3
]

const Hero = () => {
  return (
    <div className='w-full h-min-[30rem] flex flex-col justify-center items-center relative border-b-[1px] border-[#ffffff2f] z-10'>
        <h1 className='text-7xl font-black bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] p-5 text-transparent bg-clip-text'>Priortise your next feature with<br/> Impactful Insights</h1>
        <div className="w-full h-min-[50rem] p-10 flex flex-col justify-between items-center md:flex-row">
            <div className='flex flex-col justify-between items-start h-48'>
                <ul className='list-none text-white text-lg leading-8'>
                    <li>🎯 Drive organic growth</li>
                    <li>🎯 Uncover competitor insights</li>
                    <li>🎯 Level up your User Experience</li>
                </ul>
                <button className='w-40 h-10 text-white bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] rounded-full flex justify-center items-center text-lg'>Get Started <span><ChevronRight/></span></button>
            </div>
            
            <div className="w-[500px]">
                <Carousel >
                    {...slides.map((s, idx)=>(<img src={s} key={idx}/>))}
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Hero