import React from 'react'
import { Filter } from '../../components/Filter/Filter'

export const AdminNavbar = ({changeCategory, selectedCategory}) => {
  return (
    <>

      
    <div id="sideNav" className={`hidden lg:block bg-white w-64 fixed rounded-lg border-none`}>
        <div className="p-4 space-y-2 gap-2">
          <div onClick={() => changeCategory("products")} className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${selectedCategory ===  "products" && "text-white bg-black"}  `}>
            Product
          </div>
          <div onClick={() => changeCategory("reviews")} className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${selectedCategory ===  "reviews" && "text-white bg-black"}  `}>
            Reviews
          </div>
          <Filter nameFilter={true}/>
          <div className={`hover:cursor-pointer hover:opacity-85 shadow-md p-2 font-bold bg-black text-white rounded-full uppercase text-center`}>
          + {selectedCategory}
          </div>
        </div>
      </div>

      <div id="sideNav" className={`lg:hidden w-full rounded-lg border-none p-4`}>
        <div className="flex flex-wrap justify-center gap-4">
          <div onClick={() => changeCategory("products")} className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${selectedCategory ===  "products" && "text-white bg-black"}  `}>
          Product
          </div>
          <div onClick={() => changeCategory("reviews")} className={` cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${selectedCategory ===  "reviews" && "text-white bg-black"}  `}>
          Reviews
          </div>
          <Filter nameFilter={true}/>
          <div className={`hover:cursor-pointer hover:opacity-85 shadow-md py-2 w-full  md: w-[300px] font-bold bg-black text-white rounded-full uppercase text-center`}>
          + {selectedCategory}
          </div>
        </div>
      </div>




    </>
  )
}
