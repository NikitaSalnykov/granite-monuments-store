import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
      <Suspense fallback="....">
        <div className="pt-[100px]">
          <Outlet />
        </div>
      </Suspense>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SharedLayout;
