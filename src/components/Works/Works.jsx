import React from 'react'
import { Title } from '../Title/Title'
import { WorksList } from './WorksList'
import { WorksCard } from './WorksCard'

export const Works = () => {
  return (
    <>
    <Title title={'Наші роботи'}/>
    <WorksList>
      <WorksCard/>
    </WorksList>
    </>
  )
}
