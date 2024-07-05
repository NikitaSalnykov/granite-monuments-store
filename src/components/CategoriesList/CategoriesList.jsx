import React from 'react'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'

export const CategoriesList = ({categories, sm}) => {
  console.log(categories.length);
  return (
    <>    
    {categories && categories.length > 0 && <ul className={`grid place-items-end  ${sm ? "grid-cols-2 " : "grid-cols-1"} lg:px-[60px] md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 `}>
{categories.map((el, index) => (
    <li key={index}>
      <Link to={el.link} className="relative rounded overflow w-full grayscale-[0%] hover:shadow-xl hover:contrast-[80%] transition-all ">
      <img className=' object-cover ' src={el.img} alt="Hanging Planters" />
    <p
      className={`cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition ${sm ? "text-xs md:text-lg" : "text-2xl"}`}>
      {el.title}
    </p>
      </Link>
  </li>
))}
</ul> 
}
</>
  )
}
