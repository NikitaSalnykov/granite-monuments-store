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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterCategory, setFilterName, setFilterNew, setFilterPrice, setFilterSale, setFilterType } from '../../Redux/filter/filterSlice';

export const AllCategories = () => {
  
  const { t } = useTranslation();
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(setFilterName(''));
    dispatch(setFilterPrice(''));
    dispatch(setFilterType(''));
    dispatch(setFilterCategory(''));
    dispatch(setFilterSale(false));
    dispatch(setFilterNew(false));
  }, []);
  
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
      title: t('photogallery'),
      link: '/gallery',
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
