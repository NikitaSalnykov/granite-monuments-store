import { useTranslation } from "react-i18next";
import { CategoriesList } from "../CategoriesList/CategoriesList"
import { Title } from "../Title/Title";

export const AllCategories = () => {

  const { t } = useTranslation();

  const categories = [  { title: t('monuments'), link: '/monuments', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg"  },
  { title: t('landscaping'), link: '/landscaping', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" },
  { title: t('related_products'), link: '/relatedproducts', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" },
  { title: t('building_materials'), link: '/buildingmaterials', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" },
  { title: t('extra_services'), link: '/services', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" }, 
  { title: t('contacts'), link: '/about', img: "https://lviv.media/static/content/files/f/2d/73b6c579b38e13841d29b0fe8c15d2df.jpg" }, ]

  return (
    <div>
      <Title title={"Всі категорії"} description={"Гарантуємо повний пакет послуг від виробництва пам'ятників до повного благоустрію"}/>
      <CategoriesList categories={categories} sm={true}/>
    </div>
  )
}
