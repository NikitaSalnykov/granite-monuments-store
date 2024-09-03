import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.jpg';
import { cutText } from '../../helpers/cutText';
import { useTranslation } from 'react-i18next';
import { resultPrice } from '../../helpers/resultPrice';
import { replaceNewLines } from '../../helpers/replaceNewLines';

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

  

  const descriptionText =
    currentLanguage === 'ua'
      ? replaceNewLines(description.ua)
      : replaceNewLines(description.ru);

  return (
    <div
      className={`relative border-solid border-[1px] p-3 border-grey-900 shadow-lg bg-[#ffffffa8] hover:bg-[#ffffffcb] hover:scale-[101%] hover:shadow-xl transition`}
    >
      <Link to={`/products/${category}/${type}/${id}`}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div
              className={`max-h-[350px] min-h-[150px] md:max-h-[400px] md:min-h-[200px] w-[100%] rounded-lg bg-slate-300 text-center overflow-hidden ${
                !availability && 'opacity-40 grayscale-[100%]'
              }`}
            >
              <img
                className="w-full  cursor-pointer  object-scale-down max-h-[450px] object-top	"
                src={image || placeholder}
                alt={name}
              />
            </div>
            {discount > 0 && (
              <div className="absolute top-0 left-0">
                <p className="text-lg md:text-md px-1 bg-red text-white font-viola leading-5 tracking-wider rounded-ee-xl py-2">
                  -{discount}%
                </p>
              </div>
            )}

            <div className="flex flex-col py-2 max-h-[210px] md:max-h-[170px]">
              <h4 className="text-xl font-semibold text-gray-800 hover:underline">
                {currentLanguage === 'ua'
                  ? cutText(name.ua, 30)
                  : cutText(name.ru, 30)}
              </h4>
              <span
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: cutText(descriptionText, 85),
                }}
              ></span>
            </div>

            <div className="text-sm flex gap-4 flex-wrap">
              <div>
                <p>
                  {t('category')}:{' '}
                  <span className="border-solid border-[1px] border-grey-600 p-1 font-semibold">
                    {t(category)}
                  </span>
                </p>
              </div>
              <div className="">
                <p>
                  {t('type')}:{' '}
                  <span className="border-solid border-[1px] border-grey-600 p-1 font-semibold">
                    {t(type)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-between mt-2 md:mt-4">
            <div className="flex gap-2 items-center">
              {discount && discount > 1 ? (
                <div className="flex gap-[2px] flex-col leading-none justify-center items-center">
                  <div className="flex flex-row gap-1 text-sm leading-none justify-center items-center">
                    <p className="line-through text-[12px] md:text-[14px]">
                      {price}₴
                    </p>
                    <p className="text-red text-[12px] md:text-[14px]">
                      -{discount}%
                    </p>
                  </div>
                  <p className="text-md lg:text-xl text-red font-semibold leading-none">
                    {resultPrice(price, discount)} грн
                  </p>
                </div>
              ) : (
                <p className="leading-none">{price} грн</p>
              )}
            </div>
            <div className="py-1 px-2 smOnly:text-xs text-sm md:px-3 border-[1px] border-grey h-[40px] flex justify-center items-center">
              {t('more')}
            </div>
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
