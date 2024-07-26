import React from 'react';
import { CategoriesList } from '../../components/CategoriesList/CategoriesList';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/Loader/Loader';

const MonumentsPage = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('vertical'),
      link: '/monuments/vertical',
      category: 'monuments',
      type: 'vertical',
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('horizontal'),
      link: '/monuments/horizontal',
      category: 'monuments',
      type: 'horizontal',
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('small'),
      link: '/monuments/small',
      category: 'monuments',
      type: 'small',
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
  ];

  return (
    <Section>
      <Container>
        <div className="h-screen">
        <Title
          title={t('monuments')}
          description={t('landscapingDescription')}
        />
        {categories && categories.length > 0 ? (
          <CategoriesList categories={categories} />
        ) : (
          <Loader />
        )}
        </div>
      </Container>
    </Section>
  );
};

export default MonumentsPage;
