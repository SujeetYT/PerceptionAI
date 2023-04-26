import React from 'react'
import jupiter from "../assets/jupiter.png"
import miro from "../assets/miro.png"
import onefootball from "../assets/onefootball.png"
import picsart from "../assets/picsart.png"
import sharechat from "../assets/sharechat.png"
import stripe from "../assets/stripe.png"

const images = [miro, picsart, sharechat, onefootball, stripe, jupiter];

const Section1 = () => {
  return (
    <div className='flex flex-col w-[100%] min-h-[25rem] justify-around items-center relative z-10 border-b-[1px] border-[#ffffff2f] py-6'>
        <p className='text-3xl text-white font-bold text-center'>Trusted by world’s top companies across globe</p>
        <div className="flex flex-wrap justify-center items-center">
            {images.map((c, idx)=>(
                    <img 
                        src={c}  
                        style={{marginRight:'1.5rem', marginTop:'4.5rem', height:'70px', width:'fit-content', backgroundColor:'#fff'}}
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