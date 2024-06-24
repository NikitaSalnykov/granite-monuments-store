import { Link } from 'react-router-dom';
import Svg from '../Svg/Svg';

export const Logo = ({ size, textSize, textColor }) => {
  return (
    <Link
      to="/"
      className="-m-1.5 p-1.5 flex justify-center items-center gap-2"
    >
      <Svg
        id={'icon-logo'}
        size={48}
        fill={'black'}
        stroke={'white'}
        strokeWidth={2}
      ></Svg>
      <div className="flex flex-col  leading-none ">
        <p className={` text-${textColor || 'black'} font-bold`}>
          Меморіал Сервіс
        </p>
        <p className={`text-${textColor || 'black'} text-xs`}>
          Пам'ятники з граніту
        </p>
      </div>
    </Link>
  );
};
