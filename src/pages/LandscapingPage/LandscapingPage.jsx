import React from 'react'
import { CategoriesList } from '../../components/CategoriesList/CategoriesList'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Title } from '../../components/Title/Title'
import { useTranslation } from 'react-i18next'
import Loader from '../../components/Loader/Loader'

const LandscapingPage = () => {

  const { t } = useTranslation();

  const categories = [  { title: t('anti_settlement_slabs'), link: '/landscaping/antisettlementslabs', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" },
  { title: t('paving_tiles'), link: '/landscaping/pavingtiles', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" },
  { title: t('granite_tiles'), link: '/landscaping/granitetiles', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg"  },
  { title: t('fencing'), link: '/landscaping/fencing', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg"  },
  { title: t('tables_and_benches'), link: '/landscaping/tablesandbenches', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg"  },
  { title: t('vases_and_lamps'), link: '/landscaping/vasesandlamps', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg"  },
  { title: t('cubes_and_spheres'), link: '/landscaping/cubesandspheres', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg"  },]

  return (
    <Section>
    <Container>
      <Title title={t('landscaping')} description={t('landscaping-description')}/>
      {categories && categories.length > 0 ?  <CategoriesList categories={categories}/> : <Loader/>}
    </Container>
    </Section>
  )
}

export default LandscapingPage