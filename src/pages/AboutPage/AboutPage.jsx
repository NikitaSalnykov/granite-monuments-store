import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { Works } from '../../components/Works/Works';
import { Reviews } from '../../components/Reviews/Reviews';
import monumentsImg from '../../images/Памятники.webp';
import landscapingImg from '../../images/Благоустройство.png';
import services from '../../images/img-1.jpg';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Container>
          <Title
            title={t('about')}
            description={
              'Меморіал сервіс – це команда професіоналів, яка спеціалізується на виготовленні памятників, благоустрої та наданні повного спектра ритуальних послуг. Наше завдання – допомогти вам створити гідний памятник для ваших близьких, зберігаючи їх память і шануючи їх спадок.'
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:gap-12  md:grid-cols-3">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-end overflow-hidden bg-slate-400">
              <img
                src={monumentsImg}
                alt="bg"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                  {t('monuments')}
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">
                  {t('about_monuments')}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-center overflow-hidden bg-slate-400">
              <img
                src={landscapingImg}
                alt="bg"
                className=" absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                  {t('landscaping')}
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">
                  {t('about_landscaping')}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-end overflow-hidden bg-slate-400">
              <img
                src={services}
                alt="bg"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                  {t('relatedProducts')},
                </h4>
                <p className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                  {' '}
                  {t('extraServices')}
                </p>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">
                  {t('about_secondary')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Works />
        </Container>
      </Section>
      <Section>
        <Container>
          <Reviews />
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
