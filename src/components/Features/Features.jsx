import Svg from '../Svg/Svg';
import { Title } from '../Title/Title';

export const Features = () => {
  return (
    <div className="">
      <Title title={'Ми гарантуємо'} description={'Всім нашим клієнтам'} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-12 px-2 lg:px-12 items-start">
        <div className="flex space-x-8">
          <div>
            <Svg id={'icon-quality'} fill={'black'} size={39}></Svg>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-700">
              Висока якість
            </h3>
            <p className="text-gray-600 my-2  text-md  lg:text-lg">
              Довговічність та стійкість матеріалів. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Perspiciatis, voluptatibus ab earum
              iusto velit, officiis quis eligendi nulla id facere soluta ipsa,
              saepe laudantium.
            </p>
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <Svg
              id={'icon-delivery'}
              stroke={'black'}
              fill={'black'}
              size={38}
            ></Svg>
          </div>
          <div id="pickup">
            <h3 className="text-lg md:text-xl font-bold text-gray-700">
              Перевезення/встановлення
            </h3>
            <p className="text-gray-600 my-2  text-md  lg:text-lg">
              Повний сервіс від початку до кінця. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus quasi id placeat? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi
              id placeat?
            </p>
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <Svg
              id={'icon-clock'}
              stroke={'black'}
              fill={'transparent'}
              size={38}
            ></Svg>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-700">
              Швидкість
            </h3>
            <p className="text-gray-600 my-2  text-md  lg:text-lg">
              Виготовлення протягом 14 днів. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veritatis, aspernatur ex similique,
              ad amet illum explicabo libero nisi quidem, architecto aliquam
              natus? Quis distinctio tempore corrupti, perspiciatis provident
              harum qui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
