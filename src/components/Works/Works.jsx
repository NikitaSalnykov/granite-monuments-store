import React from 'react';
import { Title } from '../Title/Title';
import { WorksList } from './WorksList';
import { useTranslation } from 'react-i18next';



export const Works = () => {

const {t} = useTranslation()

const worksArr = [
  {
    img: 'https://granite.dp.ua/images/service11111.jpg',
    title: t('work_1_title'),
    description: t('work_1_title'),
    text: t('work_1_text'),
    buttonName: t('go_to_landscaping'),
    link: '/landscaping',
  },
  {
    img: 'https://ua-ritual.com/images/blagoustroistvo-mogily.jpg',
    title: t('work_2_title'),
    description: t('work_2_title'),
    text: t('work_2_text'),
    buttonName: t('go_to_monuments'),
    link: '/monuments',
  },
  {
    img: 'https://ritual-stone.com.ua/wp-content/uploads/2022/12/Uhod-za-mogiloj.webp',
    title: t('work_3_title'),
    description: t('work_3_title'),
    text: t('work_3_text'),
    buttonName: t('to_order'),
    link: '/about',
  },
  {
    img: 'https://www.granitas.by/new/ograda3.jpg',
    title: t('work_4_title'),
    description: t('work_4_title'),
    text: t('work_4_text'),
    buttonName: t('find_out_the_cost'),
    link: '/products?type=vertical&category=monuments&page=1',
  },
];
  return (
    <>
      <Title title={t('our_works')} />
      <WorksList worksArr={worksArr} />
    </>
  );
};
