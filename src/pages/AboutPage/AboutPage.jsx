import {Container}  from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import {Title} from '../../components/Title/Title'

const AboutPage = () => {
  return (
      <Section>
    <Container>
  <Title title={'Про нас'} description={'Меморіал сервіс – це команда професіоналів, яка спеціалізується на виготовленні памятників, благоустрої та наданні повного спектра ритуальних послуг. Наше завдання – допомогти вам створити гідний памятник для ваших близьких, зберігаючи їх память і шануючи їх спадок.'}/>
  <div class="mt-10 grid grid-cols-1 gap-6 lg:gap-12  md:grid-cols-3">
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-end overflow-hidden "><img src="https://ukr.granite.ua/wp-content/uploads/2018/05/Pamyatniki-s-angelom-3.jpg" alt="bg" class="absolute inset-0 h-full w-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="p-6 relative flex flex-col justify-end">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Record-breaking Profits</h4>
        <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">We are proud to announce that our bank has achieved record-breaking profits this year. Thanks to our dedicated team and loyal customers, we have surpassed all expectations and set new industry standards. Read more to learn about our success story.</p>
      </div>
    </div>
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-center overflow-hidden "><img src="https://www.stone.in.ua/wp-content/uploads/Evoropejskij-pamyatnik-002.jpg" alt="bg" class=" absolute inset-0 h-full w-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="p-6 relative flex flex-col justify-end">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Expansion into New Markets</h4>
        <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">We are excited to share that our bank has successfully expanded into new markets. With strategic partnerships and innovative solutions, we have established a strong presence in international markets. Learn more about our expansion journey and the opportunities it brings.</p>
      </div>
    </div>
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  min-h-[20rem]  items-end overflow-hidden "><img src="https://s.4595.com.ua/section/newsIcon/upload/images/news/icon/000/052/280/izgotovlenie-cokoley-v-borispole-09305971724f413bbf1870e06800x600_5f02f8d78cc74.jpg" alt="bg" class="absolute inset-0 h-full w-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="p-6 relative flex flex-col justify-end">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Digital Transformation Success</h4>
        <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 ">Our bank has undergone a successful digital transformation, revolutionizing the way we serve our customers. From seamless online banking experiences to advanced security measures, we have embraced technology to enhance customer satisfaction. Discover the key milestones of our digital transformation journey.</p>
      </div>
    </div>
  </div>
    </Container>
    </Section>
  );
};

export default AboutPage;
