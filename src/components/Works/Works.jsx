import React from 'react';
import { Title } from '../Title/Title';
import { WorksList } from './WorksList';
import { useTranslation } from 'react-i18next';
import img1 from '../../images/work-1.jpg'
import img2 from '../../images/work-2.jpg'
import img3 from '../../images/work-3.jpg'
import img4 from '../../images/work-4.jpg'

export const Works = () => {

const {t} = useTranslation()

const worksArr = [
  {
    img: img1,
    title: t('work_1_title'),
    description: t('work_1_title'),
    text: t('work_1_text'),
    buttonName: t('go_to_landscaping'),
    link: '/landscaping',
  },
  {
    img: img2,
    title: t('work_2_title'),
    description: t('work_2_title'),
    text: t('work_2_text'),
    buttonName: t('go_to_monuments'),
    link: '/monuments',
  },
  {
    img: img3,
    title: t('work_3_title'),
    description: t('work_3_title'),
    text: t('work_3_text'),
    buttonName: t('to_order'),
    link: '/about',
  },
  {
    img: img4,
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
