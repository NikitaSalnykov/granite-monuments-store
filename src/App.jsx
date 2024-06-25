import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import SharedLayout from './components/SharedLayout/SharedLayout';

const BuildingMaterialsPage = lazy(() => import('./pages/BuildingMaterialsPage/BuildingMaterialsPage'));
const ExtraServicesPage = lazy(() => import('./pages/ExtraServicesPage/ExtraServicesPage'));
const LandscapingPage = lazy(() => import('./pages/LandscapingPage/LandscapingPage'));
const RelatedProductsPage = lazy(() => import('./pages/RelatedProductsPage/RelatedProductsPage'));
const MemorialsPage = lazy(() => import('./pages/MemorialsPage/MemorialsPage'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const test = import.meta.env.VITE_API_TEST;

function App() {
  
  console.log(test);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />

          <Route path="/memorials" element={<MemorialsPage/>}/>
          <Route path="/memorials/:category" element={<CategoryPage />} />
          <Route path="/memorials/:category/:id" element={<ProductPage />} />

          <Route path="/landscaping" element={<LandscapingPage/>}/>
          <Route path="/landscaping/:category" element={<CategoryPage />} />
          <Route path="/landscaping/:category/:id" element={<ProductPage />}/>

          <Route path="/relatedproducts" element={<RelatedProductsPage/>}/>
          <Route path="/relatedproducts/:category" element={<CategoryPage />} />
          <Route path="/relatedproducts/:category/:id" element={<ProductPage />}/>

          <Route path="/buildingmaterials" element={<BuildingMaterialsPage/>}/>
          <Route path="/services" element={<ExtraServicesPage/>}/>
          <Route path="/services" element={<ExtraServicesPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/favorite" element={<FavoritePage/>}/>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
