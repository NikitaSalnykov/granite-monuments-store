import { Filter } from '../../components/Filter/Filter';
import AddProduct from '../../components/Modals/AdminModals/AddProduct';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';
import { CreateReview } from '../../components/Modals/Review/CreateReview';
import { CreatePhoto } from '../../components/Modals/Gallery/AddPhoto';
import Leaving from '../../components/Modals/Leaving/Leaving';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const AdminNavbar = ({
  changeCategory,
  selectedCategory,
  isModalProductOpen,
  onTogleProductModal,
  isModalReviewOpen,
  onTogleReviewModal,
  onTogleGalleryModal,
  isModalGalleryOpen
}) => {
  const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);
  const { t } = useTranslation();

  const onToogleLeavingModal = () => {
    setLeavingModalOpen(!isLeavingModalOpen);
  };

  const handleToggleModal = () => {
    if (selectedCategory === 'products') {
      onTogleProductModal();
    } else if (selectedCategory === 'reviews') {
      onTogleReviewModal();
    } else if (selectedCategory === 'gallery') {
      onTogleGalleryModal();
    } else {
      console.log('Error');
    }
  };

  return (
    <>
      <div
        id="sideNav"
        className="hidden lg:block bg-white absolute w-64 rounded-lg border-none"
      >
        <div className="p-4 space-y-2 gap-2">
          <div
            onClick={() => changeCategory('products')}
            className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${
              selectedCategory === 'products' ? 'text-white bg-black' : ''
            }`}
          >
            Товары
          </div>
          <div
            onClick={() => changeCategory('reviews')}
            className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${
              selectedCategory === 'reviews' ? 'text-white bg-black' : ''
            }`}
          >
            Отзывы
          </div>
          <div
            onClick={() => changeCategory('gallery')}
            className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${
              selectedCategory === 'gallery' ? 'text-white bg-black' : ''
            }`}
          >
            Галерея
          </div>
          {selectedCategory === 'products' ? (
            <Filter
              nameFilter={true}
              filterNew={true}
              filterPrice={true}
              filterSale={true}
            />
          ) : selectedCategory === 'reviews' ? (
            <Filter nameFilter={true} />
          ) : null}
          <div
            onClick={handleToggleModal}
            className="hover:cursor-pointer hover:opacity-85 shadow-md p-2 font-bold bg-black text-white rounded-full uppercase text-center"
          >
            {selectedCategory === 'products'
              ? 'Добавить товар'
              : selectedCategory === 'reviews'
              ? 'Добавить отзыв'
              : 'Добавить в галерею'}
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full border-none flex justify-center">
        <div className="flex flex-wrap flex-col justify-center gap-4 items-center bg-[#ffffffa9] w-[400px] p-4 mb-2 rounded-lg">
          <div
            onClick={onToogleLeavingModal}
            className="hover:cursor-pointer text-sm hover:opacity-85 text-center underline"
          >
            Выйти из аккаунта
          </div>
          <div className="flex gap-4">
            <div
              onClick={() => changeCategory('products')}
              className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${
                selectedCategory === 'products' ? 'text-white bg-black' : ''
              }`}
            >
              Товары
            </div>
            <div
              onClick={() => changeCategory('reviews')}
              className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${
                selectedCategory === 'reviews' ? 'text-white bg-black' : ''
              }`}
            >
              Отзывы
            </div>
            <div
              onClick={() => changeCategory('gallery')}
              className={`cursor-pointer px-2 py-1 flex items-center space-x-4 rounded-md text-gray-500 group ${
                selectedCategory === 'gallery' ? 'text-white bg-black' : ''
              }`}
            >
              Галерея
            </div>
          </div>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <div
              onClick={handleToggleModal}
              className="cursor-pointer bg-green-600 px-2 py-1 flex items-center space-x-4 rounded-md text-white text-center"
            >
              {selectedCategory === 'products'
                ? 'Добавить товар'
                : selectedCategory === 'reviews'
                ? 'Добавить отзыв'
                : 'Добавить в галерею'}
            </div>
          </div>
          {selectedCategory === 'products' ? (
            <Filter
              nameFilter={true}
              filterNew={true}
              filterPrice={true}
              filterSale={true}
            />
          ) : selectedCategory === 'reviews' ? (
            <Filter nameFilter={true} />
          ) : null}
        </div>
      </div>

      <BasicModal
        isOpen={isModalProductOpen}
        onCloseModal={onTogleProductModal}
      >
        <AddProduct onCloseModal={onTogleProductModal} />
      </BasicModal>

      <BasicModal isOpen={isModalReviewOpen} onCloseModal={onTogleReviewModal}>
        <CreateReview onCloseModal={onTogleReviewModal} />
      </BasicModal>

      <BasicModal isOpen={isModalGalleryOpen} onCloseModal={onTogleGalleryModal}>
        <CreatePhoto onCloseModal={onTogleGalleryModal} />
      </BasicModal>


      <BasicModal
        isOpen={isLeavingModalOpen}
        onCloseModal={onToogleLeavingModal}
      >
        <Leaving onCloseModal={onToogleLeavingModal} />
      </BasicModal>
    </>
  );
};