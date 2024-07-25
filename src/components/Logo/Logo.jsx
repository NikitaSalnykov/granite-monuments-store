import { Link } from 'react-router-dom';
import Svg from '../Svg/Svg';
import { useTranslation } from 'react-i18next';

export const Logo = ({ size, textSize, textColor, secondaryTextSize }) => {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      className="-m-1.5 p-1.5 flex justify-center items-center"
    >
      <Svg
        id={'icon-logo1'}
        size={size}
        fill={textColor || 'black'}
        stroke={'white'}
        strokeWidth={2}
      ></Svg>
      <div className="flex flex-col  leading-none">
        <p
          className={` text-${textColor || 'black'} font-manrope uppercase text-${textSize}`}
        >
          {t('name')}
        </p>

        <div className={`w-full h-[1px] bg-${textColor || 'black'} opacity-80 mt-[2px]`}></div>
        
        <p
          className={`text-${
            textColor || 'black'
          }  font-manrope  opacity-70 text-${secondaryTextSize}`}
        >
          {t('secondaryName')}
        </p>
    
      </div>
    </Link>
  );
};
