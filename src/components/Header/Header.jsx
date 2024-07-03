import { useState } from 'react';
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

  console.log(currentLanguage);

  return (
    <div>
      <div className="bg-[#ffffffeb] z-50 fixed mx-auto w-full ">
      <div className="w-full h-auto blur-lg absolute top-0 right-0"></div>
        <div className="border-b py-3 px-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-8">
              <div className="flex items-center">
                <Logo size={48} secondaryTextSize={'sm'}/>
              </div>
            </div>

            <div className="hidden lg:flex gap-x-4 text-sm">
              <Dropdown
                title={t('monuments')}
                links={[
                  { title: t('availability'), link: '/memorials/availability' },
                  { title: t('vertical'), link: '/memorials/vertical' },
                  { title: t('horizontal'), link: 'memorials/horizontal' },
                  { title: t('small'), link: 'memorials/small' },
                ]}
              />
              <Dropdown
                title={t('landscaping')}
                links={[
                  { title: t('anti_settlement_slabs'), link: '/landscaping/antisettlementslabs' },
                  { title: t('paving_tiles'), link: '/landscaping/pavingtiles' },
                  { title: t('granite_tiles'), link: '/landscaping/granitetiles' },
                  { title: t('fencing'), link: '/landscaping/fencing' },
                  { title: t('tables_and_benches'), link: '/landscaping/tablesandbenches' },
                  { title: t('vases_and_lamps'), link: '/landscaping/vasesandlamps' },
                  { title: t('cubes_and_spheres'), link: '/landscaping/cubesandspheres' },
                ]}
              />
              <Dropdown
                title={t('related_products')}
                links={[
                  { title: t('glass_photos'), link: '/relatedproducts/glassphotos' },
                  { title: t('plaques'), link: '/relatedproducts/plaques' },
                  { title: t('embedded_parts'), link: '/relatedproducts/embeddedparts' },
                ]}
              />

              <Link to={'/buildingmaterials'} className=" text-center px-2 py-2 cursor-pointer rounded-sm font-medium hover:bg-gray-100 flex items-center justify-center">
                {t('building_materials')}
              </Link>
              <Link to={'/services'} className="px-2 py-2 text-center  cursor-pointer rounded-sm font-medium hover:bg-gray-100 flex items-center justify-center">
              {t('extra_services')}
              </Link>
              <Link to={'/about'} className="px-2 py-2 text-center  cursor-pointer rounded-sm font-medium hover:bg-gray-100 flex items-center justify-center">
              {t('contacts')}
              </Link>
            </div>

            <div className="hidden lg:flex justify-center items-center gap-8">
              <div className="ml-2 flex">
                <Link to={'/favorite'} className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fill-rule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">{t('favorites')}</span>
                </Link>

                {/* <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Обране</span>
              </div> */}

                {/* <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    3
                  </span>
                </div>
                <span className="text-sm font-medium">Cart</span>
              </div> */}

                <div className="flex justify-center items-center">
                  <div className="lg:flex justify-center text-black flex cursor-pointer items-center gap-x-1 rounded-md  px-1 hover:bg-gray-100">
                    <button
                      onClick={() => changeLanguage('ua')}
                      className={`${
                        currentLanguage === 'ua'
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
                        currentLanguage === 'ru'
                          ? 'font-semibold'
                          : 'opacity-75'
                      }`}
                    >
                      ru
                    </button>
                  </div>
                </div>
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
                  <span className="text-xs font-medium">{t('locate')}</span>
                </div>
                <div className="flex gap-x-2 py-1">
                  <Svg id={'icon-phone'} size={14} fill={'gray'} />
                  <p className="cursor-pointer rounded-sm text-xs font-medium hover:bg-gray-100">
                    +38056345654
                  </p>
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
