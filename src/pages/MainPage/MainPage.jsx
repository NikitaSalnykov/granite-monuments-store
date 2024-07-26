import { AllCategories } from '../../components/AllCategories/AllCategories';
import { Container } from '../../components/Container/Container';
import { Features } from '../../components/Features/Features';
import { Hero } from '../../components/Hero/Hero';
import { ProductsRecommendation } from '../../components/ProductsRecommendation/ProductsRecommendation';
import { Reviews } from '../../components/Reviews/Reviews';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { Works } from '../../components/Works/Works';

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
          <AllCategories />
        </Section>
        <Section>
          <Works />
        </Section>
        <Section>
          <Reviews />
        </Section>
        <Section>
        <ProductsRecommendation discount={true}/>   
        </Section>
      </Container>
    </>
  );
};

export default MainPage;
