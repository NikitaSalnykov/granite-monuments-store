import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { AdminNavbar } from './AdminNavbar';
import { Button } from '../../components/Button/Button';
import { Filter } from '../../components/Filter/Filter';

const AdminPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('products')

  const changeCategory = (category) => {
    setSelectedCategory(category)
    console.log(category);
  }

  return (
    <Container>
      <div className="h-auto">
      <AdminNavbar changeCategory={changeCategory} selectedCategory={selectedCategory}/>

      <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
      <Filter nameFilter={true}/>

        <div className="lg:flex gap-4 items-center">
          <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
            <div className="flex justify-center items-center space-x-5 h-full">
              <div>
                <p>Saldo actual</p>
                <h2 className="text-4xl font-bold text-gray-600">50.365</h2>
                <p>25.365 $</p>
              </div>
              <img src="https://www.emprenderconactitud.com/img/Wallet.png" alt="wallet" className="h-24 md:h-20 w-38" />
            </div>
          </div>
        
          <div className={`hover:cursor-pointer hover:opacity-85 shadow-md md:p-6 p-6 font-bold bg-black text-white rounded-full uppercase text-center`}>
          + {selectedCategory}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md my-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b-2 w-full">
                  <h2 className="text-ml font-bold text-gray-600">Transacciones</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/07/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>150$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/07/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>150$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/07/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>150$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/07/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>150$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/07/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>150$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/07/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>150$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/07/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>150$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/06/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>15$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>02/05/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>50$</span></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      </div>
    </Container>
  );
};

export default AdminPage;
