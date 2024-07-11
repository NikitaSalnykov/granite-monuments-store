import { useTranslation } from 'react-i18next';
import {Container}  from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import {Title} from '../../components/Title/Title'

const AboutPage = () => {
  const { t } = useTranslation();


  return (
      <Section>
    <Container>
  <Title title={t('about')} description={'Меморіал сервіс – це команда професіоналів, яка спеціалізується на виготовленні памятників, благоустрої та наданні повного спектра ритуальних послуг. Наше завдання – допомогти вам створити гідний памятник для ваших близьких, зберігаючи їх память і шануючи їх спадок.'}/>
  <div class="mt-10 grid grid-cols-1 gap-6 lg:gap-12  md:grid-cols-3">
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-end overflow-hidden "><img src="https://ukr.granite.ua/wp-content/uploads/2018/05/Pamyatniki-s-angelom-3.jpg" alt="bg" class="absolute inset-0 h-full w-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="p-6 relative flex flex-col justify-end">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">{t('monuments')}</h4>
        <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">{t('about_monuments')}</p>
      </div>
    </div>
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-center overflow-hidden "><img src="https://www.stone.in.ua/wp-content/uploads/Evoropejskij-pamyatnik-002.jpg" alt="bg" class=" absolute inset-0 h-full w-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="p-6 relative flex flex-col justify-end">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">{t('landscaping')}</h4>
        <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">{t('about_landscaping')}</p>
      </div>
    </div>
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-end overflow-hidden "><img src="https://s.4595.com.ua/section/newsIcon/upload/images/news/icon/000/052/280/izgotovlenie-cokoley-v-borispole-09305971724f413bbf1870e06800x600_5f02f8d78cc74.jpg" alt="bg" class="absolute inset-0 h-full w-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="p-6 relative flex flex-col justify-end">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">{t('related_products')}, {t('extra_services')}</h4>
        <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">{t('about_secondary')}</p>
      </div>
    </div>
  </div>
    </Container>
    </Section>
  );
};

export default AboutPage;
