import React from 'react';

export const Button = ({ bg = true, children }) => {
  return (
    <div
      className={`cursor-pointer transition-all shadow-sm ${
        !bg
          ? 'text-center  sm:w-full sm:max-w-[280px] md:w-full px-4 py-3 rounded  hover:opacity-90 hover:bg- hover:shadow-lg font-semibold text-md bg-blue-500 border-[1px] border-[#243642] lg:min-w-[200px]'
          : 'sm:w-full  sm:max-w-[280px] md:w-full  px-4 py-3 rounded font-semibold text-white text-md bg-[#243642] text-blue-500 border-[1px] border-[#243642] text-center  hover:opacity-90 hover:shadow-lg lg:min-w-[200px]'
      }`}
    >
      {children}
    </div>
  );
};
