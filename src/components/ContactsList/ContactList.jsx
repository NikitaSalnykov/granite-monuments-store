import { useTranslation } from 'react-i18next';
import Svg from '../Svg/Svg';

export const ContactList = ({color="black", small=false}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex justify-center items-center gap-x-8 gap-y-4 flex-wrap text-${color}`}>
      <div className="flex gap-x-1 py-1 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${!small ? 'h-[24px] w-[24px]' : 'h-[18px] w-[18px]' }]`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span className={` font-medium ${!small ? "sm:text-md md:text-lg" : "sm:text-sm md:text-md"}`}>{t('locate')}</span>
      </div>
      <div className="flex gap-x-2 py-1 justify-center items-center">
        <Svg id={'icon-phone'} size={!small ? 24 : 18} fill={color} />
        <p className={`cursor-pointer rounded-sm ${!small ? "sm:text-md md:text-lg" : "sm:text-sm md:text-md"} font-medium hover:underline `}>
          +38056345654
        </p>
      </div>
      <div className="flex gap-x-2 py-1 justify-center items-center">
        <Svg id={'icon-telegram'} size={!small ? 24 : 18} fill={color} />
        <a
          href="https://google.com"
          className={`cursor-pointer rounded-sm ${!small ? "sm:text-md md:text-lg" : "sm:text-sm md:text-md"} font-medium hover:underline `}
        >
          {t('Telegram')}
        </a>
      </div>
      <div className="flex gap-x-2 py-1 justify-center items-center ">
        <Svg id={'icon-viber'} size={!small ? 24 : 18} fill={color} />
        <a
          href="https://google.com"
          className={`cursor-pointer rounded-sm ${!small ? "sm:text-md md:text-lg" : "sm:text-sm md:text-md"} font-medium hover:underline `}
        >
          {t('Viber')}
        </a>
      </div>
    </div>
  );
};
