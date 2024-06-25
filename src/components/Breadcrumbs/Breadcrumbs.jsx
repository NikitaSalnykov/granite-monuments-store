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
      case 'memorials':
        return (
          <Link to={'/memorials'} className="p-[2px] md:p-1">
             {t('monuments')}
          </Link>
        );
        case 'availability':
          return (
            <Link to={'/memorials/availability'} className="p-[2px] md:p-1">
               {t('availability')}
            </Link>
          );
      case 'vertical':
        return (
          <Link to={'/memorials/vertical'} className="p-[2px] md:p-1">
            {t('vertical')}
          </Link>
        );
      case 'horizontal':
        return (
          <Link to={'/memorials/horizontal'} className="p-[2px] md:p-1">
            {t('horizontal')}
          </Link>
        );
      case 'small':
        return (
          <Link to={'/memorials/small'} className="p-[2px] md:p-1">
          {t('small')}
          </Link>
        );
      case 'landscaping':
        return (
          <Link to={'/landscaping'} className="p-[2px] md:p-1">
            {t('landscaping')}
          </Link>
        );
      case 'antisettlementslabs':
        return (
          <Link to={'/landscaping/antisettlementslabs'} className="p-[2px] md:p-1">
           {t('anti_settlement_slabs')}р
          </Link>
        );
      case 'pavingtiles':
        return (
          <Link to={'/landscaping/pavingtiles'} className="p-[2px] md:p-1">
            {t('paving_tiles')}
          </Link>
        );
      case 'granitetiles':
        return (
          <Link to={'/landscaping/granitetiles'} className="p-[2px] md:p-1">
            {t('granite_tiles')}
          </Link>
        );
      case 'fencing':
        return (
          <Link to={'/landscaping/fencing'} className="p-[2px] md:p-1">
            {t('fencing')}
          </Link>
        );
      case 'tablesandbenches':
        return (
          <Link to={'/landscaping/tablesandbenches'} className="p-[2px] md:p-1">
            {t('tables_and_benches')}
          </Link>
        );
      case 'vasesandlamps':
        return (
          <Link to={'/landscaping/vasesandlamps'} className="p-[2px] md:p-1">
            {t('vases_and_lamps')}
          </Link>
        );
      case 'cubesandspheres':
        return (
          <Link to={'/landscaping/cubesandspheres'} className="p-[2px] md:p-1">
            {t('cubes_and_spheres')}
          </Link>
        );
      case 'relatedproducts':
        return (
          <Link to={'/landscaping/relatedproducts'} className="p-[2px] md:p-1">
            {t('related_products')}
          </Link>
        );
      case 'glassphotos':
        return (
          <Link to={'/relatedproducts/glassphotos'} className="p-[2px] md:p-1">
            {t('glass_photos')}
          </Link>
        );
      case 'plaques':
        return (
          <Link to={'/relatedproducts/plaques'} className="p-[2px] md:p-1">
            {t('plaques')}
          </Link>
        );
        case 'embeddedparts':
          return (
            <Link to={'/relatedproducts/embeddedparts'} className="p-[2px] md:p-1">
              {t('embedded_parts')}
            </Link>
          );
          case 'buildingmaterials':
            return (
              <Link to={'/buildingmaterials'} className="p-[2px] md:p-1">
                {t('building_materials')}
              </Link>
            );
          case 'services':
            return (
              <Link to={'/services'} className="p-[2px] md:p-1">
                {t('extra_services')}
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
      default:
        return null;
    }
  }

  return (
    <div className="text-xs flex flex-wrap gap-1 w-full md:text-sm py-6">
    <div className="flex justify-center items-center gap-1 p-[2px] md:p-1">
    <Svg id={"icon-mobile-menu-open"} size={14} fill={'black'}/>
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
