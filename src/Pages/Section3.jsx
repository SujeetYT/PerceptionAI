import React from 'react'

const images = [
    "https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/integration-logos%2Fclever-tap.png?alt=media&token=2e238f58-92ed-4a00-a91d-78632ec4c30f",
    "https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/integration-logos%2Fmixpanel.png?alt=media&token=0f4518dc-21d5-4cde-afe5-cd0b77aa4521",
    "https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/integration-logos%2Fslack.png?alt=media&token=7442178c-5d94-4627-819f-9016f64cd2f6",
    "https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/integration-logos%2Famplitude.png?alt=media&token=047ed0a5-8d55-4138-8ef1-ce000fdf9b6c"
]

const Section3 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <p className='text-white w-[20rem] text-3xl font-bold mt-10 text-center'>I want to...</p>
        <div className='flex flex-col justify-center items-center'>
            <div className="text-white w-[20rem] text-xl font-normal mt-10">
                <p>Integrate seamlessly with your <span className='font-medium bg-gradient-to-r from-[#6549d5] via-[#e33fa1] to-[#fb5343] p-5 text-transparent bg-clip-text'>Favourite Apps</span></p>
            </div>
            <div className='relative w-[100%] overflow-hidden'>
                <div className="flex mt-10 md:ml-10 gap-3 relative animate-transX">
                    {images.map((s, idx)=><img src={s} key={idx} style={{backgroundColor:'#fff', height:'70px', width:'fit-content'}}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3