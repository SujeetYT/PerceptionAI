import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Key } from 'react-feather'

const Carousel = ({children: slides, autoSlide=false, autoSlideInterval=3000}) => {

    const [curr, setCurr] = useState(0);

    const prev = () =>{
        setCurr((curr)=>(curr === 0? slides.length - 1: curr - 1))
    }
    const next = () =>{
        setCurr((curr)=>(curr === slides.length - 1 ? 0 : curr + 1))
    }

    useEffect(()=>{
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return ()=>clearInterval(slideInterval)

    }, [])

  return (
    <div className='overflow-hidden relative'>
        <div 
        className="flex transition ease-in-out duration-500"
        style={{transform: `translateX(-${curr * 100}%)`}}        
        >{slides}</div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button 
            className='p-1 rounded-full shadow bg-slate-400/80 text-grey-800 hover:bg-white'
            onClick={prev}
            >
                <ChevronLeft/>
            </button>
            <button 
            className='p-1 rounded-full shadow bg-slate-400/80 text-grey-800 hover:bg-white'
            onClick={next}
            >
                <ChevronRight/>
            </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {slides.map((_, i)=>(
                <div className={`tansition-all w-3 h-3 bg-slate-400 rounded-full ${curr === i?"p-2":"bg-opacity-50"}`} key={i}></div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Carousel