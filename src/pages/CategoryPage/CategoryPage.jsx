import React from 'react'
import { Filter } from '../../components/Filter/Filter'
import { ProductList } from '../../components/ProductList/ProductList'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import photo from '../../images/example.webp'

const products = [
  {
    id: 1,
    image: photo,
    title: 'Надгробна плита 1',
    category: "memorials",
    type: "vertical",
    description: 'Опис для надгробної плити 1 Опис для надгробної плити 1 Опис для надгробної плити 1 Опис для надгробної плити 1',
    price: '5000 грн'
  },
  {
    id: 2,
    image: photo,
    title: 'Пам\'ятник 2',
    category: "memorials",
    type: "vertical",
    description: 'Опис для пам\'ятника 2',
    discount: 15,
    price: '12000 грн'
  },
  {
    id: 3,
    image: photo,
    title: 'Надгробна плита 3',
    category: "memorials",
    type: "vertical",
    description: 'Опис для надгробної плити 3',
    discount: 20,
    price: '7000 грн'
  },
  {
    id: 4,
    image: photo,
    title: 'Пам\'ятник 4',
    category: "memorials",
    type: "vertical",
    description: 'Опис для пам\'ятника 4',
    discount: 25,
    price: '15000 грн'
  },
  {
    id: 5,
    image: photo,
    title: 'Надгробна плита 5',
    category: "memorials",
    type: "vertical",
    description: 'Опис для надгробної плити 5',
    discount: 30,
    price: '8000 грн'
  },
  {
    id: 6,
    image: photo,
    title: 'Пам\'ятник 6',
    category: "memorials",
    type: "vertical",
    description: 'Опис для пам\'ятника 6',
    discount: 5,
    price: '10000 грн'
  },
  {
    id: 7,
    image: photo,
    title: 'Надгробна плита 7',
    category: "memorials",
    type: "vertical",
    description: 'Опис для надгробної плити 7',
    discount: 50,
    price: '6000 грн'
  },
  {
    id: 8,
    image: photo,
    title: 'Пам\'ятник 8',
    category: "memorials",
    type: "vertical",
    description: 'Опис для пам\'ятника 8',
    discount: 35,
    price: '20000 грн'
  },
  {
    id: 9,
    image: photo,
    title: 'Надгробна плита 9',
    category: "memorials",
    type: "vertical",
    description: 'Опис для надгробної плити 9',
    discount: 40,
    price: '9000 грн'
  },
  {
    id: 10,
    image: photo,
    title: 'Пам\'ятник 10',
    category: "memorials",
    type: "vertical",
    description: 'Опис для пам\'ятника 10',
    discount: 45,
    price: '25000 грн'
  }
];



const CategoryPage = () => {
  return (
   <Section>
     <Container className='h-screen'>
      <Filter nameFilter={true} filterType={true} filterCategory={true} filterPrice={true} filterNew={true} filterSale={true} />
      <ProductList products={products}/>
    </Container>
   </Section>
  )
}

export default CategoryPage