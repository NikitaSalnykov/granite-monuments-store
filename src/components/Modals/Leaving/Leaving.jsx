import Svg from '../../Svg/Svg';
import { logout } from '../../../Redux/auth/auth-operations';

import { useDispatch } from 'react-redux';

const Leaving = ({ onCloseModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    onCloseModal();
  };

  return (
    <div className="md:max-w-2xl text-center py-12 smOnly:px-3 md:px-28 rounded-3xl ">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Выйти из аккаунта?
      </h3>
      <div className=" flex flex-row items-center mt-12 gap-4 justify-center">
        <button
          onClick={onCloseModal}
          className="Frame36 hover:blue-gradient hover:text-white h-10 px-5 py-2 rounded-3xl border-2 border-black justify-center items-center gap-2 inline-flex  text-black text-base font-bold font-['Manrope']tracking-wide hover:bg-black"
        >
          Нет{' '}
        </button>
        <button
          onClick={() => handleLogout()}
          className="Frame36 hover:blue-gradient hover:text-white h-10 px-5 py-2 rounded-3xl border-2 border-black justify-center items-center gap-2 inline-flex  text-black text-base font-bold font-['Manrope']tracking-wide hover:bg-black"
        >
          Да
        </button>
      </div>
    </div>
  );
};

export default Leaving;
