import React from 'react'
import jupiter from "../assets/jupiter.png"
import miro from "../assets/miro.png"
import onefootball from "../assets/onefootball.png"
import picsart from "../assets/picsart.png"
import sharechat from "../assets/sharechat.png"
import stripe from "../assets/stripe.png"

const images = [jupiter, miro, onefootball, picsart, sharechat, stripe];

const Section1 = () => {
  return (
    <div className='flex flex-col w-[100%] h-min-[30rem] justify-center items-center relative z-10 border-b-[1px] border-[#ffffff2f] py-10'>
        <p className='text-[24px] text-white font-bold'>Trusted by world’s top companies across globe</p>
        <div className="w-[100%] flex flex-wrap justify-evenly">
            {images.map((c, idx)=>(
                    <img 
                        src={c}  
                        style={{marginRight:'6.5rem', marginTop:'4.5rem', height:'70px', width:'fit-content', backgroundColor:'#fff'}}
                        alt='Company logo'
                        key={idx}
                    />
            ))}
        </div>
    </div>
  )
}

/*
    
*/ 

export default Section1