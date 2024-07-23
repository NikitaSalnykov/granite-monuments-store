import React from 'react';
import { CategoriesList } from '../../components/CategoriesList/CategoriesList';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/Loader/Loader';

const RelatedProductsPage = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('glassPhotos'),
      link: '/relatedproducts/glassphotos',
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('plaques'),
      link: '/relatedproducts/plaques',
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('embeddedParts'),
      link: '/relatedproducts/embeddedparts',
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
  ];

  return (
    <Section>
      <Container>
        <Title
          title={t('relatedProducts')}
          description={t('landscapingDescription')}
        />
        {categories && categories.length > 0 ? (
          <CategoriesList categories={categories} />
        ) : (
          <Loader />
        )}
      </Container>
    </Section>
  );
};

export default RelatedProductsPage;
