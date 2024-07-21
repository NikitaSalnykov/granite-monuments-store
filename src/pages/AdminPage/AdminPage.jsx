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

const AdminPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('products');
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoadingProducts = useSelector(getIsLoadingProducts);
  const filterName = useSelector(getFilterName);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const changeCategory = (category) => {
    setSelectedCategory(category);
    console.log(products);
  };

  console.log(isLoadingProducts);

  return (
    <Container>
      <div className="h-auto">
        <AdminNavbar
          changeCategory={changeCategory}
          selectedCategory={selectedCategory}
        />

        <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2 min-h-screen">
          {!isLoadingProducts ? (
            <div className="bg-white rounded-lg p-4 shadow-md mb-20 min-h-screen">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left border-b-2 w-1/3">
                      <h2 className="text-ml font-bold text-gray-600">
                        Transacciones
                      </h2>
                    </th>
                    <th className="px-4 py-2 text-left border-b-2 w-1/3"></th>
                    <th className="px-4 py-2 text-left border-b-2 w-1/3"></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCategory === 'products' &&
                    products.map((el, index) => (
                      <tr className="border-b" key={index}>
                        <td className="px-4 py-2 text-left align-top w-1/2">
                          <div>
                            <h2>{el.name.ru}</h2>
                            <p>{el.createdAt}</p>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-left align-top w-1/4">
                          <div>
                            <h2>{el.category}</h2>
                            <p>{el.type}</p>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-left text-cyan-500 w-1/4">
                          <p>
                            {el.price}
                            <span className="font-bold">₴</span>
                            {el.discount && (
                              <p className="text-red">-{el.discount}%</p>
                            )}
                          </p>
                        </td>
                        <td className="px-4 py-2 text-left text-cyan-500 w-1/4">
                          <div className="flex flex-col">
                            <div>Удалить</div>
                            <div>Изменить</div>
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
    </Container>
  );
};

export default AdminPage;
