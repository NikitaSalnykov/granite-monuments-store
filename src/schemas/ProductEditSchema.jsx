import * as yup from 'yup';

export const productEditSchema = yup.object({
  nameUA: yup
    .string('Названиие должно состоять только из букв')
    .min(2, 'Название должно содержать минимум 2 символа'),
    nameRU: yup
    .string('Названиие должно состоять только из букв')
    .min(2, 'Название должно содержать минимум 2 символа'),
  category: yup
    .string('Цвет должен состоять только из букв')
    .min(2, 'Цвет должна содержать минимум 2 символа'),

  type: yup
  .string('Цвет должен состоять только из букв')
  .min(2, 'Цвет должна содержать минимум 2 символа'),


  price: yup
    .number('Цена должна содержать только цифры')
    .typeError('Цена должна содержать только цифры'),

    discount: yup
    .number('Скидка должна содержать только цифры')
    .min(0, 'Скидка должна быть минимим 0')
    .max(100, 'Скидка должна быть минимим 100')
        .typeError('Скидка должна содержать только цифры'),
  
    descriptionUA: yup
    .string('Описание должно должно состоять только из букв'),
    descriptionRU: yup
    .string('Описание должно должно состоять только из букв'),

    mainPhoto: yup
    .mixed()
    .nullable(),

    
    extraPhotos: yup
    .mixed()
    .test('maxFiles', 'Максимальное количество файлов - 3', (value) => {
      if (!value) return true;
      return value.length <= 3;
    })
    .nullable(),
});
