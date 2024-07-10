import React, { useState } from 'react';
import image from '../../images/example.webp';

const ProductDetails = () => {
  const [isShippingVisible, setShippingVisible] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);

  const toggleSection = (setVisible) => {
    setVisible((prevState) => !prevState);
  };

  return (
    <div className="lg:flex items-start justify-center pb-12 2xl:px-20 lg:px-6 px-4">
      <div className="w-full flex justify-center lg:w-2/5">
        <img className="w-full mdOnly:w-1/2" alt="image of a girl posing" src={image} />
      </div>
      <div className="xl:w-2/5 lg:w-1/2 lg:ml-8 lg:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600 ">Balenciaga Fall Collection</p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800  mt-2">Balenciaga Signature Sweatshirt</h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 ">Colours</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 ">Smoke Blue with red accents</p>
            <div className="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer"></div>
            <svg className="cursor-pointer text-gray-300 " width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 ">Size</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600  mr-3">38.2</p>
            <svg className="text-gray-300  cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700">
          <svg className="mr-3 text-white " width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66699 4.83333V4.84166" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.333 11.5V11.5083" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Check availability in store
        </button>
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600  mt-7">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <p className="text-base leading-4 mt-7 text-gray-600 ">Product Code: 8BN321AF2IF0NYA</p>
          <p className="text-base leading-4 mt-4 text-gray-600 ">Length: 13.2 inches</p>
          <p className="text-base leading-4 mt-4 text-gray-600 ">Height: 10 inches</p>
          <p className="text-base leading-4 mt-4 text-gray-600 ">Depth: 5.1 inches</p>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(setShippingVisible)}
              >
                <p className="text-base leading-4 text-gray-800 ">Shipping and returns</p>
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  aria-label="show or hide"
                >
                  <svg
                    className={`transform ${isShippingVisible ? 'rotate-180' : ''} text-gray-300 `}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {isShippingVisible && (
                <p className="pt-4 text-base leading-normal pr-12 text-gray-600 ">
                  You will be responsible for paying for your own shipping costs for returning your item. Shipping costs
                  are nonrefundable
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(setContactVisible)}
            >
              <p className="text-base leading-4 text-gray-800 ">Contact us</p>
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                aria-label="show or hide"
              >
                <svg
                  className={`transform ${isContactVisible ? 'rotate-180' : ''} text-gray-300 `}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            {isContactVisible && (
              <p className="pt-4 text-base leading-normal pr-12 text-gray-600 ">
                If you have any questions on how to return your item to us, contact us at info@fashion.com
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
