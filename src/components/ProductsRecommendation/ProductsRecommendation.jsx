import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/products/productsOperation';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { SwiperCards } from '../Swiper/SwiperCards';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const ProductsRecommendation = ({
  category = false,
  type = false,
  discount = false,
  newItems = false,
  id = false,
}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  let title;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterProducts = (products) => {
    if (!products || products.length < 0) return products;

    let filtered = [...products];

    // Exclude products with availability set to false and the specified id
    filtered = filtered.filter(
      (el) => el.availability === true && el._id !== id
    );

    console.log(filtered);
    if (category && typeof category === 'string' && !type) {
      filtered = filtered.filter((el) => el.category.includes(category));
      title = `${t('recomandation')} ${t(category)}`;
    }

    if (type && typeof type === 'string' && !category) {
      filtered = filtered.filter((el) => el.type.includes(type));
      title = `${t('recomandation')} ${t(type)}`;
    }

    if (discount && typeof discount === 'boolean') {
      filtered = filtered.filter((el) => el.discount > 0);
      title = `${t('recomandation')} ${t('sale')}`;
    }

    // if (newItems && typeof newItems === 'boolean') {
    //   const productsWithTimestamps = filtered.map((el) => ({
    //     timestamp: new Date(el.createdAt).getTime(),
    //     product: el,
    //   }));

    //   const sortedProducts = productsWithTimestamps.sort(
    //     (a, b) => b.timestamp - a.timestamp
    //   );
    //   filtered = sortedProducts.map((item) => item.product);
    //   title = `${t('recomandation')} ${t('new')}`;
    // }

    filtered = filtered.filter(
      (product, index, self) =>
        index === self.findIndex((t) => t._id === product._id)
    );

    if (
      category &&
      typeof category === 'string' &&
      type &&
      typeof type === 'string'
    ) {
      const randomNumber = Math.random() * (100 - 1) + 1;

      if (randomNumber <= 50) {
        filtered = filtered.filter((el) => el.category.includes(category));
        title = `${t('recomandation')} ${t(category)}`;
      } else {
        filtered = filtered.filter((el) => el.type.includes(type));
        title = `${t('recomandation')} ${t(category)} / ${t(type)}`;
      }
    }

    // Check if the filtered products are less than one
    if (filtered.length < 1 && newItems && typeof newItems === 'boolean') {
      const productsWithTimestamps = products.map((el) => ({
        timestamp: new Date(el.createdAt).getTime(),
        product: el,
      }));

      const sortedProducts = productsWithTimestamps.sort(
        (a, b) => b.timestamp - a.timestamp
      );

      filtered = sortedProducts.slice(0, 6).map((item) => item.product);
      title = `${t('recomandation')} ${t('new')}`;
    }

    return filtered;
  };

  return (
    <>
      {products &&
        filterProducts(products) &&
        filterProducts(products).length > 0 && (
          <div className="flex flex-col gap-4">
            {title && <h3 className="text-lg md:text-xl">{title}</h3>}
            {!isLoading ? (
              <div className="p-2">
                <SwiperCards products={filterProducts(products)} />
              </div>
            ) : (
              <div className="grid grid-cols-1">
                <div className="w-full rounded-lg h-[250px] md:h-[350px] lg:h-[450px] bg-slate-200 animate-pulse md:mx-4 lg:mx-8"></div>
              </div>
            )}
          </div>
        )}
    </>
  );
};
