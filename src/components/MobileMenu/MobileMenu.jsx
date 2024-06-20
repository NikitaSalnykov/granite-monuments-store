import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Svg from '../Svg/Svg';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const modalRoot = document.querySelector('#menu-root');

export const MobileMenu = ({ isOpen, onCloseModal }) => {
  const modalRef = useRef(null);
  const [isOpenAnimation, setIsOpenAnimation] = useState(isOpen);

  useEffect(() => {
    setIsOpenAnimation(isOpen);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpenAnimation(false)
    setTimeout(() => {
      onCloseModal()
    }, 100);
  }

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
          <div className={`lg:hidden transition-all duration-300 ${isOpenAnimation ? "opacity-100" : "opacity-0"} modal-overlay flex items-center justify-center fixed bg-black bg-opacity-100 top-0 left-0 w-full h-full z-50`}>
            <div
              className="w-full h-full"
              ref={modalRef}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between py-4 px-4 md:px-12 w-full">
                  <Logo size={42} textSize={20} />
                  <Svg
                    className={`transition-all duration-500 ${isOpenAnimation ? "rotate-90" : "rotate-0"}   w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-500 ml-auto mb-2 cursor-pointer`}
                    classNameSvg="opacity-50 hover:opacity-100 hover:scale-105 transition-transform transform-all hover:rotate-90"
                    id={'icon-cross'}
                    size={'24px'}
                    stroke={'black'}
                    onClick={closeMenu}
                  />
                </div>

                <div className="flex h-full flex-col justify-between">
                <div className="text-white flex flex-col gap-4 justify-center items-center w-full mt-[10vh]">
                  <NavLink to="/home" onClick={() => closeMenu()} className="text-white rounded hover:opacity-80 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Головна</NavLink>
                  <NavLink to="/about" onClick={() => closeMenu()} className="text-white rounded hover:opacity-80 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Про нас</NavLink>
                  <NavLink to="/territory" onClick={() => closeMenu()} className="text-white rounded hover:opacity-80 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Територія</NavLink>
                  <NavLink to="/price" onClick={() => closeMenu()} className="text-white rounded hover:opacity-80 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Ціни</NavLink>
                </div>
                            
                <div className='text-white bottom-0 py-4 px-4 md:px-12 text-3xl font-semibold'>
                <div
                class="flex flex-col items-center  text-center text-surface bg-black border-t-[1px] border-neutral-600 border-t-solid">
                <div class="container pt-9">
                  <div class="mb-6 flex justify-center space-x-2 items-center flex-wrap">
                    <a
                      href="#!"
                      type="button"
                      class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:fill-black hover:bg-neutral-500 focus:outline-none focus:ring-0 "
                      data-twe-ripple-init>
                      <span class="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 320 512">
                          <path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                      </span>
                    </a>

                    <a
                      href="#!"
                      type="button"
                      class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-500 focus:outline-none focus:ring-0 "
                      data-twe-ripple-init>
                      <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 512 512">
                          <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </span>
                    </a>

                    <a
                      href="#!"
                      type="button"
                      class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-500 focus:outline-none focus:ring-0 "
                      data-twe-ripple-init>
                      <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 488 512">
                          <path
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                      </span>
                    </a>

                    <a
                      href="#!"
                      type="button"
                      class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-500 focus:outline-none focus:ring-0 "
                      data-twe-ripple-init>
                      <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 448 512">
                          <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                    </a>
                    <div className=" text-white rounded hover:text-gray-100 hover:font-medium py-2 px-2 mx-2 text-xl flex justify-center items-center gap-1">
                <Svg
                        id={'icon-phone'}
                        size={'23'}
                        fill={'white'}
                      />
                  <p className='text-lg font-semibold'>+38056456466</p>
                </div>
                  </div>
                

                </div>
              </div>
                </div>
                </div>

              </div>
            </div>

          </div>,
          modalRoot
        )}
    </>
  );
};
