import { useTranslation } from 'react-i18next';
import photo from '../../assets/bg-monuments.jpg';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center bg-hero overflow-hidden pb-4">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl ">
        <div className="w-full flex flex-col md:w-1/2 px-8 justify-center">
          <h2 className="text-3xl lg:text-5xl text-center  text-blue-900 leading-tight font-medium ">
            {t('hero_title')}
          </h2>
          <p className="mt-4 md:mt-4 lg:mt-8 text-md lg:text-xl text-center md:text-left text-gray-700 tracking-wider leading-relaxed">
            {t('hero_text')}
          </p>
          <div className="mt-4 md:mt-4 lg:mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to={'/monuments'}>
              <Button bg={false}>{t('catalog')}</Button>
            </Link>
            <Link to={'/about'}>
              <Button>{t('about')}</Button>
            </Link>
          </div>
        </div>
        <div className="shadow-lg w-full md:w-1/2 mdOnly:h-[500px] flex justify-center grayscale-[80%] rounded-lg  overflow-hidden ">
          <img className="w-full h-auto object-cover" src={photo} />
        </div>
      </div>
    </div>
  );
};
