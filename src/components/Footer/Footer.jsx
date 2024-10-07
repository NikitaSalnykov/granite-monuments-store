import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import Svg from '../Svg/Svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const pathname = location.pathname;
  const isAboutPage = pathname.includes('about');
  return (
    <footer className="w-fullbody-font bg-black border-t-[1px] border-neutral-600 border-t-solid font-manrope">
      <div className="container flex flex-col flex-wrap px-5 py-12 md:py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap md:gap-9">
        <div className="md:pl-20 flex-shrink-0 justify-center items-center w-[300px] mx-auto text-center md:mx-0 md:text-left ">
          <Link
            to="/"
            className="-m-1.5 p-1.5 flex justify-center md:justify-start items-center gap-2"
          >
            <Logo size={42} textColor={'white'} />
          </Link>

          <div className="mt-4">
            <div className="w-full flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-center">
              <Link className=" text-white cursor-pointer hover:opacity-80">
                <Svg id={'icon-viber'} fill={'white'} size={24} />
              </Link>
              <a   href="https://t.me/+380671356226"
  target="_blank"
                      rel="noreferrer" className="ml-3 text-white cursor-pointer hover:opacity-80">
                <Svg id={'icon-telegram'} fill={'white'} size={24} />
              </a>
              <a   href="viber://chat?number=+380671356226"
  target="_blank"
                      rel="noreferrer" className=" text-white cursor-pointer hover:opacity-80">
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
              {t('monuments')}
            </h2>
            <nav className="mb-10 list-none flex flex-col gap-3">
              <li>
                <Link
                  to="/products?category=monuments&type=vertical"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('vertical')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=monuments&type=horizontal"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('horizontal')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=monuments&type=small"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('small')}
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
              {t('landscaping')}
            </h2>
            <nav className="mb-10 list-none flex flex-col gap-3">
              <li>
                <Link
                  to="/products?category=landscaping&type=antiSettlementSlabs"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('antiSettlementSlabs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=landscaping&type=pavingTiles"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('pavingTiles')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=landscaping&type=graniteTiles"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('graniteTiles')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=landscaping&type=fencing"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('fencing')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=landscaping&type=tableSandBenches"
                  target="_blank"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('tablesAndBenches')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=landscaping&type=vasesAndLamps"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('vasesAndLamps')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=landscaping&type=cubesAndSpheres"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {t('cubesAndSpheres')}
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <div>
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
                {t('relatedProducts')}
              </h2>
              <nav className="mb-10 list-none flex flex-col gap-3">
                <li>
                  <Link
                    to="/products?category=relatedProducts&type=glassPhotos"
                    className="text-white cursor-pointer hover:text-gray-200"
                  >
                    {t('glassPhotos')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=relatedProducts&type=plaques"
                    className="text-white cursor-pointer hover:text-gray-200"
                  >
                    {t('plaques')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=relatedProducts&type=embeddedParts"
                    className="text-white cursor-pointer hover:text-gray-200"
                  >
                    {t('embeddedParts')}
                  </Link>
                </li>
              </nav>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
                {t('buildingMaterials')}
              </h2>
              <nav className="mb-10 list-none flex flex-col gap-3">
                <li>
                  <Link
                    to="/buildingMaterials"
                    className="text-white cursor-pointer hover:text-gray-200"
                  >
                    {t('all')}
                  </Link>
                </li>
              </nav>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
              {t('about')}
            </h2>
            <nav className="mb-10 list-none flex flex-col gap-3">
              <ul>
              <li>
                <a
                  href="mailto:test@gmail.com"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  salnikov.nkt@gmail.com
                </a>
              </li>
              <li>
                <a       target='_blank'             href="https://maps.app.goo.gl/KbqypbL3wgrXxwdj7?g_st=com.google.maps.preview.copy"
 className="text-white cursor-pointer hover:text-gray-200">
                  {t('locate')}
                </a>
              </li>
              <li>
                <a
                  href="tel:+380671356226"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  +380671356226
                </a>
              </li>
              <li>
                <a
                  href="tel:+380990508676"
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  +380990508676
                </a>
              </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {isAboutPage ? (
        <div className="w-full bg-black/5 p-4 text-center text-white">
          <Link to={'/admin'} className="hover:underline">
            © 2024 Memorial Service
          </Link>
        </div>
      ) : (
        <div className="w-full bg-black/5 p-4 text-center text-white">
          © 2024 Memorial Service

        </div>
        
      )}
    </footer>
  );
};

export default Footer;
