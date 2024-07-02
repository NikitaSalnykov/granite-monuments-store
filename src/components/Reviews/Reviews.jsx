import { Section } from '../Section/Section';
import Svg from '../Svg/Svg';
import { Title } from '../Title/Title';

export const Reviews = () => {
  return (
    <Section>
      <Title title={'Відгуки клієнтів'} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-12 px-2 lg:px-12 items-start">
        <div className="flex space-x-8">
          <div className="flex gap-8 p-6 border-[#243642] rounded-md bg-[#ffffffbe] shadow-md items-center">
            <div className="flex flex-col items-start w-1/2">
              <div className="flex gap-4 items-center">
              <Svg id={"icon-chat"} size={24} fill={'#243642'} />
              <div className="flex flex-col">
              <p className="text-lg md:text-xl font-bold text-black">
  Василь
</p>
<p className="text-gray-700 text-sm md:text-md font-semibold">
                <span className="text-gray-700">21-01-2024</span>
              </p>
              </div>
              </div>
            </div>
              <div className="flex gap-4">
              <div className="text-lg md:text-xl  text-gray-700">
            <p className='text-black font-bold mb-2'>Заказывал памятник, остался доволен</p>
          <p className="text-gray-600  md:text-lg">
              Очень быстро и качественно все установили, выражаю благодарность
              за профессионольный подход Сергея и его команду
            </p>
          </div>
              </div>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="flex gap-8 p-6 border-[#243642] rounded-md bg-[#ffffffbe] shadow-md items-center">
            <div className="flex flex-col items-start w-1/2">
              <div className="flex gap-4 items-center">
              <Svg id={"icon-chat"} size={24} fill={'#243642'} />
              <div className="flex flex-col">
              <p className="text-lg md:text-xl font-bold text-black">
  Василь
</p>
<p className="text-gray-700 text-sm md:text-md font-semibold">
                <span className="text-gray-700">21-01-2024</span>
              </p>
              </div>
              </div>
            </div>
              <div className="flex gap-4">
              <div className="text-lg md:text-xl  text-gray-700">
            <p className='text-black font-bold mb-2'>Заказывал памятник, остался доволен</p>
          <p className="text-gray-600  md:text-lg">
              Очень быстро и качественно все установили, выражаю благодарность
              за профессионольный подход Сергея и его команду
            </p>
          </div>
              </div>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="flex gap-8 p-6 border-[#243642] rounded-md bg-[#ffffffbe] shadow-md items-center">
            <div className="flex flex-col items-start w-1/2">
              <div className="flex gap-4 items-center">
              <Svg id={"icon-chat"} size={24} fill={'#243642'} />
              <div className="flex flex-col">
              <p className="text-lg md:text-xl font-bold text-black">
  Василь
</p>
<p className="text-gray-700 text-sm md:text-md font-semibold">
                <span className="text-gray-700">21-01-2024</span>
              </p>
              </div>
              </div>
            </div>
              <div className="flex gap-4">
              <div className="text-lg md:text-xl  text-gray-700">
            <p className='text-black font-bold mb-2'>Заказывал памятник, остался доволен</p>
          <p className="text-gray-600  md:text-lg">
              Очень быстро и качественно все установили, выражаю благодарность
              за профессионольный подход Сергея и его команду
            </p>
          </div>
              </div>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="flex gap-8 p-6 border-[#243642] rounded-md bg-[#ffffffbe] shadow-md items-center">
            <div className="flex flex-col items-start w-1/2">
              <div className="flex gap-4 items-center">
              <Svg id={"icon-chat"} size={24} fill={'#243642'} />
              <div className="flex flex-col">
              <p className="text-lg md:text-xl font-bold text-black">
  Василь
</p>
<p className="text-gray-700 text-sm md:text-md font-semibold">
                <span className="text-gray-700">21-01-2024</span>
              </p>
              </div>
              </div>
            </div>
              <div className="flex gap-4">
              <div className="text-lg md:text-xl  text-gray-700">
            <p className='text-black font-bold mb-2'>Заказывал памятник, остался доволен</p>
          <p className="text-gray-600  md:text-lg">
              Очень быстро и качественно все установили, выражаю благодарность
              за профессионольный подход Сергея и его команду
            </p>
          </div>
              </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
