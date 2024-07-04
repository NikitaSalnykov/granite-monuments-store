import React from 'react'
import { Filter } from '../../components/Filter/Filter'
import { ProductList } from '../../components/ProductList/ProductList'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'


const CategoryPage = () => {
  return (
   <Section>
     <Container className='h-screen'>
      <Filter nameFilter={true} filterColor={true} filterCategory={true} filterPrice={true} filterNew={true} filterSale={true} />
      <ProductList/>
    </Container>
   </Section>
  )
}

export default CategoryPage