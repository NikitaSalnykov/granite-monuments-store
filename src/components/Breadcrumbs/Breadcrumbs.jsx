import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Svg from '../Svg/Svg';

const Breadcrumbs = ({ name }) => {
  const [arr, setArr] = useState([]);
  const { t } = useTranslation();
  const currentUrl = window.location.href;  
  
  useEffect(() => {
    const url = new URL(currentUrl);
    const path = url.pathname;
    const pathSegments = path.split('/');
    const filtered = pathSegments.filter((el) => el !== '');
    setArr(filtered);
  }, [currentUrl]);

  function createNavLink(el) {
    switch (el) {
      case 'monuments':
        return (
          <Link to={'/products?category=monuments'} className="p-[2px] md:p-1">
            {t('monuments')}
          </Link>
        );
      case 'granite-monuments-store':
        return null;
      case 'availability':
        return (
          <Link to={'/products?category=monuments&type=availability'} className="p-[2px] md:p-1">
            {t('availability')}
          </Link>
        );
      case 'vertical':
        return (
          <Link to={'/products?category=monuments&type=vertical'} className="p-[2px] md:p-1">
            {t('vertical')}
          </Link>
        );
      case 'horizontal':
        return (
          <Link to={'/products?category=monuments&type=horizontal'} className="p-[2px] md:p-1">
            {t('horizontal')}
          </Link>
        );
      case 'small':
        return (
          <Link to={'/products?category=monuments&type=small'} className="p-[2px] md:p-1">
            {t('small')}
          </Link>
        );
      case 'landscaping':
        return (
          <Link to={'/products?category=landscaping'} className="p-[2px] md:p-1">
            {t('landscaping')}
          </Link>
        );
      case 'antisettlementslabs':
        return (
          <Link
            to={'/products?category=landscaping&type=antiSettlementSlabs'}
            className="p-[2px] md:p-1"
          >
            {t('antiSettlementSlabs')}р
          </Link>
        );
      case 'pavingTiles':
        return (
          <Link to={'/products?category=landscaping&type=pavingTiles'} className="p-[2px] md:p-1">
            {t('pavingTiles')}
          </Link>
        );
      case 'graniteTiles':
        return (
          <Link to={'/products?category=landscaping&type=graniteTiles'} className="p-[2px] md:p-1">
            {t('graniteTiles')}
          </Link>
        );
      case 'fencing':
        return (
          <Link to={'/products?category=landscaping&type=fencing'} className="p-[2px] md:p-1">
            {t('fencing')}
          </Link>
        );
      case 'tablesAndBenches':
        return (
          <Link to={'/products?category=landscaping&type=tablesAndBenches'} className="p-[2px] md:p-1">
            {t('tablesAndBenches')}
          </Link>
        );
      case 'vasesandlamps':
        return (
          <Link to={'/products?category=landscaping&type=vasesAndLamps'} className="p-[2px] md:p-1">
            {t('vasesAndLamps')}
          </Link>
        );
      case 'cubesandspheres':
        return (
          <Link to={'/products?category=landscaping&type=cubesAndSpheres'} className="p-[2px] md:p-1">
            {t('cubesAndSpheres')}
          </Link>
        );
      case 'relatedProducts':
        return (
          <Link to={'/products?category=relatedProducts'} className="p-[2px] md:p-1">
            {t('relatedProducts')}
          </Link>
        );
      case 'glassPhotos':
        return (
          <Link to={'/products?category=relatedProducts&type=glassPhotos'} className="p-[2px] md:p-1">
            {t('glassPhotos')}
          </Link>
        );
      case 'plaques':
        return (
          <Link to={'/products?category=relatedProducts&type=plaques'} className="p-[2px] md:p-1">
            {t('plaques')}
          </Link>
        );
      case 'embeddedParts':
        return (
          <Link
            to={'/products?category=relatedProducts&type=embeddedParts'}
            className="p-[2px] md:p-1"
          >
            {t('embeddedParts')}
          </Link>
        );
        
      case 'buildingMaterials':
        return (
          <Link to={'/buildingmaterials'} className="p-[2px] md:p-1">
            {t('buildingMaterials')}
          </Link>
        );
      case 'services':
        return (
          <Link to={'/services'} className="p-[2px] md:p-1">
            {t('extraServices')}
          </Link>
        );
      case 'about':
        return (
          <Link to={'/about'} className="p-[2px] md:p-1">
            {t('contacts')}
          </Link>
        );
      case 'favorite':
        return (
          <Link to={'/favorite'} className="p-[2px] md:p-1">
            {t('favorites')}
          </Link>
        );
      case 'all':
        return <div className="p-[2px] md:p-1">{t('all')}</div>;
      case 'products':
        return  <Link to={'/products'} className="p-[2px] md:p-1">
        {t('products')}
      </Link>

      default:
        return (
          <div
            to={''}
            className="p-[2px] md:p-1 flex justify-center items-center"
          >
            {/* {t('favorites')} */}
            <Svg id={'icon-logo'} size={15} stroke={'black'} fill={'grey'} />
          </div>
        );
        return null;
    }
  }

  return (
    <div className="text-sm flex flex-wrap gap-1 w-full md:text-sm  lg:text-md py-6 mx-auto max-w-7xl lg:max-w-full font-manrope">
      <div className="flex justify-center items-center gap-1 p-[2px] md:p-1">
        <Svg id={'icon-mobile-menu-open'} size={14} fill={'black'} />
        <Link to={'/'} className="">
          {t('main')}
        </Link>
      </div>
      {arr.map((el, index) => {
        if (!el) return;
        return (
          <React.Fragment key={index}>
            {createNavLink(el)}
            {index < arr.length - 1 ? (
              <div className="p-[2px] md:p-1">→</div>
            ) : null}
          </React.Fragment>
        );
      })}
      {name && (
        <>
          <Link className="p-[2px] md:p-1">{name}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
