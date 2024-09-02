import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Loader from './components/Loader/Loader';
import AdminRoute from './components/Route/AdminRoute';
import AdminPage from './pages/AdminPage/AdminPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PublicRoute from './components/Route/PublicRoute';
import { useDispatch } from 'react-redux';
import setUpInterceptor from './helpers/axiosInterceptor';
import { currentUser } from './Redux/auth/auth-operations';

const BuildingMaterialsPage = lazy(() => import('./pages/BuildingMaterialsPage/BuildingMaterialsPage'));
const ExtraServicesPage = lazy(() => import('./pages/ExtraServicesPage/ExtraServicesPage'));
const LandscapingPage = lazy(() => import('./pages/LandscapingPage/LandscapingPage'));
const RelatedProductsPage = lazy(() => import('./pages/RelatedProductsPage/RelatedProductsPage'));
const MonumentsPage = lazy(() => import('./pages/MonumentsPage/MonumentsPage'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const WorksPage = lazy(() => import('./pages/WorksPage/WorksPage'));

const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const test = import.meta.env.VITE_API_TEST;

function App() {

  const dispatch = useDispatch();
  setUpInterceptor(dispatch);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);



  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="home" element={<MainPage />} />

            <Route path="products">
              <Route index element={<CategoryPage />} />
              <Route path=":category/:type/:id" element={<ProductPage />} />
            </Route>

            <Route path="monuments" element={<MonumentsPage />} />
            <Route path="landscaping" element={<LandscapingPage />} />
            <Route path="relatedproducts" element={<RelatedProductsPage />} />

            <Route path="buildingmaterials" element={<BuildingMaterialsPage />} />
            <Route path="services" element={<ExtraServicesPage />} />
            <Route path="gallery" element={<WorksPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="*" element={<ErrorPage />} />

            <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />

            <Route
          path="/admin"
          element={
            <Suspense fallback={<Loader />}>
              <AdminRoute restricted>
                <AdminPage />
              </AdminRoute>
            </Suspense>
          }
        />
          </Route>

            

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
