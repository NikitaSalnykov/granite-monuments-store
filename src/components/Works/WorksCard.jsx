import React from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export const WorksCard = ({img, title, description, text, buttonName, link, reverseOrientation=false}) => {
  return (
    <li className={`flex w-full flex-col ${reverseOrientation ? "lg:flex-row-reverse " : "lg:flex-row"} gap-4 lg:gap-8`}>
      <div className='flex md:mx-auto w-full  lg:w-1/2 h-[300px] md:w-[800px] md:h-auto lg:h-[400px] rounded-lg overflow-hidden' >
  <img className='w-full h-auto object-cover' src={img} alt={title} />
      </div>
      <div className='w-full md:w-[900px] mx-auto lg:w-1/2 flex flex-col  justify-center lg:pr-10 gap-6'>
          <h2 className={`text-xl lg:text-3xl ${!reverseOrientation ? "text-start" : "text-end"}  text-blue-900 mdOnly:text-center leading-tight font-medium`}>
            {title}
          </h2>
        <div className="mdOnly:flex mdOnly:items-start mdOnly:justify-start mdOnly:gap-8">
        <p className={`text-md lg:text-xl  ${!reverseOrientation ? "text-start" : "text-end"}  mdOnly:text-center font-light`}>
            {text}
          </p>
          <div className={`flex flex-col sm:flex-row justify-center ${!reverseOrientation ? "lg:justify-start" : "lg:justify-end"} mt-4 mdOnly:mt-0 lg:mt-8`}>
            {buttonName &&
              <Link to={link}>
                <Button>{buttonName}</Button>
              </Link>
              }
        </div>
        </div>
      </div>
    </li>
  )
}
