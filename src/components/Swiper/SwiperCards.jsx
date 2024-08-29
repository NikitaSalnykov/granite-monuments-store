// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { ProductCard } from '../ProductCard/ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperCards = ({ products }) => {
  const breakpoints = {
    1280: {
      slidesPerView: 5,
    },
    760: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  };

  console.log('dsad', products);

  return (
    <>
      {products && (
        <Swiper
          className="flex justify-center items-center w-full rounded-xl  pl-4"
          modules={[Autoplay, Scrollbar, Navigation]}
          loop={true}
          spaceBetween={20}
          breakpoints={breakpoints}
          autoplay={{
            delay: 100, // Указывает время между сменой слайдов в миллисекундах (в данном случае, 5 секунд)
            disableOnInteraction: true, // Отключает остановку автоплея при взаимодействии с пользователем
          }}
          speed={5000}
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="w-full min-h-[250px] pb-4"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="w-[400px]">
                <ProductCard
                  key={product._id}
                  id={product._id}
                  image={product.mainPhoto}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  discount={product.discount}
                  category={product.category}
                  type={product.type}
                  availability={product.availability}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
