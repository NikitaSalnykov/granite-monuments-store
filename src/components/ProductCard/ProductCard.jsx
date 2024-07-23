import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from "../../images/placeholder.jpg"

export const ProductCard = ({id, category, type, image, name, description, price, discount}) => {
  const imagePath = image ? `${image.replace(/\\/g, '/')}` : placeholder;
  console.log(image);

  return (
    <div key={id} className='relative'>
      <Link to={`/${category}/${type}/${id}`}>   
        <img className="object-cover w-full h-[200px] md:h-[300px] rounded-lg bg-slate-300 text-center" src={`${image}`} alt={name} />
        {discount && discount > 0 && 
          <div className="absolute top-0 left-0">
            <p className="text-xs md:text-md p-1 bg-red text-white">{discount}%</p>
          </div>
        }
        <div className="flex flex-col justify-between py-2">
          <h4 className="text-xl font-semibold text-gray-800 hover:underline">
            {name}
          </h4>
          <span className="text-sm text-gray-500">
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
