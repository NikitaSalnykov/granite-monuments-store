import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container/Container';
import { AdminNavbar } from './AdminNavbar';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterName } from '../../Redux/filter/filterSlice';
import Loader from '../../components/Loader/Loader';
import { fetchProducts } from '../../Redux/products/productsOperation';
import {formattedDate} from '../../helpers/formattedDate'
import DeleteProduct from '../../components/Modals/AdminModals/DeleteProduct';
import EditProduct from '../../components/Modals/AdminModals/EditProduct';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';

const AdminPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalEditProductOpen, setModalEditProductOpen] = useState(false);
  const [isModalDeleteProductOpen, setModalDeleteProductOpen] = useState(false);
  const [isModalProductOpen, setModalProductOpen] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoadingProducts = useSelector(getIsLoadingProducts);
  const filterName = useSelector(getFilterName);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, isModalProductOpen, isModalEditProductOpen, isModalProductOpen]);


  const onTogleProductModal = () => {
    setModalProductOpen(!isModalProductOpen);
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
    console.log(products);
  };
  console.log(products);

  const filteredProducts = (products) => {
    if (!products) return products;
    return products
      .filter((el) => 
        el && 
        (el.name.ua.toLowerCase().includes(filterName.toLowerCase()) || 
         el.name.ru.toLowerCase().includes(filterName.toLowerCase()))
      )
      .sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
  };

  console.log(isLoadingProducts);

  return (
    <Container>
      <div className="h-auto">
        <AdminNavbar
          changeCategory={changeCategory}
          selectedCategory={selectedCategory}
          isModalProductOpen={isModalProductOpen}
          onTogleProductModal={onTogleProductModal}
        />

        <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-[2px] md:mx-2 min-h-screen">
          {!isLoadingProducts ? (
            <div className="bg-white rounded-lg p-1 shadow-md mb-20  md:p-4 min-h-screen">
              <table className="table-auto w-full text-xs md:text-md">
                <thead>
                  <tr>
                    <th className="px-1 md:px-4 py-2 text-left border-b-2 w-1/3">
                      <h2 className="text-ml font-bold text-gray-600">
                        {selectedCategory.toUpperCase()}
                      </h2>
                    </th>
                    <th className="px-1 md:px-4 py-2 text-left border-b-2 w-1/3"></th>
                    <th className="px-1 md:px-4 py-2 text-left border-b-2 w-1/3"></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCategory === 'products' && products &&
                    filteredProducts(products).map((el, index) => (
                      <tr className="border-b" key={index}>
                        <td className="px-1 md:px-4 py-2 text-left align-top w-1/4 md:w-1/2">
                          <div>
                            <h2>{el.name.ru}</h2>
                            <p className='text-[8px] md:text-sm'>{formattedDate(el.createdAt)}</p>
                          </div>
                        </td>
                        <td className="px-1 md:px-4 py-2 text-left align-top w-1/4">
                          <div>
                            <h2>{el.category}</h2>
                            <p>{el.type}</p>
                          </div>
                        </td>
                        <td className="px-1 md:px-4 py-2 text-left text-cyan-500 w-1/4">
                          <p>
                            {el.price}
                            <span className="font-bold">₴</span>
                            {el.discount && (
                              <p className="text-red">-{el.discount}%</p>
                            )}
                          </p>
                        </td>
                        <td className="px-1 md:px-4 py-2 text-left w-1/4 text-white">
                          <div className="flex flex-col gap-1">
                            <div className=' cursor-pointer hover:opacity-80 transition-opacity px-42 p-1 bg-red rounded-md flex justify-center items-center' onClick={() => onTogleDeleteProductModal(el)}>Удалить</div>
                            <div  className=' cursor-pointer hover:opacity-80 transition-opacity p-1 bg-green-500 rounded-md flex justify-center items-center' onClick={() => onTogleEditProductModal(el)}>Изменить</div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            <Loader />
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
        />      </BasicModal>
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
