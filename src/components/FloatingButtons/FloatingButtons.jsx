import { useState, useRef, useEffect } from 'react';
import Svg from '../Svg/Svg';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/auth/auth-selectors';

export const FloatingButtons = () => {
  const [onButtonClick, setOnButtonClick] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;
  const buttonRef = useRef(null);
  const user = useSelector(getUser);

  const handleButtonClick = () => {
    setOnButtonClick(true);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setOnButtonClick(false);
    }
  };

  useEffect(() => {
    if (onButtonClick) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onButtonClick]);

  return (
    <>
      {!pathname.includes('admin') && (
        <div className="relative">
          <button
            className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-0 rounded-lg
                  mr-[-30px] md:mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
            ref={buttonRef}
          >
            <div
              onClick={handleButtonClick}
              className={`p-4 rounded-xl md:rounded-full border-2 border-white bg-black transition-all shadow-sm  ${
                onButtonClick ? ' shadow-md bg-black px-8' : ''
              } flex justify-center items-center`}
            >
              {!onButtonClick ? (
                <>
                  <svg
                    className={`hidden md:block w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16  transition-all `}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div
                    className={`md:hidden rotate-180 w-[30px] h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16  transition-all `}
                  >
                    <Svg id={'icon-arrow'} stroke={'white'} size={42} />
                  </div>
                </>
              ) : (
                <div className="flex gap-6 justify-center items-center">
                  <p className="text-white font-semibold font-manrope text-xs w-16">
                    {t('always_online')}
                  </p>
                  <div className="flex gap-4 smOnly:mr-4">
                    <a
  href="https://t.me/+380671356226"
  target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      <Svg id={'icon-telegram'} size={42} fill={'white'} />
                    </a>
                    <a
  href="viber://chat?number=+380671356226"
  target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      <Svg id={'icon-viber'} size={42} fill={'white'} />
                    </a>
                    {user && user.role === 'admin' && (
                      <Link to={'/admin'}>
                        <Svg id={'icon-admin'} size={42} fill={'white'} />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </button>
        </div>
      )}
    </>
  );
};
