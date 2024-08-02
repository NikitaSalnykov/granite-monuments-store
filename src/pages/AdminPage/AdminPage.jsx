import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container/Container';
import { AdminNavbar } from './AdminNavbar';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import {
  getIsLoadingReview,
  getReviews,
} from '../../Redux/reviews/reviewsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterCategory,
  getFilterType,
  getFilterName,
  getFilterNew,
  getFilterPrice,
  getFilterSale,
  setFilterName,
  setFilterCategory,
  setFilterType,
  setFilterPrice,
  setFilterSale,
  setFilterNew,
} from '../../Redux/filter/filterSlice';
import Loader from '../../components/Loader/Loader';
import {
  fetchProducts,
  updateAvailability,
} from '../../Redux/products/productsOperation';
import { formattedDate } from '../../helpers/formattedDate';
import DeleteProduct from '../../components/Modals/AdminModals/DeleteProduct';
import EditProduct from '../../components/Modals/AdminModals/EditProduct';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';
import {
  deleteReview,
  fetchReviews,
} from '../../Redux/reviews/reviewsOperation';
import { useTranslation } from 'react-i18next';
import { Title } from '../../components/Title/Title';
import { cutText } from '../../helpers/cutText';
import { useLocation } from 'react-router-dom';

const AdminPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalEditProductOpen, setModalEditProductOpen] = useState(false);
  const [isModalDeleteProductOpen, setModalDeleteProductOpen] = useState(false);
  const [isModalProductOpen, setModalProductOpen] = useState(false);
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const reviews = useSelector(getReviews);
  const { t } = useTranslation();
  const isLoadingProducts = useSelector(getIsLoadingProducts);
  const isLoadingReview = useSelector(getIsLoadingReview)
  const filterName = useSelector(getFilterName);
  const filterCategory = useSelector(getFilterCategory);
  const filterPrice = useSelector(getFilterPrice);
  const filterType = useSelector(getFilterType);
  const filterSale = useSelector(getFilterSale);
  const filterNew = useSelector(getFilterNew)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [
    dispatch,
    isModalProductOpen,
    isModalEditProductOpen,
    isModalProductOpen,
  ]);
  

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch, isModalReviewOpen]);

  const handleDeleteReview = (review) => {
    dispatch(deleteReview(review._id));
    dispatch(fetchReviews());
  };

  const onTogleProductModal = () => {
    setModalProductOpen(!isModalProductOpen);
  };

  const onTogleReviewModal = () => {
    setModalReviewOpen(!isModalReviewOpen);
  };

  const onTogleEditProductModal = (product) => {
    setSelectedProduct(product);
    setModalEditProductOpen(!isModalEditProductOpen);
  };

  const onTogleDeleteProductModal = (product) => {
    setSelectedProduct(product);
    setModalDeleteProductOpen(!isModalDeleteProductOpen);
  };

  const changeCategory = (category) => {
    setSelectedCategory(category);
    dispatch(setFilterName(''));
  };


  const filteredProducts = (products) => {
    if (!products || products.length <= 0) return products;
  
    const price = filterPrice.replace(/\D/g, '');
  
    return products
      .filter((el) => {
        let categoryMatch;

          const nameMatch =
          el.name.ru.toLowerCase().includes(filterName.toLowerCase()) ||
          t(el.category).toLowerCase().includes(filterName.toLowerCase()) ||
          t(el.type).toLowerCase().includes(t(filterName.toLowerCase())) ||
          el.name.ua.toLowerCase().includes(filterName.toLowerCase()) ||
          el.description.ua.toLowerCase().includes(filterName.toLowerCase()) ||
          el.description.ru.toLowerCase().includes(filterName.toLowerCase())

  
        if (filterCategory === t('monuments')) {
          const types = [
            t('availability'),
            t('vertical'),
            t('horizontal'),
            t('small'),
          ];
          categoryMatch = types.some((category) =>
            el.category.toLowerCase().includes(category.toLowerCase())
          );
        } else if (filterCategory === t('landscaping')) {
          const types = [
            t('antiSettlementSlabs'),
            t('pavingTiles'),
            t('graniteTiles'),
            t('fencing'),
            t('tablesAndBenches'),
            t('vasesAndLamps'),
            t('cubesAndSpheres'),
          ];
          categoryMatch = types.some((category) =>
            el.category.toLowerCase().includes(category.toLowerCase())
          );
        } else if (filterCategory === t('relatedProducts')) {
          const types = [t('glassPhotos'), t('plaques'), t('embeddedParts')];
          categoryMatch = types.some((category) =>
            el.category.toLowerCase().includes(category.toLowerCase())
          );
        } 
        else {
          categoryMatch =
            filterCategory === t('all_categories') ||
            el.category.toLowerCase().includes(filterCategory.toLowerCase());
        }
  
        const typeMatch =
          filterType === t('all_types') ||
          el.type.toLowerCase().includes(filterType.toLowerCase());
  
        return nameMatch && categoryMatch && typeMatch;
      })
      .sort((a, b) => {
        // Сортировка по скидке
        if (filterSale && a.discount > 0 && b.discount === 0) return -1;
        if (filterSale && a.discount === 0 && b.discount > 0) return 1;
  
        // Сортировка по цене
        if (filterPrice === 'min') {
          return a.price - b.price;
        } 
        if (filterPrice === 'max') {
          return b.price - a.price;
        }
  // Сортировка по доступности
  if (!a.availability && b.availability) return 1;
  if (a.availability && !b.availability) return -1;
        return 0; // Если фильтрация по цене не задана
      });
  };

  const newProducts = (products) => {
    if (!filterNew) {
      return filteredProducts(products);
    }
  
    const productsWithTimestamps = products.map((el) => ({
      timestamp: new Date(el.createdAt).getTime(),
      product: el,
    }));
  
    const sortedProducts = productsWithTimestamps.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    const sortedProductObjects = sortedProducts.map((item) => item.product);
    return filteredProducts(sortedProductObjects);
  };

  const filteredReviews = (reviews) => {
    if (!reviews) return reviews;
    return reviews
      .filter(
        (el) =>
          el &&
          (el.author.toLowerCase().includes(filterName.toLowerCase()) ||
            el.text.toLowerCase().includes(filterName.toLowerCase()))
      )
      .sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
  };

  return (
    <Container>
      <Title
        title={'Админ-панель'}
        description={'Добавляйте, редактируйте и удаляйте товары/отзывы'}
      />

      <div className="h-auto">
        <AdminNavbar
          changeCategory={changeCategory}
          selectedCategory={selectedCategory}
          isModalProductOpen={isModalProductOpen}
          onTogleProductModal={onTogleProductModal}
          isModalReviewOpen={isModalReviewOpen}
          onTogleReviewModal={onTogleReviewModal}
        />

        <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mx-[2px] md:mx-2 min-h-screen">
          {!isLoadingProducts && !isLoadingReview ? (
            <div className="bg-white rounded-lg p-2 shadow-md mb-20  md:p-4 min-h-screen">
              <table className="table-auto w-full text-xs md:text-md lg:text-md">
                <thead>
                  <tr>
                    <th className="px-1 md:px-2 py-2 text-left border-b-2 w-1/3">
                      <h2 className="text-ml font-bold text-gray-600">
                        {selectedCategory.toUpperCase()}
                      </h2>
                    </th>
                    <th className="px-1 md:px-2 py-2 text-left border-b-2 w-1/3"></th>
                    <th className="px-1 md:px-2 py-2 text-left border-b-2 w-1/3"></th>
                    <th className="px-1 md:px-2 py-2 text-left border-b-2 w-1/3"></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCategory === 'products' &&
                    products &&
                    newProducts(products).map((el, index) => (
                      <React.Fragment key={el._id}>
                        <tr className="" key={el._id}>
                          <td className="px-1 md:px-2 py-2 text-left align-center w-full md:w-1/3">
                            <div>
                              <h2 className=" font-semibold">{el.name.ru}</h2>
                              <p className="text-[8px] md:text-xs">
                                {formattedDate(el.createdAt)}
                              </p>
                              <div className="flex gap-1">
                                <input
                                  type="checkbox"
                                  id={el._id}
                                  name={el._id}
                                  checked={el.availability}
                                  onChange={(e) => {
                                    dispatch(
                                      updateAvailability({
                                        id: el._id,
                                        arg: { availability: e.target.checked },
                                      })
                                    );
                                    dispatch(fetchProducts());
                                  }}
                                />
                                <p>Наличие</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-1 md:px-2 py-2 text-left align-center w-1/3">
                            <div>
                              <p>
                                <span className="font-bold">Категория: </span>
                                {t(el.category)}
                              </p>
                              <p>
                                <span className="font-bold">Тип: </span>
                                {t(el.type)}
                              </p>
                            </div>
                          </td>
                          <td className="px-1 md:px-2 py-2 text-left align-center w-1/3">
                            <div className="hidden md:block md:px-2 lg:px-10">
                              <p>
                                <span className="font-bold">Описание: </span>
                                {cutText(el.description.ru, 120)}
                              </p>
                            </div>
                          </td>
                          <td className="px-1 md:px-2 py-2 text-right text-cyan-500 w-1/3">
                            <p>
                              {el.price}
                              <span className="font-bold">₴</span>
                            </p>

                            {el.discount > 0 && (
                              <p className="text-red">-{el.discount}%</p>
                            )}
                          </td>
                        </tr>
                        <tr className="border-b w-full">
                          <td className="px-1 pb-3  text-white flex gap-2 md:gap-4">
                            <div
                              className=" cursor-pointer hover:opacity-80 transition-opacity px-42 p-1 bg-red rounded-md flex justify-center items-center"
                              onClick={() => onTogleDeleteProductModal(el)}
                            >
                              Удалить
                            </div>
                            <div
                              className=" cursor-pointer hover:opacity-80 transition-opacity p-1 bg-green-500 rounded-md flex justify-center items-center"
                              onClick={() => onTogleEditProductModal(el)}
                            >
                              Изменить
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  {selectedCategory === 'reviews' &&
                    reviews &&
                    filteredReviews(reviews).map((el, index) => (
                      <tr className="border-b" key={el._id}>
                        <td className="px-1 md:px-2 py-2 text-left align-center w-1/4 md:w-1/2">
                          <div>
                            <h2>{el.author}</h2>
                            <p className="text-[8px] md:text-xs">
                              {formattedDate(el.createdAt)}
                            </p>
                          </div>
                        </td>
                        <td className="px-1 md:px-2 py-2 text-left align-center w-1/2">
                          <div>
                            <p className="bold">{el.title}</p>
                            <p>{el.text}</p>
                          </div>
                        </td>
                        <td className="px-1 md:px-2 py-2 text-left w-1/4 text-white">
                          <div className="flex flex-col gap-1">
                            <div
                              className=" cursor-pointer hover:opacity-80 transition-opacity px-42 p-1 bg-red rounded-md flex justify-center items-center"
                              onClick={() => handleDeleteReview(el)}
                            >
                              Удалить
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className='bg-slate-200 h-screen w-full rounded-lg mb-10 animate-pulse'>

            </div>
          )}
        </div>
      </div>

      <BasicModal
        isOpen={isModalDeleteProductOpen}
        onCloseModal={onTogleDeleteProductModal}
      >
        <DeleteProduct
          onCloseModal={onTogleDeleteProductModal}
          product={selectedProduct}
        />{' '}
      </BasicModal>
      <BasicModal
        isOpen={isModalEditProductOpen}
        onCloseModal={onTogleEditProductModal}
      >
        <EditProduct
          onCloseModal={onTogleEditProductModal}
          product={selectedProduct}
        />
      </BasicModal>
    </Container>
  );
};

export default AdminPage;
