import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({id, category, type, image, title, description, price, discount}) => {
  return (
      <div key={id} className='relative p'>
            <Link to={`/${category}/${type}/${id}`}>   
    <img className="object-cover w-full rounded-lg" src={image} alt="Product Image" />
    <div className="absolute top-0 left-0">
    <p className="text-xs md:text-md p-1 bg-red text-white">{discount}</p>
    </div>

    <div className="flex flex-col justify-between py-2">
      <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
        {title}
      </a>
      <span className="text-sm text-gray-500 dark:text-gray-300">
        {description}
      </span>
    </div>
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2 items-center">
        <p className="md:text-xl font-bold">{price}</p>
      </div>
      <div className="py-1 px-2 smOnly:text-xs md:px-3 border-[1px] border-grey">Подробнее</div>
    </div>
    </Link>
  </div>
  )
}
