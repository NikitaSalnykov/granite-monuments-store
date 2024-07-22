import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateProduct } from '../../../Redux/products/productsOperation';
import {
  getIsLoadingProducts,
  getIsProductUpdated,
  getErrorProducts,
} from '../../../Redux/products/productsSelectors';
import { productEditSchema } from '../../../schemas/ProductEditSchema';
import { resetProductUpdated } from '../../../Redux/products/productsSlice';

const categories = ['fff', 'aaaa', 'cccc', 'dddd'];
const type = ['1111', '2222', '3333', '4444'];

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-6 left-[60px] xl:left-[85px]';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px]";
const inputStyle =
  "outline-offset-0 outline-0 border border-black outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide h-6 px-3 py-4 rounded-sm border border-blue-400 justify-start items-center gap-[191px] inline-flex w-full";

export const EditProductForm = ({ onCloseModal, product }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingProducts);
  const isProductUpdated = useSelector(getIsProductUpdated);
  const errorProducts = useSelector(getErrorProducts);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isProductUpdated) {
      onCloseModal();
      dispatch(resetProductUpdated());

    } else if (errorProducts) {
      setErrorMessage('Произошла ошибка, попробуйте снова.');
    }
  }, [isProductUpdated, errorProducts, onCloseModal, dispatch]);

  const formik = useFormik({
    initialValues: {
      nameRU: product.name.ru,
      nameUA: product.name.ua,
      category: product.category,
      type: product.type,
      price: product.price,
      descriptionRU: product.description.ru,
      descriptionUA: product.description.ua,
      article: product.article,
      discount: product.discount || 0,
      mainPhoto: null,
      extraPhotos: null,
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: productEditSchema,
    onSubmit: (values) => {
      const updateUser = { ...values };

      const formData = createUserFormData(updateUser);
      dispatch(updateProduct({ id: product._id, arg: formData }));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const createUserFormData = (data) => {
    const formData = new FormData();

    formData.append('name[ua]', data.nameUA);
    formData.append('name[ru]', data.nameRU);
    formData.append('category', data.category);
    formData.append('type', data.type);
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
          className={`${inputStyle} resize-none h-[200px] ${errors[name] && 'border-rose-400'}`}
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
                    <option value="" disabled>Выберите категорию</option>
                    {categories.map((el, index) => (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                  {errors['category'] && (
                    <p className={errorTextStyle}>{errors['category']}</p>
                  )}
                </div>
            </div>
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
                    <option value="" disabled>Выберите тип</option>
                    {type.map((el, index) => (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                  {errors['type'] && (
                    <p className={errorTextStyle}>{errors['type']}</p>
                  )}
                </div>
            </div>
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
              <p className={`${errorTextStyle} top-[-20px] left-[20%]`}>{errors['mainPhoto']}</p>
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
              <p className={`${errorTextStyle} top-[-20px] left-[20%]`}>{errors['extraPhotos']}</p>
            )}
          </div>
        </div>
      </div>

      {errorMessage && (
        <p className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
          {errorMessage}
        </p>
      )}

      <div className="flex justify-end mt-10">
        <button
          className="text-sm py-2 px-4 bg-blue-500 text-white rounded-md"
          type="submit"
          disabled={isLoading}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};
