import { useState } from 'react';
import { Section } from '../Section/Section';
import Svg from '../Svg/Svg';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';

const reviewsArr = [{name:'Василь', date:'21-01-2024', title:"Заказывал памятник, остался доволен", text:"Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду"}, {name:'Василь', date:'21-01-2024', title:"Заказывал памятник, остался доволен", text:"Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду"}, {name:'Василь', date:'21-01-2024', title:"Заказывал памятник, остался доволен", text:"Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду"}, {name:'Василь', date:'21-01-2024', title:"Заказывал памятник, остался доволен", text:"Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду"}, {name:'Василь', date:'21-01-2024', title:"Заказывал памятник, остался доволен", text:"Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду"}, {name:'Василь', date:'21-01-2024', title:"Заказывал памятник, остался доволен", text:"Очень быстро и качественно все установили, выражаю благодарность за профессионольный подход Сергея и его команду"}]

export const Reviews = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const {t} = useTranslation()
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const handleHide = () => {
    setVisibleCount(4);
  };


  return (
    <Section>
      <Title title={t('reviews')} description={t('reviews_description')}/>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-12 lg:px-12 items-start">

        {reviewsArr.slice(0, visibleCount).map((el, index) => (
        <div key={index} className="flex space-x-8">
        <div className="flex gap-8 p-6 border-[#243642] rounded-md bg-[#ffffffbe] shadow-md items-center">
          <div className="flex flex-col items-start w-1/2">
            <div className="flex gap-2 md:gap-4 items-center">
            <Svg id={"icon-chat"} size={24} fill={'#243642'} />
            <div className="flex flex-col">
            <p className="text-md md:text-xl font-bold text-black">
{el.name}
</p>
<p className="text-gray-700 text-xs md:text-md font-semibold">
              <span className="text-gray-700">{el.date}</span>
            </p>
            </div>
            </div>
          </div>
            <div className="flex gap-4">
            <div className="text-lg md:text-xl  text-gray-700 h-[150px]  overflow-y-scroll pr-[5px]">
          <p className='text-black smOnly:leading-5  font-bold mb-2 '>{el.title}</p>
        <p className="text-gray-600 text-sm md:text-md  md:text-lg">
        {el.text}
          </p>
        </div>
            </div>
        </div>
      </div>
        ))}
      </ul>
      <div className="flex justify-center mt-6 lg:mt-8 gap-4">
              {visibleCount < reviewsArr.length && (
            <div onClick={handleLoadMore}>
              <Button bg={false} >
                {t('see_more')}
              </Button>
            </div>
          )}
{visibleCount > 4 && (
  <div onClick={handleHide}>
    <Button bg={false}>
      {t('hide')}
    </Button>
  </div>
          )}
              </div>
    </Section>
  );
};
