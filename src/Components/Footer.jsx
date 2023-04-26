import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  const linkedin = "https://in.linkedin.com/company/perceptionaiapp";
  const twitter = "https://twitter.com/insightgpt?t=_LHns14JHU2TSQeAKMm6mw&s=09";
  return (
    <div className='w-[100%] relative bottom-0 bg-[#2f2f2f] backdrop-filter backdrop-blur-lg bg-opacity-30 flex flex-col justify-center items-center md:px-20 p-10 z-10'>
      <div className="w-full text-white my-2 border-b-[1px] border-[#ffffff2f]">
        <h3 className='text-xl font-semibold my-4'>Perception AI</h3>
        <p>Get in touch</p>
        <p>contact@perceptionai.app</p>
        <div className="flex text-white justify-around items-center w-14 my-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={20}/>
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <BsTwitter size={20}/>
          </a>
        </div>
      </div>
      <p className='text-white text-sm m-8'>Copyright By PerceptionAi 2023. All right reserved</p>
    </div>
  )
}

export default Footer