import { Container } from '../../components/Container/Container';
import {Features} from '../../components/Features/Features'
import {Hero} from '../../components/Hero/Hero'
import { Section } from '../../components/Section/Section';

const MainPage = () => {
  return (
<>
    <Container> 
    <Section>
    <Hero/>
    </Section>
    <Section>
    <Features/>
    </Section>
    </Container>
    </>
  );
};

export default MainPage;
