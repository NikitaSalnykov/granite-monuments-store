import React from 'react'

export const ProductCard = ({product}) => {
  return (
      <div key={product.id}>
    <img className="object-cover w-full rounded-lg" src={image} alt="Product Image" />
    <div className="flex flex-col justify-between py-2">
      <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
        Памятник на могилу (10-100)
      </a>
      <span className="text-sm text-gray-500 dark:text-gray-300">
        Размер от 80х40х5 см. Гранит. Полировка 5
      </span>
    </div>
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2 items-center">
        <p className="text-xs md:text-md p-1 bg-red text-white">-7%</p>
        <p className="md:text-xl font-bold">8000 грн</p>
      </div>
      <div className="py-1 px-2 smOnly:text-xs md:px-3 border-[1px] border-grey">Купить</div>
    </div>
  </div>
  )
}
