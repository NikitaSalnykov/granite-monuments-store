import { useState } from 'react';
import Svg from '../Svg/Svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MobileMenu } from '../MobileMenu/MobileMenu';

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
    <div className="mx-4 py-4 text-xl md:text-2xl uppercase">
      <div className='flex flex-row-reverse items-center justify-between  text-[#212121] rounded-full px-6 py-1'>
        <div className="flex gap-12">
          <div className="flex justify-center items-center space-x-2">
          <div className="text-white text-sm flex flex-col gap-2 justify-center items-center">
            <div class=" justify-center space-x-2 hidden lg:flex">
      <Link
        href="#!"
        type="button"
        class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-500 focus:outline-none focus:ring-0 "
        data-twe-ripple-init>
        <span class="mx-auto [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 488 512">
            <path
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </span>
      </Link>

      <Link
        href="#!"
        type="button"
        class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-500 focus:outline-none focus:ring-0 "
        data-twe-ripple-init>
        <span class="mx-auto [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
      </Link>
            </div>  
          </div>
          <div className="text-white text-sm hidden lg:flex  flex-col">
            <button  onClick={() => changeLanguage('en')} className={`${currentLanguage === 'en' ? 'font-semibold' : 'opacity-75'}`}>ENG</button>
            <button onClick={() => changeLanguage('ua')} className={`${currentLanguage === 'ua' ? 'font-semibold' : 'opacity-75'}`}>UKR</button>
          </div>
          </div>
        <div className="flex flex-raw items-center scale-80 md:scale-150 md:pr-8" >
        <div className="relative">
        <Svg size={38} fill={'white'} stroke={"#212121"} id="icon-photo2"/>
        <div className=' rounded-full bg-red absolute top-[20%] right-[33%] border-[3px] border-[#212121]'>
          <div className="w-[6px] h-[6px] rounded-full bg-white "></div>
        </div>
        </div>
        <div className="flex flex-col  leading-[16px] decoration-clone ml-1 text-[#ffffff]">
        <div className='text-sm font-medium  leading-[18px]'>Dmitriy</div>
        <div className='text-sm font-medium leading-[8px]'>Shelygov</div>
        <div className='text-[6px] font-extralight leading-[12px] text-white uppercase opacity-70'>cameraman</div>
        </div>
        </div>
        </div>
        <div className="text-[#ffffff] hidden lg:block">
          <nav>
            <ul className='flex gap-4'>
              <li>{t('home')}</li>
              <li>{t('about')}</li>
              <li>{t('contacts')}</li>
              <li>{t('all-works')}</li>
            </ul>
          </nav>
        </div>
        <div onClick={onToglegModal} className="block lg:hidden">
          <Svg size={38} fill={'white'} stroke={"#212121"} id="icon-mobile-menu-open"/>
        </div>
        <MobileMenu isOpen={isModalOpen}
        onCloseModal={onToglegModal}/>
      </div>
    </div>
  )
}

export default Header