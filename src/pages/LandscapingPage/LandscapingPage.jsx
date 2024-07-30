import React from 'react';
import { CategoriesList } from '../../components/CategoriesList/CategoriesList';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/Loader/Loader';

const LandscapingPage = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('antiSettlementSlabs'),
      category: 'landscaping',
      type: "antisettlementslabs",
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('pavingTiles'),
      category: 'landscaping',
      type: "pavingtiles",
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('graniteTiles'),
      category: 'landscaping',
      type: "granitetiles",
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('fencing'),
      category: 'landscaping',
      type: "fencing",
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('tablesAndBenches'),
      category: 'landscaping',
      type: "tablesandbenches",
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('vasesAndLamps'),
      category: 'landscaping',
      type: "vasesandlamps",
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
    {
      title: t('cubesAndSpheres'),
      category: 'landscaping',
      type: "cubesandspheres",
      img: 'https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg',
    },
  ];

  return (
    <Section>
      <Container>
        <div className="min-h-screen">
        <Title
          title={t('landscaping')}
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

export default LandscapingPage;
