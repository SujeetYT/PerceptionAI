import React from 'react'
const image = "https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/services-illustrations%2Fillustration%201.svg?alt=media&token=62147d43-a003-43d4-ae23-1f045ef4a63c"

const Section2 = () => {
  return (
    <div className='flex flex-col w-[100%] min-h-[30rem] justify-center items-center relative z-10 border-b-[1px] border-[#ffffff2f] py-10'>
        <p className='text-white w-[20rem] text-3xl font-bold mt-10 text-center'>I want to...</p>
        <div className="flex justify-around items-center flex-wrap gap-5 mt-10">
            <button className='w-40 h-10 text-white bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] rounded-full flex justify-center items-center text-lg'>Prioritize Better</button>
            <button className='w-40 h-10 text-white bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] rounded-full flex justify-center items-center text-lg'>Know Perception</button>
            <button className='w-40 h-10 text-white bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] rounded-full flex justify-center items-center text-lg'>Perception</button>
            <button className='w-40 h-10 text-white bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] rounded-full flex justify-center items-center text-lg'>Retain User</button>
            <button className='w-40 h-10 text-white bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] rounded-full flex justify-center items-center text-lg'>Increase Ranking</button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-white w-[20rem] text-xl font-normal mt-10">
                <p>We help your<span className='font-medium bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] p-5 text-transparent bg-clip-text'>Product team</span>to priortise better based on our Impactful Insights</p>
            </div>
            <div className="w-max-[300px] mt-10 md:ml-10">
                <img src={image} alt="illustration" />
            </div>
        </div>
    </div>
  )
}

export default Section2