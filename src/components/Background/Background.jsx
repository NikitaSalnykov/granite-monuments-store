import React from 'react'
import bg from '../../assets/bg-monuments.png'

export const Background = () => {
  return (
    <div className='absolute w-full h-full overflow-hidden opacity-30 -z-10 grayscale-[100%] '>
      <img src={bg} alt="gravestone-background" className='h-full absolute top-0 right-[-400px] object-cover'/>
    </div>
  )
}
