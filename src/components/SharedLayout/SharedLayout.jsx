import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Container} from '../../components/Container/Container'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Background } from '../Background/Background';
import Loader from '../Loader/Loader';
import { FloatingButtons } from '../FloatingButtons/FloatingButtons';
import { Border } from '../Border/Border';
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

      <div className="relative overflow-hidden">

<div className="pt-[60px] px-4 lg:px-12">  
<Breadcrumbs/>
</div>

<Suspense fallback={<Loader/>}>
      <Outlet/>
      <Background />
</Suspense>

</div>
      <footer>
        <Footer />
      </footer>
      <FloatingButtons/>
    </>
  );
};

export default SharedLayout;
