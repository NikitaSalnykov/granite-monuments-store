import React, { useState } from 'react';
import image from '../../images/example.webp';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../ImageSlider/ImageSlider';
import { Link } from 'react-router-dom';
import { ContactList } from '../../components/ContactsList/ContactList';
import { resultPrice } from '../../helpers/resultPrice';
import Svg from '../Svg/Svg';
import { replaceNewLines } from '../../helpers/replaceNewLines';

const ProductDetails = ({
  category,
  type,
  image,
  extraPhotos,
  name,
  description,
  price,
  discount,
  article,
}) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getAllImages = (image, extraPhotos) => {
    let imgArr = [];
    imgArr.push(image);
    if (extraPhotos && extraPhotos.length > 0) imgArr.push(...extraPhotos);
    console.log(extraPhotos);
    return imgArr;
  };

  const [isShippingVisible, setShippingVisible] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);

  const toggleSection = (setVisible) => {
    setVisible((prevState) => !prevState);
  };

  return (
    <div className="lg:flex items-start justify-between pb-12 font-manrope">
      <div className=" relative w-full flex justify-center h-[350px] md:h-[600px] lg:w-2/4 rounded-lg overflow-hidden bg-gray-300">
        <ImageSlider images={getAllImages(image, extraPhotos)} />
      </div>
      <div className="xl:w-2/5 lg:w-1/2 lg:ml-8 lg:mt-0 mt-6">
        <div className="border-b border-gray-400 pb-6">
          <div className="text-sm leading-none text-black flex gap-1">
            <div className=" cursor-pointer hover:opacity-70">
              <Link to={`/products?category=${category}`}>{t(category)} </Link>
            </div>
            <div>/</div>
            <div className=" cursor-pointer hover:opacity-70">
              <Link to={`/products?category=${category}&type=${type}`}>
                {t(type)}{' '}
              </Link>
            </div>
          </div>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800  mt-2">
            {currentLanguage === 'ua' ? name.ua : name.ru}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-400 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 "> {t('category')}</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-black ">{t(category)}</p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-400 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 "> {t('type')}</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-black"> {t(type)}</p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-400 flex items-center justify-between">
          <p className="text-base leading-4 font-bold text-gray-800 ">
            {t('price')}
          </p>
          {discount && discount > 1 ? (
            <div className="flex gap-2">
              <p className="text-3xl text-red">
                {resultPrice(price, discount)} грн
              </p>
              <div className="flex flex-col text-sm leading-none justify-start items-center">
                <p className="text-red">-{discount}%</p>
                <p className="line-through ">{price} грн</p>
              </div>
            </div>
          ) : (
            <p>{price} грн</p>
          )}
        </div>
        <a
          href="tel:+380672037580"
          className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 gap-2"
        >
          <Svg id={'icon-phone'} size={24} fill={'white'} />
          {t('consultation')}
        </a>
        <div className="flex flex-col gap-2 mt-7">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">{t('description')}:</p>
            <p
              className="lg:pr-48 text-base lg:leading-tight leading-normal text-black"
              dangerouslySetInnerHTML={{
                __html:
                  currentLanguage === 'ua'
                    ? replaceNewLines(description.ua)
                    : replaceNewLines(description.ru),
              }}
            />
          </div>
          {article && (
            <p className="text-base leading-4 mt-7 text-black ">
              <span className="font-semibold">{t('article')}:</span> {article}
            </p>
          )}
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-400">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(setShippingVisible)}
              >
                <p className="text-base leading-4 text-gray-800 font-semibold">
                  {t('how_to_buy')}
                </p>
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  aria-label="show or hide"
                >
                  <svg
                    className={`transform ${
                      isShippingVisible ? 'rotate-180' : ''
                    } text-gray-800 `}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L5 1L1 5"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {isShippingVisible && (
                <p className="pt-4 text-base leading-normal pr-12 text-black flex gap-1 ">
                  {t('how_to_buy_text')} {t('locate')}
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-400">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(setContactVisible)}
            >
              <p className="text-base leading-4 text-gray-800 font-semibold">
                {t('contact_us')}
              </p>
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                aria-label="show or hide"
              >
                <svg
                  className={`transform ${
                    isContactVisible ? 'rotate-180' : ''
                  } text-gray-800 `}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5L5 1L1 5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {isContactVisible && (
              <div className="pt-4 text-base leading-normal pr-12 text-black ">
                <div className="md:hidden">
                  <ContactList small column />
                </div>
                <div className="hidden md:block">
                  <ContactList small />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
