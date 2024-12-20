import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Dropdown } from '../Dropdown/Dropdown';
import { Logo } from '../Logo/Logo';
import Svg from '../Svg/Svg';
import { Link } from 'react-router-dom';



const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onToglegModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="bg-[#fffffffd] z-50 fixed mx-auto w-full lg:px-8 border-b ">
        <div className="w-full h-auto blur-lg absolute top-0 right-0"></div>
        <div className="py-4 px-6 mx-auto max-w-7xl lg:max-w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-8">
              <div className="flex items-center">
                <Logo size={40} secondaryTextSize={'sm'} />
              </div>
            </div>

            <div className="hidden lg:flex gap-x-4 text-sm font-manrope">
              <Dropdown
                title={t('monuments')}
                links={[
                  {
                    title: t('vertical'),
                    link: `/products?category=monuments&type=vertical`,
                  },
                  {
                    title: t('horizontal'),
                    link: `/products?category=monuments&type=horizontal`,
                  },
                  {
                    title: t('small'),
                    link: `/products?category=monuments&type=small`,
                  },
                ]}
              />
              <Dropdown
                title={t('landscaping')}
                links={[
                  {
                    title: t('antiSettlementSlabs'),
                    link: '/products?category=landscaping&type=antiSettlementSlabs',
                  },
                  {
                    title: t('pavingTiles'),
                    link: '/products?category=landscaping&type=pavingTiles',
                  },
                  {
                    title: t('graniteTiles'),
                    link: '/products?category=landscaping&type=graniteTiles',
                  },
                  {
                    title: t('fencing'),
                    link: '/products?category=landscaping&type=fencing',
                  },
                  {
                    title: t('tablesAndBenches'),
                    link: '/products?category=landscaping&type=tableSandBenches',
                  },
                  {
                    title: t('vasesAndLamps'),
                    link: '/products?category=landscaping&type=vasesAndLamps',
                  },
                  {
                    title: t('cubesAndSpheres'),
                    link: '/products?category=landscaping&type=cubesAndSpheres',
                  },
                ]}
              />
              <Dropdown
                title={t('relatedProducts')}
                links={[
                  {
                    title: t('glassPhotos'),
                    link: '/products?category=relatedProducts&type=glassPhotos',
                  },
                  {
                    title: t('plaques'),
                    link: '/products?category=relatedProducts&type=plaques',
                  },
                  {
                    title: t('embeddedParts'),
                    link: '/products?category=relatedProducts&type=embeddedParts',
                  },
                ]}
              />

              <Link
                to={'/buildingMaterials'}
                className=" text-center px-2 py-2 cursor-pointer rounded-sm font-manrope hover:bg-gray-100 flex items-center justify-center"
              >
                {t('buildingMaterials')}
              </Link>
              {/* <Link
                to={'/services'}
                className="px-2 py-2 text-center  cursor-pointer rounded-sm font-manrope hover:bg-gray-100 flex items-center justify-center"
              >
                {t('extraServices')}
              </Link> */}
              <Link
                to={'/gallery'}
                className="px-2 py-2 text-center  cursor-pointer rounded-sm font-manrope hover:bg-gray-100 flex items-center justify-center"
              >
                {t('photogallery')}
              </Link>
              <Link
                to={'/about'}
                className="px-2 py-2 text-center  cursor-pointer rounded-sm font-manrope hover:bg-gray-100 flex items-center justify-center"
              >
                {t('about')}
              </Link>
            </div>

            <div className="hidden lg:flex justify-center items-center gap-8">
              <div className="ml-2 flex">
                <Link
                  to={'/products?category=&type=&page=1'}
                  className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <Svg id={'icon-search'} size={24} fill={'gray'} />
                  <span className="text-sm font-manrope">{t('search')}</span>
                </Link>

                {currentLanguage && (
                  <div className="flex justify-center items-center">
                    <div className="lg:flex justify-center text-black flex cursor-pointer items-center gap-x-1 rounded-md  px-1 hover:bg-gray-100">
                      <button
                        onClick={() => changeLanguage('ua')}
                        className={`${
                          currentLanguage.includes('ua')
                            ? 'font-semibold'
                            : 'opacity-75'
                        }`}
                      >
                        ua
                      </button>
                    </div>
                    <div className=" text-gray-500">|</div>
                    <div className="lg:flex justify-center text-black flex cursor-pointer items-center gap-x-1 rounded-md  px-1 hover:bg-gray-100">
                      <button
                        onClick={() => changeLanguage('ru')}
                        className={`${
                          currentLanguage.includes('ru')
                            ? 'font-semibold'
                            : 'opacity-75'
                        }`}
                      >
                        ru
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="flex gap-x-1 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a target='_blank'    href="https://maps.app.goo.gl/KbqypbL3wgrXxwdj7?g_st=com.google.maps.preview.copy" className="hover:bg-gray-100 text-xs font-manrope">{t('locate')}</a>
                </div>
                <div className="flex gap-x-2 py-1">
                  <Svg id={'icon-phone'} size={14} fill={'gray'} />
                  <a href="tel:+380671356226"  className="cursor-pointer rounded-sm text-xs font-manrope hover:bg-gray-100">
                    +380671356226
                  </a>
                  <a href="tel:+380990508676"  className="cursor-pointer rounded-sm text-xs font-manrope hover:bg-gray-100">
                    +380990508676
                  </a>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="-m-2.5  inline-flex lg:hidden items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsModalOpen(true)}
            >
              <Svg id={'icon-mobile-menu-open'} size={22} fill={'gray'} />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isModalOpen} onCloseModal={onToglegModal} />
    </div>
  );
};

export default Header;
