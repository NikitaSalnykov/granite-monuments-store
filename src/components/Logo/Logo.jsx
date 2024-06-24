import { Link } from "react-router-dom"
import Svg from "../Svg/Svg"

export const Logo = ({size, textSize}) => {

  return (
            <Link to="/" className="-m-1.5 p-1.5 flex justify-center items-center gap-2">
              <Svg id={'icon-logo'} size={48} fill={'black'} stroke={'white'} strokeWidth={2} ></Svg>
              <div className="flex flex-col  leading-none ">
              <p class=" text-[#252C32] font-bold">Меморіал Сервіс</p>
              <p class=" text-[#252C32] text-xs">Пам'ятники з граніту</p>
              </div>
            </Link>
  )
}
