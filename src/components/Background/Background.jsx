import bg from '../../assets/bg-monuments.png';

export const Background = () => {
  return (
    <div className="absolute w-[100%] h-full overflow-hidden opacity-30 -z-10 grayscale-[100%] ">
      <img
        src={bg}
        alt="gravestone-background"
        className="h-[60%] md:h-full absolute bottom-0 lg:right-[-100px] object-cover"
      />
    </div>
  );
};
