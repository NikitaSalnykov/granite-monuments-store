import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ReviewSchema } from '../../../schemas/ReviewSchema';
import { createReview } from '../../../Redux/reviews/reviewsOperation';
import { resetReviewCreated } from '../../../Redux/reviews/reviewsSlice';
import {
  getIsLoadingReview,
  getIsReviewCreated,
} from '../../../Redux/reviews/reviewsSelectors';

const errorTextStyle =
  'pl-4 absolute text-rose-500 text-xs font-normal left-[-20px] bottom-[-15px] xl:left-[85px]';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px]";
const inputStyle =
  "outline-offset-0 outline-0 border border-black outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide h-6 px-3 py-4 rounded-sm border border-blue-400 justify-start items-center gap-[191px] inline-flex w-full";

export const CreateReview = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingReview);
  const isReviewCreated = useSelector(getIsReviewCreated);

  useEffect(() => {
    if (isReviewCreated) {
      onCloseModal();
      dispatch(resetReviewCreated());
    }
  }, [isReviewCreated, onCloseModal, dispatch]);

  const formik = useFormik({
    initialValues: {
      author: '',
      title: '',
      text: '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: ReviewSchema,
    onSubmit: ({ text, author, title }) => {
      const newReview = {
        text,
        title,
        author,
      };
      dispatch(createReview(newReview));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const renderInputField = (label, name, type = 'text', isTextArea = false) => (
    <div className="relative flex flex-col gap-2 justify-between">
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
              {renderInputField('Автор', 'author')}
              {renderInputField('Заголовок', 'title')}
              {renderInputField('Отзыв', 'text', 'text', true)}
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
