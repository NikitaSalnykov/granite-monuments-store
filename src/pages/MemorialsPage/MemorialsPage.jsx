
import React from 'react'
import { CategoriesList } from '../../components/CategoriesList/CategoriesList'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Title } from '../../components/Title/Title'
import { useTranslation } from 'react-i18next'
import Loader from '../../components/Loader/Loader'

const MemorialsPage = () => {

  const { t } = useTranslation();

  const categories = [  { title: t('anti_settlement_slabs'), link: '/monuments/availability', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" },
  { title: t('paving_tiles'), link: '/monuments/vertical', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" },
  { title: t('granite_tiles'), link: '/monuments/horizontal', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg"  },
  { title: t('fencing'), link: '/monuments/small', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg"  },
  ]

  return (
    <Section>
    <Container>
      <Title title={t('monuments')} description={t('landscaping-description')}/>
      {categories && categories.length > 0 ?  <CategoriesList categories={categories}/> : <Loader/>}
    </Container>
    </Section>
  )
}

export default MemorialsPage