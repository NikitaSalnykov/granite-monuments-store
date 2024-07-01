export const Title = ({ title, accent }) => {
  return (
    <h3 className="text-center text-3xl md:text-4xl lg:text-4xl capitalize tracking-widest text-gray-800 font-semibold mb-6 md:mb-12 lg:mb-16 ">
      {title} <span className="text-black">{accent}</span>
    </h3>
  );
};
