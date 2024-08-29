import { useEffect, useState } from 'react';
import { Section } from '../Section/Section';
import Svg from '../Svg/Svg';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadingReview,
  getReviews,
} from '../../Redux/reviews/reviewsSelectors';
import { fetchReviews } from '../../Redux/reviews/reviewsOperation';
import { formattedDate } from '../../helpers/formattedDate';

const reviewsArr = [
  {
    name: 'Василь',
    date: '21-01-2024',
    title: 'Заказывал памятник, остался доволен',
    text: 'Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду',
  },
  {
    name: 'Василь',
    date: '21-01-2024',
    title: 'Заказывал памятник, остался доволен',
    text: 'Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду',
  },
  {
    name: 'Василь',
    date: '21-01-2024',
    title: 'Заказывал памятник, остался доволен',
    text: 'Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду',
  },
  {
    name: 'Василь',
    date: '21-01-2024',
    title: 'Заказывал памятник, остался доволен',
    text: 'Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду',
  },
  {
    name: 'Василь',
    date: '21-01-2024',
    title: 'Заказывал памятник, остался доволен',
    text: 'Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду',
  },
  {
    name: 'Василь',
    date: '21-01-2024',
    title: 'Заказывал памятник, остался доволен',
    text: 'Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду',
  },
];

export const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);
  const [visibleCount, setVisibleCount] = useState(4);
  const { t } = useTranslation();
  const isLoading = useSelector(getIsLoadingReview);


  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const handleHide = () => {
    setVisibleCount(4);
  };

  return (
    <>
      <div>
        <Title title={t('reviews')} description={t('reviews_description')} />
        {!isLoading ? (
          <div>
            {reviews && reviews.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-12 lg:px-12 items-start">
                {reviews.slice(0, visibleCount).map((el, index) => (
                  <div key={index} className="flex space-x-8">
                    <div className="flex gap-8 p-6 border-[#243642] rounded-md bg-[#f4f8fb] shadow-md items-center">
                      <div className="flex flex-col items-start w-1/2">
                        <div className="flex gap-2 md:gap-4 items-center">
                          <Svg id={'icon-chat'} size={24} fill={'#243642'} />
                          <div className="flex flex-col">
                            <p className="text-md md:text-lg lg:text-lg font-bold text-black">
                              {el.author}
                            </p>
                            <p className="text-gray-700 text-xs md:text-md font-semibold">
                              <span className="text-gray-700">
                                {formattedDate(el.createdAt)}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-lg md:text-xl  text-gray-700 max-h-[150px]  overflow-y-scroll pr-[2px]">
                          <div className="my-auto">
                            <p className="text-black text-sm md:text-md smOnly:leading-5  font-bold mb-2 ">
                              {el.title}
                            </p>
                            <p className="text-gray-600 text-sm lg:text-lg">
                              {el.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <div className="w-full flex justify-center items-center mt-8 font-manrope text-gray-700">
                {t('not_found')}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-12 lg:px-12 items-start">
            <div className="bg-slate-200 h-[150px] w-full rounded-md animate-pulse"></div>
            <div className="bg-slate-200 h-[150px] w-full rounded-md animate-pulse"></div>
            <div className="bg-slate-200 h-[150px] w-full rounded-md animate-pulse"></div>
            <div className="bg-slate-200 h-[150px] w-full rounded-md animate-pulse"></div>
          </div>
        )}
        <div className="flex justify-center mt-6 lg:mt-8 gap-4">
          {reviews &&
            reviews.length > visibleCount && (
              <div onClick={handleLoadMore}>
                <Button bg={false}>{t('see_more')}</Button>
              </div>
            )}
          {visibleCount > 4 && (
            <div onClick={handleHide}>
              <Button bg={false}>{t('hide')}</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
