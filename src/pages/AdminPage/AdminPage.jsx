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
  const [selectedCategory, setSelectedCategory] = useState('products')
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoadingProducts = useSelector(getIsLoadingProducts);
  const filterName = useSelector(getFilterName);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const changeCategory = (category) => {
    setSelectedCategory(category)
    console.log(products);
  }

  console.log(isLoadingProducts);

  return (
    <Container>
      <div className="h-auto">
      <AdminNavbar changeCategory={changeCategory} selectedCategory={selectedCategory}/>

      <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
      {!isLoadingProducts ? (
        <div className="bg-white rounded-lg p-4 shadow-md mb-20">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b-2 w-full">
                  <h2 className="text-ml font-bold text-gray-600">Transacciones</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((el, index) => (
              <tr className="border-b w-full" key={index}>
                <td className="px-4 py-2 text-left align-top ">
                  <div>
                    <h2>{el.name.ru}</h2>
                    <p>{el.createdAt}</p>
                  </div>
                  
                </td>
                {/* <td className="px-4 py-2 text-left align-top">
                  <div>
                    <h2>{el.category}</h2>
                    <p>{el.createdAt}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-left align-top">
                  <div>
                    <h2>{el.name.ru}</h2>
                    <p>{el.createdAt}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-red">
                  <p>-{el.discount}<span className=' font-bold'>%</span></p>
                </td> */}
                <td className="px-4 py-2 text-right text-cyan-500">
                  <p>{el.price}<span className=' font-bold'>₴</span></p>
                </td>
                </tr>))}

            </tbody>
          </table>
        </div>)
      : <Loader/>
      }
      </div>
      </div>
    </Container>
  );
};

export default AdminPage;
