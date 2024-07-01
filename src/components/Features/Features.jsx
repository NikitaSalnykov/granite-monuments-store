import React from 'react';
import Svg from '../Svg/Svg';
import { Title } from '../Title/Title';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';

export const Features = () => {
  return (
    <Section>
      <Container>
        <Title accent={'Ми гарантуємо'} />
        <ul className="flex gap-4 md:gap-16 xl:gap-16 justify-center items-start flex-wrap">
          <li className="md:w-[320px]">
            <div className="flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="md:hidden flex justify-center items-center p-2 rounded-xl min-w-[82px] ">
                  <Svg id={'icon-quality'} size={42} stroke={'#ffc400'} />
                </div>
                <div className="hidden md:block p-2 rounded-xl">
                  <Svg id={'icon-quality'} size={62} stroke={'#ffc400'} />
                </div>
                <p className="text-xs font-bold md:text-lg text-center">
                  Високу якість
                </p>
              </div>
              <p className="text-sm text-start md:text-center text-secondaryText">
                Ми використовуємо тільки високоякісні матеріали та сучасні
                технології для виготовлення пам'ятників, що гарантує їх
                довговічність та стійкість.
              </p>
            </div>
          </li>
          <li className="md:w-[320px]">
            <div className="flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="p-2 rounded-xl md:hidden ">
                  <Svg id={'icon-clock'} size={42} fill={'transparent'} />
                </div>
                <div className="hidden md:block p-2 rounded-xl">
                  <Svg id={'icon-clock'} size={62} fill={'transparent'} />
                </div>
                <p className="text-xs font-bold md:text-lg text-center">
                  Виготовлення протягом 14 днів
                </p>
              </div>
              <p className="text-sm text-start md:text-center text-secondaryText">
                Ми забезпечуємо швидке виготовлення замовлень, і ваш пам'ятник
                буде готовий протягом 14 днів з моменту підтвердження
                замовлення.
              </p>
            </div>
          </li>
          <li className="md:w-[320px]">
            <div className="flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="p-2 rounded-xl md:hidden">
                  <Svg id={'icon-delivery'} size={42} fill={'black'} />
                </div>
                <div className="hidden md:block p-2 rounded-xl">
                  <Svg id={'icon-delivery'} size={62} fill={'black'} />
                </div>
                <p className="text-xs font-bold md:text-lg text-center">
                  Перевезення та встановлення
                </p>
              </div>
              <p className="text-sm text-start md:text-center text-secondaryText">
                Ми надаємо послуги з перевезення та встановлення пам'ятників,
                забезпечуючи повний сервіс від початку до кінця.
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
};
