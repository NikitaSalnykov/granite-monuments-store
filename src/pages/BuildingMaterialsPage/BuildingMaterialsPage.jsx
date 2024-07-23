import React from 'react'
import { Filter } from '../../components/Filter/Filter'
import { ProductList } from '../../components/ProductList/ProductList'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Title } from '../../components/Title/Title'
import { useTranslation } from 'react-i18next'
import photo from '../../images/example.webp'

const BuildingMaterialsPage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  
const products = [
  {
    id: 1,
    image: photo,
    title: 'Надгробна плита 1',
    category: "monuments",
    type: "vertical",
    description: 'Опис для надгробної плити 1 Опис для надгробної плити 1 Опис для надгробної плити 1 Опис для надгробної плити 1',
    price: '5000 грн'
  },
  {
    id: 2,
    image: photo,
    title: 'Пам\'ятник 2',
    category: "monuments",
    type: "vertical",
    description: 'Опис для пам\'ятника 2',
    discount: 15,
    price: '12000 грн'
  },
  {
    id: 3,
    image: photo,
    title: 'Надгробна плита 3',
    category: "monuments",
    type: "vertical",
    description: 'Опис для надгробної плити 3',
    discount: 20,
    price: '7000 грн'
  },
  {
    id: 4,
    image: photo,
    title: 'Пам\'ятник 4',
    category: "monuments",
    type: "vertical",
    description: 'Опис для пам\'ятника 4',
    discount: 25,
    price: '15000 грн'
  },
  {
    id: 5,
    image: photo,
    title: 'Надгробна плита 5',
    category: "monuments",
    type: "vertical",
    description: 'Опис для надгробної плити 5',
    discount: 30,
    price: '8000 грн'
  },
  {
    id: 6,
    image: photo,
    title: 'Пам\'ятник 6',
    category: "monuments",
    type: "vertical",
    description: 'Опис для пам\'ятника 6',
    discount: 5,
    price: '10000 грн'
  },
  {
    id: 7,
    image: photo,
    title: 'Надгробна плита 7',
    category: "monuments",
    type: "vertical",
    description: 'Опис для надгробної плити 7',
    discount: 50,
    price: '6000 грн'
  },
  {
    id: 8,
    image: photo,
    title: 'Пам\'ятник 8',
    category: "monuments",
    type: "vertical",
    description: 'Опис для пам\'ятника 8',
    discount: 35,
    price: '20000 грн'
  },
  {
    id: 9,
    image: photo,
    title: 'Надгробна плита 9',
    category: "monuments",
    type: "vertical",
    description: 'Опис для надгробної плити 9',
    discount: 40,
    price: '9000 грн'
  },
  {
    id: 10,
    image: photo,
    title: 'Пам\'ятник 10',
    category: "monuments",
    type: "vertical",
    description: 'Опис для пам\'ятника 10',
    discount: 45,
    price: '25000 грн'
  }
];
  
  return (
    <Section>
    <Container>
    <Title title={t('building_materials')} description={t('landscaping-description')}/>

     <Filter nameFilter={true}  filterType={true} filterPrice={true} filterNew={true} filterSale={true} />
     <ProductList products={products}/>
   </Container>
  </Section>
  )
}

export default BuildingMaterialsPage