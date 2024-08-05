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
    }, 300);
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
            className={`lg:hidden transition-all duration-300 font-viola ${
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

                <div className="flex h-full flex-col justify-between overflow-y-auto scrollbar-thin  scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                  <div className="flex flex-col gap-6 text-white text-xl py-[30px] ">
                    <Accordion title={t('monuments')}>
                      <div className="flex flex-col gap-4 items-center text-gray-200 font-manrope">
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={'/products?category=monuments&type=vertical'}
                            onClick={() => closeMenu()}
                          >
                            {t('vertical')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={'/products?category=monuments&type=horizontal'}
                            onClick={() => closeMenu()}
                          >
                            {t('horizontal')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={'/products?category=monuments&type=small'}
                            onClick={() => closeMenu()}
                          >
                            {t('small')}
                          </Link>
                        </div>
                      </div>
                    </Accordion>
                    <Accordion title={t('landscaping')}>
                      <div className="flex flex-col gap-2 items-center text-gray-300 font-manrope">
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={
                              '/products?category=landscaping&type=antiSettlementSlabs'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('antiSettlementSlabs')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={
                              '/products?category=landscaping&type=pavingTiles'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('pavingTiles')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={
                              '/products?category=landscaping&type=graniteTiles'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('graniteTiles')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={'/products?category=landscaping&type=fencing'}
                            onClick={() => closeMenu()}
                          >
                            {t('fencing')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={
                              '/products?category=landscaping&type=tableSandBenches'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('tablesAndBenches')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={
                              '/products?category=landscaping&type=vasesAndLamps'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('vasesAndLamps')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={
                              '/products?category=landscaping&type=cubesAndSpheres'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('cubesAndSpheres')}
                          </Link>
                        </div>
                      </div>
                    </Accordion>
                    <Accordion title={t('relatedProducts')}>
                      <div className="flex flex-col gap-4 items-center text-gray-200 font-manrope">
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg ">
                          <Link
                            to={
                              '/products?category=relatedProducts&type=glassPhotos'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('glassPhotos')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm  text-lg">
                          <Link
                            to={
                              '/products?category=relatedProducts&type=plaques'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('plaques')}
                          </Link>
                        </div>
                        <div className="px-1 py-1 cursor-pointer rounded-sm text-lg">
                          <Link
                            to={
                              '/products?category=relatedProducts&type=embeddedParts'
                            }
                            onClick={() => closeMenu()}
                          >
                            {t('embeddedParts')}
                          </Link>
                        </div>
                      </div>
                    </Accordion>
                    <div className="px-4  py-2 cursor-pointer rounded-sm font-semibold flex items-center justify-center tracking-widest ">
                      <Link
                        to={
                          '/buildingmaterials?category=buildingmaterials&page=1'
                        }
                        onClick={() => closeMenu()}
                      >
                        {t('buildingMaterials')}
                      </Link>
                    </div>
                    <div className=" px-4 py-2 cursor-pointer rounded-sm font-semibold flex items-center justify-center tracking-widest ">
                      <Link to={'/services'} onClick={() => closeMenu()}>
                        {t('extraServices')}
                      </Link>
                    </div>
                    <div className="px-4 py-2 cursor-pointer rounded-sm font-semibold flex items-center justify-center tracking-widest ">
                      <Link to={'/about'} onClick={() => closeMenu()}>
                        {t('contacts')}
                      </Link>
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
                                currentLanguage.includes('ua')
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
                                currentLanguage.includes('ru')
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
