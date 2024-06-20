import React from 'react'

export const Title = ({title, accent}) => {
  return (
    <h3 className='text-center text-3xl md:text-4xl capitalize font-semibold mb-4 md:mb-12 '>
      {title} <span className='text-darkBrown'>{accent}</span>
    </h3>
  )
}
