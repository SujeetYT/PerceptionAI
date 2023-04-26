import React from 'react'

const Bubble = ({color, top, left, right}) => {
  return (
    <div className={`fixed w-[500px] h-[500px] rounded-full opacity-25 blur-[100px] z-[1]`} 
    style={{backgroundImage: `${color}`, top:`${top}`, left:`${left}`, right:`${right}`}}
    ></div>
  )
}

export default Bubble