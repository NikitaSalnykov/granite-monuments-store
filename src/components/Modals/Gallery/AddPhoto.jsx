import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GallerySchema } from '../../../schemas/GallerySchema';
import { createPhoto } from '../../../Redux/gallery/galleryOperation';
import { resetCreated } from '../../../Redux/gallery/gallerySlice';
import {
  getIsLoading,
  getIsCreated,
} from '../../../Redux/gallery/gallerySelectors';

const errorTextStyle =
  'pl-4 absolute text-rose-500 text-xs font-normal left-[-20px] bottom-[-15px] xl:left-[85px]';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px]";
const inputStyle =
  "outline-offset-0 outline-0 border border-black outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide h-6 px-3 py-4 rounded-sm border border-blue-400 justify-start items-center gap-[191px] inline-flex w-full";

export const CreatePhoto = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isCreated = useSelector(getIsCreated);

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (isCreated) {
      onCloseModal();
      dispatch(resetCreated());
    }
  }, [isCreated, onCloseModal, dispatch]);

  const formik = useFormik({
    initialValues: {
      mainPhoto: null,
      title: '',
      text: '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: GallerySchema,
    onSubmit: (values) => {
      const newPhoto = { ...values };
      const formData = createUserFormData(newPhoto);
      dispatch(createPhoto(formData));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const createUserFormData = (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    if (data.text.trim() !== "") formData.append('text', data.text);
    formData.append('mainPhoto', data.mainPhoto);
    
    return formData;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue('mainPhoto', file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const renderInputField = (label, name, type = 'text', isTextArea = false) => (
    <div className="relative flex flex-col gap-2 justify-between">
      <label className={labelStyle} htmlFor={name}>
        {label}:
      </label>
      {isTextArea ? (
        <textarea
          className={`${inputStyle} resize-none h-[100px] ${
            errors[name] && 'border-rose-400'
          }`}
          id={name}
          name={name}
          value={formikValues[name]}
          onChange={formik.handleChange}
          placeholder={`Введите ${label.toLowerCase()}`}
        />
      ) : (
        <input
          className={`${inputStyle} ${errors[name] && 'border-rose-400'}`}
          type={type}
          id={name}
          name={name}
          value={formikValues[name]}
          onChange={formik.handleChange}
          placeholder={`Введите ${label.toLowerCase()}`}
        />
      )}
      {errors[name] && <p className={errorTextStyle}>{errors[name]}</p>}
    </div>
  );

  return (
    <div className="text-center smOnly:px-3 md:px-5 rounded-3xl">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Оставить отзыв
      </h3>
      <div>
        <form
          noValidate
          autoComplete="off"
          className="flex flex-col flex-wrap-reverse"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex-row-reverse w-[275px] md:w-[500px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-between relative items-center gap-2">
                {preview ? (
                  <img
                    src={preview}
                    alt="Предпросмотр"
                    className="w-[160px] h-[160px] lg:w-[260px] md:h-[260px] rounded-md object-cover"
                  />
                ) : (
                  <div className="w-[160px] h-[160px] lg:w-[260px] md:h-[260px] rounded-md bg-slate-200"></div>
                )}
                <div>
                  <label className={labelStyle} htmlFor="mainPhoto">
                    Фото
                  </label>
                  <input
                    className={`w-full`}
                    type="file"
                    id="mainPhoto"
                    name="mainPhoto"
                    accept="image/jpeg, image/png, image/webp, webp"
                    onChange={handleFileChange}
                  />
                  {errors['mainPhoto'] && (
                    <p className={`${errorTextStyle} top-[20px] left-[40%]`}>
                      {errors['mainPhoto']}
                    </p>
                  )}
                </div>
              </div>
              {renderInputField('Заголовок', 'title')}
              {renderInputField('Описание (необязательно)', 'text', 'text', true)}
            </div>
            <div className="smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 mt-12">
              {!isLoading ? (
                <button
                  type="submit"
                  disabled={false}
                  className={`"Frame36 hover:blue-gradient hover:opacity-80 smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex text-blue text-base font-bold font-['Manrope'] tracking-wide"`}
                >
                  Добавить
                </button>
              ) : (
                <div>Loading</div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
