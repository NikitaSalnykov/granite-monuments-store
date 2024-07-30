import { Link } from 'react-router-dom';

export const AllCategoriesList = ({ categories, sm }) => {
  return (
    <>
      {categories && categories.length > 0 && (
        <ul
          className={`grid place-items-end ${
            sm ? 'grid-cols-2 ' : 'grid-cols-1'
          } lg:px-[60px] md:grid md:grid-cols-3 lg:grid-cols-3 gap-3`}
        >
          {categories.map((el, index) => (
            <li key={index}>
              <Link to={`${el.link}`}>
                <div className="relative w-full h-[110px] md:h-[300px] lg:h-[280px] grayscale-[0%] hover:shadow-xl bg-slate-200 over:bg-opacity-60 transition cursor-pointer  rounded-lg overflow-hidden">
                  <img
                    className="object-cover w-full h-auto mdOnly:h-full brightness-[50%] hover:brightness-[80%]"
                    src={el.img}
                    alt="Hanging Planters"
                  />
                  <p
                    className={`absolute text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-center ${
                      sm ? 'text-xs md:text-lg' : 'text-2xl'
                    }`}
                  >
                    {el.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
