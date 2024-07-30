import { useTranslation } from 'react-i18next';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { Title } from '../Title/Title';
import monumentsImg from '../../images/Памятники.webp';
import landscapingImg from '../../images/Благоустройство.png';
import services from '../../images/img-1.jpg';
import relatedproductsImg from '../../images/Сопутствующие-товары.webp';
import buildingmaterials from '../../images/Стройматериалы.png';
import extraImg from '../../images/img-2.jpg';
import { AllCategoriesList } from '../CategoriesList/AllCategoriesList';
export const AllCategories = () => {
  
  const { t } = useTranslation();
  
  const categories = [
    {
      title: t('monuments'),
      link: '/monuments',
      img: monumentsImg,
    },
    {
      title: t('landscaping'),
      link: '/landscaping',
      img: landscapingImg,
    },
    {
      title: t('relatedProducts'),
      link: '/relatedproducts',
      img: relatedproductsImg,
    },
    {
      title: t('buildingMaterials'),
      link: '/buildingmaterials',
      img: buildingmaterials,
    },
    {
      title: t('extraServices'),
      link: '/services',
      img: services,
    },
    {
      title: t('contacts'),
      link: '/about',
      img: extraImg,
    },
  ];

  return (
    <div>
      <Title
        title={t('all_categories')}
        description={t('all_categories_descr')}
      />
      <AllCategoriesList categories={categories} sm={true} />
    </div>
  );
};
