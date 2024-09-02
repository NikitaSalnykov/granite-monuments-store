import * as yup from 'yup';

export const GallerySchema = yup.object({
  mainPhoto: yup
  .mixed()
  .nullable()
  .required('Добавьте фото'),
  title: yup
    .string('Отзыв должен состоять только из букв')
    .min(6, 'Отзыв должен содержать минимум 6 символов')
    .max(45, 'Отзыв должен содержать максимум 45 символов')
    .required('Укажите заголовок'),
  text: yup
    .string('Отзыв должен состоять только из букв')
    .max(450, 'Отзыв должен содержать максимум 450 символов')
});
