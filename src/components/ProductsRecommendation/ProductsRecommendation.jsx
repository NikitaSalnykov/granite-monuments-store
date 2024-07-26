import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../Redux/products/productsOperation"
import { getProducts } from "../../Redux/products/productsSelectors"
import { SwiperCards } from "../Swiper/SwiperCards"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export const ProductsRecommendation = ({category=false, type=false, discount=false, newItems=false}) => { 
  
  const {t} = useTranslation()

  const dispatch = useDispatch()
  const products = useSelector(getProducts)
  let title 

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  console.log(category);

  const filterProducts = (products) => {
    if (!products || products.length < 3) return products;
  
    let filtered = [...products];
  
    if (category && typeof category === 'string') {
      filtered = filtered.filter(el => el.category.includes(category));
      title = `${t('recomandation')} ${t(category)}`
    }
    
    if (type && typeof type === 'string') {
      filtered = filtered.filter(el => el.type.includes(type));
      title = `${t('recomandation')} ${t(type)}`
    }
    
    if (discount && typeof discount === 'boolean') {
      filtered = filtered.filter(el => el.discount > 0);
      title = `${t('recomandation')} ${t('sale')}`
    }
  
    filtered = filtered.filter((product, index, self) =>
      index === self.findIndex((t) => t._id === product._id)
    );

    if ((category && typeof category=== 'string') && (type && typeof type === 'string')) {
      const randomNumber = Math.random() * (100 - 1) + 1

      if (randomNumber <= 50) {
        filtered.filter(el => el.category.includes(category))
        title = `${t('recomandation')} ${t(category)}`

      } else {
        filtered.filter(el => el.type.includes(type));
        title = `${t('recomandation')} ${t(category)} / ${t(type)}`
      }
  }

  return filtered

}
  

  return (

    <>
      {products && filterProducts(products) &&  filterProducts(products).length > 0 && 
      
      <div className="flex flex-col gap-4 ">
        {title && <h3 className="text-lg md:text-xl ">{title}</h3>}
        <div className="p-2">
        <SwiperCards products={filterProducts(products)}/> 
        </div>
      </div>
      
      }
    </>

  )


}