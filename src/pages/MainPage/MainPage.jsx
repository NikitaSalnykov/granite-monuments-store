import { Container } from '../../components/Container/Container';
import { Features } from '../../components/Features/Features';
import { Hero } from '../../components/Hero/Hero';
import { Reviews } from '../../components/Reviews/Reviews';
import { Section } from '../../components/Section/Section';

const MainPage = () => {
  return (
    <>
      <Container>
        <Section>
          <Hero />
        </Section>
        <Section>
          <Features />
        </Section>
        <Section>
          <Reviews />
        </Section>
      </Container>
    </>
  );
};

export default MainPage;
