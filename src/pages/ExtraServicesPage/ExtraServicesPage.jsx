import React from 'react';
import { Title } from '../../components/Title/Title';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';

const ExtraServicesPage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <Section>
      <Container>
        <Title
          title={t('extraServices')}
          description={t('landscapingDescription')}
        />
        <div className="w-full">
          <ul className="flex gap-8 flex-col justify-center">
            <li
              className={`flex w-full flex-col md:flex-row-reverse gap-4 md:gap-8`}
            >
              <div className="flex md:mx-auto w-full  md:w-1/2 h-[300px]  md:h-auto md:h-[400px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-auto object-cover"
                  src={
                    'https://osiris.memorial/wp-content/uploads/2021/10/vip-pohorony.png'
                  }
                  alt={''}
                />
              </div>
              <div className="w-full  mx-auto md:w-1/2 flex flex-col  justify-center md:pr-10 gap-6">
                <h2
                  className={`text-xl md:text-3xl text-center md:text-start   text-blue-900 mdOnly:text-center leading-tight font-medium`}
                >
                  {t('delivery_title')}
                </h2>
                <div className="mdOnly:flex-col mdOnly:items-start mdOnly:justify-center mdOnly:gap-8">
                  <p
                    className={`text-md md:text-xl  md:text-start   mdOnly:text-center font-light`}
                  >
                    {t('delivery_text')}
                  </p>
                  <div
                    className={`flex flex-col sm:flex-row justify-center mt-4 md:mt-8 lg:justify-start`}
                  >
                    <Link to={''}>
                      <Button>Дізнатися</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className={`flex w-full flex-col md:flex-row gap-4 md:gap-8`}>
              <div className="flex md:mx-auto w-full  md:w-1/2 h-[300px] md:w-[800px] md:h-auto md:h-[400px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-auto object-cover"
                  src={
                    'https://osiris.memorial/wp-content/uploads/2021/10/vip-pohorony.png'
                  }
                  alt={''}
                />
              </div>
              <div className="w-full md:w-[900px] mx-auto md:w-1/2 flex flex-col  justify-center md:pr-10 gap-6">
                <h2
                  className={`text-xl md:text-3xl text-center md:text-start  text-blue-900 mdOnly:text-center leading-tight font-medium`}
                >
                  Доставка
                </h2>
                <div className="mdOnly:flex-col mdOnly:items-start mdOnly:justify-start mdOnly:gap-8">
                  <p
                    className={`text-md md:text-xl md:text-start  mdOnly:text-center font-light`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi inventore, officiis corporis fugiat, excepturi
                    aliquid laboriosam ad esse ex, deleniti repellendus nisi
                    illo voluptate sed iusto facere ullam asperiores quia? Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequuntur consequatur inventore, neque accusamus
                    voluptatum modi facere suscipit recusandae minus sunt nam
                    atque, debitis cum esse sed ullam ea. Maxime, ipsa?
                  </p>
                  <div
                    className={`flex flex-col sm:flex-row justify-center lg:justify-start mt-4 md:mt-8`}
                  >
                    <Link to={''}>
                      <Button>Дізнатися</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default ExtraServicesPage;
