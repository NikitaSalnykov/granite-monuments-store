import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.jpg';
import { cutText } from '../../helpers/cutText';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/auth/auth-selectors';

export const ProductCard = ({
  id,
  category,
  type,
  image,
  name,
  description,
  price,
  discount,
  availability,
}) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={`relative`}>
      <Link to={`/products/${category}/${type}/${id}`}>
        <div
          className={`h-[200px] md:h-[300px] rounded-lg bg-slate-300 text-center overflow-hidden ${
            !availability && 'opacity-40 grayscale-[100%]'
          }`}
        >
          <img className="object-cover w-full h-full" src={image} alt={name} />
        </div>
        {discount > 0 && (
          <div className="absolute top-0 left-0 ">
            <p className="text-xs md:text-md p-1 bg-red text-white">
              {discount}%
            </p>
          </div>
        )}

        <div className="flex flex-col py-2 max-h-[210px] md:max-h-[170px]">
          <h4 className="text-xl font-semibold text-gray-800 hover:underline">
            {currentLanguage === 'ua' ? name.ua : name.ru}
          </h4>
          <span className="text-sm text-gray-500">
            {currentLanguage === 'ua'
              ? cutText(description.ua, 150)
              : cutText(description.ru, 150)}
          </span>
        </div>
        <div className="flex gap-2 items-center justify-between mt-2 md:mt-4">
          <div className="flex gap-2 items-center">
            <p className="md:text-xl font-bold">{price}</p>
          </div>
          <div className="py-1 px-2 smOnly:text-xs md:px-3 border-[1px] border-grey">
            {t('more')}
          </div>
        </div>
      </Link>
      {!availability && (
        <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p className="text-xs md:text-md lg:text-md p-1 bg-grey text-white">
            {t('not_availability')}
          </p>
        </div>
      )}
    </div>
  );
};
