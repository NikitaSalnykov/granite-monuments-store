import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Svg from '../Svg/Svg';
import { Logo } from '../Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import { Background } from '../Background/Background';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../Dropdown/Dropdown';
import { Accordion } from '../Accordion/Accordion';

const modalRoot = document.querySelector('#menu-root');

export const MobileMenu = ({ isOpen, onCloseModal }) => {
  const modalRef = useRef(null);
  const [isOpenAnimation, setIsOpenAnimation] = useState(isOpen);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    setIsOpenAnimation(isOpen);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpenAnimation(false);
    setTimeout(() => {
      onCloseModal();
    }, 100);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className={`lg:hidden transition-all duration-300 ${
              isOpenAnimation ? 'opacity-100' : 'opacity-0'
            } modal-overlay flex items-center justify-center fixed bg-black bg-opacity-100 top-0 left-0 w-full h-full z-50`}
          >
            <div className="w-full h-full" ref={modalRef}>
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between py-4 px-4 md:px-12 w-full ">
                  <Logo size={42} textSize={20} textColor={'white'} />
                  <Svg
                    className={`transition-all duration-500 ${
                      isOpenAnimation ? 'rotate-90' : 'rotate-0'
                    }   w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-500 ml-auto mb-2 cursor-pointer`}
                    classNameSvg="opacity-50 hover:opacity-100 hover:scale-105 transition-transform transform-all hover:rotate-90"
                    id={'icon-cross'}
                    size={'24px'}
                    stroke={'black'}
                    onClick={closeMenu}
                  />
                </div>

                <div className="flex h-full flex-col justify-between overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                  <div className="flex flex-col gap-6 text-white text-xl py-[30px] ">
                    <Accordion  title={t('monuments')}>
                    <div className="flex flex-col gap-4 items-center ">
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/monuments/availability'} onClick={() => closeMenu()}>{t('availability')} </Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/monuments/vertical'} onClick={() => closeMenu()}>{t('vertical')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'monuments/horizontal'} onClick={() => closeMenu()}>{t('horizontal')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'monuments/small'} onClick={() => closeMenu()}>{t('small')}</Link>
                      </div>
                    </div>
                    </Accordion>
                    <Accordion  title={t('landscaping')}>
                    <div className="flex flex-col gap-2 items-center ">
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/landscaping/antisettlementslabs'} onClick={() => closeMenu()}>{t('anti_settlement_slabs')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/landscaping/pavingtiles'}  onClick={() => closeMenu()}>{t('paving_tiles')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/landscaping/granitetiles'}  onClick={() => closeMenu()}>{t('granite_tiles')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/landscaping/fencing'}  onClick={() => closeMenu()}>{t('fencing')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/landscaping/tablesandbenches'}  onClick={() => closeMenu()}>{t('tables_and_benches')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/landscaping/vasesandlamps'}  onClick={() => closeMenu()}>{t('vases_and_lamps')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/landscaping/cubesandspheres'}  onClick={() => closeMenu()}>{t('cubes_and_spheres')}</Link>
                      </div>
                    </div>
                    </Accordion>
                    <Accordion  title={t('related_products')}>
                    <div className="flex flex-col gap-4 items-center ">
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/relatedproducts/glassphotos'}  onClick={() => closeMenu()}>{t('glass_photos')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm  text-lg">
                      <Link to={'/relatedproducts/plaques'}  onClick={() => closeMenu()}>{t('plaques')}</Link>
                      </div>
                      <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                      <Link to={'/relatedproducts/embeddedparts'}  onClick={() => closeMenu()}>{t('embedded_parts')}</Link>
                      </div>
                    </div>
                    </Accordion>
                    <div className="px-4 py-2 cursor-pointer rounded-sm font-semibold flex items-center justify-center">
                    <Link to={'/buildingmaterials'}  onClick={() => closeMenu()}>{t('building_materials')}</Link>
                    </div>
                    <div className=" px-4 py-2 cursor-pointer rounded-sm font-semibold flex items-center justify-center">
                    <Link to={'/services'}  onClick={() => closeMenu()}>{t('extra_services')}</Link>
                    </div>
                    <div className="px-4 py-2 cursor-pointer rounded-sm font-semibold flex items-center justify-center">
                    <Link to={'/contacts'}  onClick={() => closeMenu()}>{t('contacts')}</Link>
                    </div>
                  </div>

                  <div className="w-full text-white bottom-0  text-3xl font-semibold">
                    <div className="w-full mx-auto flex flex-col items-center text-center  py-9 text-surface bg-black border-t-[1px] border-neutral-600 border-t-solid">
                      <div className="w-full px-4 md:px-12  flex justify-between items-center">
                        <div>
                          <div className="flex gap-x-2 py-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm font-medium">
                              Україна, м.Дніпро
                            </span>
                          </div>
                          <div className="flex gap-x-2 py-1">
                            <Svg id={'icon-phone'} size={18} fill={'gray'} />
                            <p className="cursor-pointer rounded-sm text-sm font-medium hover:bg-gray-100">
                              +38056345654
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center items-center text-sm">
                          <div className="lg:flex justify-center text-white flex cursor-pointer items-center gap-x-1 rounded-md  px-1 hover:bg-gray-800">
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
                          <div className="lg:flex justify-center text-white flex cursor-pointer items-center gap-x-1 rounded-md  px-1 hover:bg-gray-800">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Background />
          </div>,
          modalRoot
        )}
    </>
  );
};
