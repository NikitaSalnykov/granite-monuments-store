import React from 'react'
import { Filter } from '../../components/Filter/Filter'
import { ProductList } from '../../components/ProductList/ProductList'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Title } from '../../components/Title/Title'
import { useTranslation } from 'react-i18next'

const BuildingMaterialsPage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <Section>
    <Container>
    <Title title={t('building_materials')} description={t('landscaping-description')}/>

     <Filter nameFilter={true}  filterType={true} filterPrice={true} filterNew={true} filterSale={true} />
     <ProductList/>
   </Container>
  </Section>
  )
}

export default BuildingMaterialsPage