export const Title = ({ title, accent, description }) => {
  return (
    <div className="mb-6 md:mb-8 lg:mb-12 flex flex-col justify-center items-center ">
      <h3 className="md:text-4xl lg:text-4xl text-2xl font-bold text-gray-800 tracking-widest uppercase text-center">
        {title} <span className="text-black">{accent}</span>
      </h3>
      {description && (
        <p className="text-center text-gray-600 text-sm mt-2 lg:     w-[800px]">{description}</p>
      )}
    </div>
  );
};
