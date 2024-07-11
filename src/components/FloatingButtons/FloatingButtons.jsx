import React, { useState } from 'react'
import Svg from '../Svg/Svg'

export const FloatingButtons = () => {
  const [onButtonClick, setOnButtonClick] = useState(false)

  const handleButtonClick = () => {
   setOnButtonClick(!onButtonClick)
   console.log(onButtonClick);
  } 

  return (
    <div className="relative">
  <button className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10">
    <div onClick={handleButtonClick} className={`p-4 rounded-full border-2 border-white bg-black transition-all shadow-sm  ${onButtonClick ? ' shadow-md bg-black px-8' : ''} flex justify-center items-center`}>
{!onButtonClick ?      <svg
        className={`w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16  transition-all `}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
          clip-rule="evenodd"
        ></path>
      </svg> :
        <div className='flex gap-6 justify-center items-center'>
        <p className='text-white font-semibold text-xs w-16'>Ми завжди онлайн:</p>
        <div className="flex gap-4">
        <Svg id={'icon-telegram'} size={42} fill={'white'}/>
        <Svg id={'icon-viber'} size={42} fill={'white'}/>
        </div>
        </div>
        }

    </div>

  </button>
</div>
  )
}
