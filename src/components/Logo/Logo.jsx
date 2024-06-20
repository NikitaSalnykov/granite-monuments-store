import { Link } from "react-router-dom"
import Svg from "../Svg/Svg"

export const Logo = ({size, textSize}) => {

  return (
            <Link to="/" className="-m-1.5 p-1.5 flex justify-center items-center gap-2">
              <Svg id={'icon-logo'} size={size} fill={'white'}></Svg>
              <div className="flex flex-col  leading-none ">
              <p className={`font-extrabold text-[white] text-[${textSize}px] uppercase`}>Баня</p>
              <p className={`text-[white] text-center font-extrabold text-[${textSize}px] uppercase `}>на озері</p>
              </div>
            </Link>
  )
}
