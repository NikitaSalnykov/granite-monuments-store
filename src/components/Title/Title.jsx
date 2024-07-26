export const Title = ({ title, accent, description }) => {
  return (
    <div className="mb-6 md:mb-8 lg:mb-12 flex flex-col justify-center items-center font-viola ">
      <div className="flex gap-4 justify-center items-center">
      <div className="h-[2px] w-[40px] bg-black"></div>

      <h3 className="md:text-4xl lg:text-4xl text-2xl font-bold text-gray-800 tracking-widest uppercase text-center">
        {title} <span className="text-black">{accent}</span>
      </h3>
      <div className="h-[2px] w-[40px] bg-black"></div>
      </div>
      {description && (
        <p className="text-center text-gray-600 text-sm mt-2 lg:w-[800px] font-manrope">{description}</p>
      )}
    </div>
  );
};
