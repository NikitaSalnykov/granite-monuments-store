import React from 'react'

export const AdminNavbar = ({changeCategory, selectedCategory}) => {
  return (
    <>

      
    <div id="sideNav" className={`hidden lg:block bg-white w-64 fixed rounded-lg border-none`}>
        <div className="p-4 space-y-4 gap-2">
          <div onClick={() => changeCategory("products")} className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${selectedCategory ===  "products" && "text-white bg-black"}  `}>
            Product
          </div>
          <div onClick={() => changeCategory("reviews")} className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${selectedCategory ===  "reviews" && "text-white bg-black"}  `}>
            Reviews
          </div>
        </div>
      </div>

      <div id="sideNav" className={`lg:hidden bg-white w-full rounded-lg border-none p-2`}>
        <div className="flex flex-wrap justify-center gap-2">
          <div onClick={() => changeCategory("products")} className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${selectedCategory ===  "products" && "text-white bg-black"}  `}>
          Product
          </div>
          <div onClick={() => changeCategory("reviews")} className={` cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${selectedCategory ===  "reviews" && "text-white bg-black"}  `}>
          Reviews
          </div>
        </div>
      </div>

    </>
  )
}
