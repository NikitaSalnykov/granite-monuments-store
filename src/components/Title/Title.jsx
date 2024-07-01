export const Title = ({ title, accent }) => {
  return (
    <h3 className="text-center text-3xl md:text-4xl capitalize font-semibold mb-6 md:mb-12 ">
      {title} <span className="text-black">{accent}</span>
    </h3>
  );
};
