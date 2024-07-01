import { Link } from 'react-router-dom';
import Svg from '../Svg/Svg';
import { useTranslation } from 'react-i18next';

export const Logo = ({ size, textSize, textColor, secondaryTextSize }) => {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      className="-m-1.5 p-1.5 flex justify-center items-center gap-2"
    >
      <Svg
        id={'icon-logo'}
        size={size}
        fill={'black'}
        stroke={'white'}
        strokeWidth={2}
      ></Svg>
      <div className="flex flex-col  leading-none">
        <p className={` text-${textColor || 'black'} font-bold text-${textSize}`}>
          {t("name")}
        </p>
        <p className={`text-${textColor || 'black'}  opacity-70 text-${secondaryTextSize}`}>
        {t("secondary_name")}
        </p>
      </div>
    </Link>
  );
};
