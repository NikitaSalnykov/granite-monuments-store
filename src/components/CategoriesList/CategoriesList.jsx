import React from 'react'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'

export const CategoriesList = ({categories, sm}) => {
  console.log(categories.length);
  return (
    <>    
    {categories && categories.length > 0 && (
      <ul className={`grid place-items-end ${sm ? "grid-cols-2 " : "grid-cols-1"} lg:px-[60px] md:grid md:grid-cols-2 lg:grid-cols-3 gap-3`}>
        {categories.map((el, index) => (
          <li key={index}>
<Link to={el.link} >
<div className="relative rounded overflow w-full grayscale-[0%] hover:shadow-xl  bg-black over:bg-opacity-60 transition cursor-pointer">
              <img className='object-cover w-full h-full brightness-[50%] hover:brightness-[80%]' src={el.img} alt="Hanging Planters" />
              <p
                className={`absolute text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-center ${sm ? "text-xs md:text-lg" : "text-2xl"}`}>
                {el.title}
              </p>
            </div></Link>
          </li>
        ))}
      </ul>
    )}
    </>
  )
}
