import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Container} from '../../components/Container/Container'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Background } from '../Background/Background';
import Loader from '../Loader/Loader';
const SharedLayout = () => {
  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };
  const location = useLocation();

  useEffect(() => {
    handleNavigate();
  }, [location.pathname]);

  return (
    <>
      <header>
        <Header />
      </header>

      <div className="relative">

      <Container>
      <div className="pt-[60px]">  
      <Breadcrumbs/>
      </div>
      </Container>

      <Suspense fallback={<Loader/>}>
          <Container>
            <Outlet/>
            <Background />
            </Container>
      </Suspense>

      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SharedLayout;
