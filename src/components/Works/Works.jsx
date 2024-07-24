import React from 'react';
import { Title } from '../Title/Title';
import { WorksList } from './WorksList';
import { useTranslation } from 'react-i18next';

const worksArr = [
  {
    img: 'https://granite.dp.ua/images/service11111.jpg',
    title: 'There’s a better way to talk with your customers.',
    description: 'asdasdas',
    text: 'Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price',
    buttonName: 'Перейти до пам`ятників',
    link: '/monuments',
  },
  {
    img: 'https://ua-ritual.com/images/blagoustroistvo-mogily.jpg',
    title: 'There’s a better way to talk with your customers.',
    description: 'asdasdas',
    text: 'Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price',
    buttonName: 'Перейти до благоустрію',
    link: '/monuments',
  },
  {
    img: 'https://ritual-stone.com.ua/wp-content/uploads/2022/12/Uhod-za-mogiloj.webp',
    title: 'There’s a better way to talk with your customers.',
    description: 'asdasdas',
    text: 'Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price',
    buttonName: 'Дізнатися вартість',
    link: '/monuments',
  },
  {
    img: 'https://www.gor-ritual.com.ua/wp-content/uploads/2022/02/graves-ge96b01c27_1920-min-1-e1644248283287-1024x741.jpg',
    title: 'There’s a better way to talk with your customers.',
    description: 'asdasdas',
    text: 'Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price',
    buttonName: 'Замовити',
    link: '/monuments',
  },
];

export const Works = () => {

const {t} = useTranslation()

  return (
    <>
      <Title title={t('our_works')} />
      <WorksList worksArr={worksArr} />
    </>
  );
};
