import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createProduct } from '../../../Redux/products/productsOperation';
import {
  getIsLoadingProducts,
  getIsProductCreated,
  getErrorProducts,
} from '../../../Redux/products/productsSelectors';
import { productSchema } from '../../../schemas/ProductSchema';
import { resetProductCreated } from '../../../Redux/products/productsSlice';
import { useTranslation } from 'react-i18next';

const categories = [
  { title: 'monuments', t: 'monuments' },
  { title: 'landscaping', t: 'landscaping' },
  { title: 'relatedProducts', t: 'relatedProducts' },
  { title: 'buildingMaterials', t: 'buildingMaterials' },
];
const monuments = [
  { title: 'availability', t: 'availability' },
  { title: 'vertical', t: 'vertical' },
  { title: 'horizontal', t: 'horizontal' },
  { title: 'small', t: 'small' },
];
const landscaping = [
  { title: 'antiSettlementSlabs', t: 'antiSettlementSlabs' },
  { title: 'pavingTiles', t: 'pavingTiles' },
  { title: 'graniteTiles', t: 'graniteTiles' },
  { title: 'fencing', t: 'fencing' },
  { title: 'tablesAndBenches', t: 'tablesAndBenches' },
  { title: 'vasesAndLamps', t: 'vasesAndLamps' },
  { title: 'cubesAndSpheres', t: 'cubesAndSpheres' },
];

const relatedproducts = [
  { title: 'glassPhotos', t: 'glassPhotos' },
  { title: 'plaques', t: 'plaques' },
  { title: 'embeddedParts', t: 'embeddedParts' },
];

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-2 left-[160px] xl:left-[85px]';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px]";
const inputStyle =
  "outline-offset-0 outline-0 border border-black outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide h-6 px-3 py-4 rounded-sm border border-blue-400 justify-start items-center gap-[191px] inline-flex w-full";

export const AddProductForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingProducts);
  const isProductCreated = useSelector(getIsProductCreated);
  const errorProducts = useSelector(getErrorProducts);
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (isProductCreated) {
      onCloseModal();
      dispatch(resetProductCreated());
    } else if (errorProducts) {
      setErrorMessage('Произошла ошибка, попробуйте снова.');
    }
  }, [isProductCreated, errorProducts, onCloseModal, dispatch]);


  const formik = useFormik({
    initialValues: {
      nameRU: '',
      nameUA: '',
      category: '',
      type: '',
      price: '',
      descriptionRU: '',
      descriptionUA: '',
      article: '',
      discount: 0,
      mainPhoto: null,
      extraPhotos: null,
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: productSchema,
    onSubmit: (values) => {
      const newProduct = { ...values };

      const formData = createUserFormData(newProduct);
      dispatch(createProduct(formData));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const createUserFormData = (data) => {
    const formData = new FormData();

    formData.append('name[ua]', data.nameUA);
    formData.append('name[ru]', data.nameRU);
    formData.append('category', data.category);
    if(data.category === "buildingMaterials") {
      formData.append('type', 'all')} else {
        formData.append('type', data.type);
      };
    formData.append('price', data.price);
    formData.append('discount', data.discount);
    formData.append('description[ua]', data.descriptionUA);
    formData.append('description[ru]', data.descriptionRU);
    formData.append('article', data.article);
    formData.append('mainPhoto', data.mainPhoto);

    // Добавляем extraPhotos, если они существуют
    if (data.extraPhotos && data.extraPhotos.length > 0) {
      [...data.extraPhotos].forEach((file) => {
        formData.append('extraPhotos', file);
      });
    }
    return formData;
  };

  const renderInputField = (label, name, type = 'text', isTextArea = false) => (
    <div className="flex justify-between relative flex-wrap gap-2 items-center">
      <label className={labelStyle} htmlFor={name}>
        {label}:
      </label>
      {isTextArea ? (
        <textarea
          className={`${inputStyle} resize-none h-[200px] ${
            errors[name] && 'border-rose-400'
          }`}
          id={name}
          name={name}
          value={formikValues[name]}
          onChange={formik.handleChange}
        />
      ) : (
        <input
          className={`${inputStyle} ${errors[name] && 'border-rose-400'}`}
          type={type}
          id={name}
          name={name}
          value={formikValues[name]}
          onChange={formik.handleChange}
        />
      )}
      {errors[name] && <p className={errorTextStyle}>{errors[name]}</p>}
    </div>
  );

  return (
    <form
      noValidate
      autoComplete="off"
      className="flex flex-col flex-wrap-reverse"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-row-reverse w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 w-full">
            {renderInputField('Название UA', 'nameUA')}
            {renderInputField('Название RU', 'nameRU')}
            <div className="flex-col">
              <div className="flex justify-between w-full relative flex-wrap gap-2 items-center">
                <label className={labelStyle} htmlFor="category">
                  Категория:
                </label>
                <select
                  className={`w-[150px] text-xs outline-none border-b-black border-[1px] p-1 ${
                    errors['category'] && 'border-rose-400'
                  }`}
                  id="category"
                  name="category"
                  value={formikValues['category']}
                  onChange={formik.handleChange}
                >
                  <option value=''>
                      Выберете категорию
                    </option>
                  {categories.map((el, index) => (
                    <option key={index} value={el.title}>
                      {t(el.t)}
                    </option>
                  ))}
                </select>
                {errors['category'] && (
                  <p className={`${errorTextStyle} top-[10px] `}></p>
                )}
              </div>
            </div>
            {formikValues['category'] !== 'buildingMaterials' && (
              <div className="flex-col">
                <div className="flex justify-between w-full relative flex-wrap gap-2 items-center">
                  <label className={labelStyle} htmlFor="type">
                    Тип:
                  </label>
                  <select
                    className={`w-[150px] text-xs outline-none border-b-black border-[1px] p-1 ${
                      errors['type'] && 'border-rose-400'
                    }`}
                    id="type"
                    name="type"
                    value={formikValues['type']}
                    onChange={formik.handleChange}
                  >
                                      <option value=''>
                      Выберете тип
                    </option>
                    {formikValues['category'] === 'monuments' &&
                      monuments.map((el, index) => (
                        <option key={index} value={el.title}>
                          {t(el.t)}
                        </option>
                      ))}
                    {formikValues['category'] === 'landscaping' &&
                      landscaping.map((el, index) => (
                        <option key={index} value={el.title}>
                          {t(el.t)}
                        </option>
                      ))}
                    {formikValues['category'] === 'relatedProducts' &&
                      relatedproducts.map((el, index) => (
                        <option key={index} value={el.title}>
                          {t(el.t)}
                        </option>
                      ))}
                  </select>
                  {errors['type'] && (
                    <p className={`${errorTextStyle} top-[30px]`}></p>
                  )}
                </div>
              </div>
            )}
            {renderInputField('Цена', 'price')}
            {renderInputField('Скидка', 'discount')}
            {renderInputField('Артикль', 'article')}
          </div>

          <div className="flex flex-col gap-4 w-full">
            {renderInputField('Описание UA', 'descriptionUA', 'textarea', true)}
            {renderInputField('Описание RU', 'descriptionRU', 'textarea', true)}
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col justify-between relative items-center gap-2">
            <label className={labelStyle} htmlFor="mainPhoto">
              Главная фотка:
            </label>
            <input
              className={`w-full`}
              type="file"
              id="mainPhoto"
              name="mainPhoto"
              accept="image/jpeg, image/png, image/webp"
              onChange={(e) => {
                const file = e.target.files[0];
                formik.setFieldValue('mainPhoto', file);
              }}
            />
            {errors['mainPhoto'] && (
              <p className={`${errorTextStyle} top-[20px] left-[40%]`}>
                {errors['mainPhoto']}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-between relative items-center gap-2">
            <label className={labelStyle} htmlFor="extraPhotos">
              Дополнительные фото до 3х:
            </label>
            <input
              className={`w-full`}
              type="file"
              id="extraPhotos"
              name="extraPhotos"
              accept="image/jpeg, image/png, image/webp"
              multiple
              onChange={(e) => {
                const files = e.target.files;
                formik.setFieldValue('extraPhotos', files);
              }}
            />
            {errors['extraPhotos'] && (
              <p className={errorTextStyle}>{errors['extraPhotos']}</p>
            )}
          </div>
        </div>

        <div className="smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 mt-4">
          {!isLoading ? (
            <button
              type="submit"
              disabled={false}
              className=" hover:blue-gradient hover:text-white h-10 px-5 py-2 rounded-3xl border-2 border-black justify-center items-center gap-2 inline-flex  text-black text-base font-bold font-['Manrope']tracking-wide hover:bg-black"
            >
              Создать продукт
            </button>
          ) : (
            <div className="flex justify-center items-center h-10">
              <div className="loader" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
