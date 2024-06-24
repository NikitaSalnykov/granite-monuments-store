import { useState } from 'react';
import Svg from '../Svg/Svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Dropdown } from '../Dropdown/Dropdown';
import { Logo } from '../Logo/Logo';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onToglegModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  console.log(currentLanguage);

  return (
    <div>
      <div class="bg-white z-50 fixed mx-auto w-full">
  <div class="border py-3 px-6">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <Logo/>
      </div>

      <div class="ml-6 flex flex-1 gap-x-3">
        <div class="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span class="text-sm font-medium">Categories</span>
        </div>

        <input type="text" class="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" value="DJI phantom" />
      </div>

      <div class="ml-2 flex">
        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium">Orders</span>
        </div>

        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium">Favorites</span>
        </div>

        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
          </div>
          <span class="text-sm font-medium">Cart</span>
        </div>

        {/* <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
          <span class="text-sm font-medium">Sign in</span>
        </div> */}

          <div className="lg:flex justify-center text-black flex cursor-pointer items-center gap-x-1 rounded-md  px-1 hover:bg-gray-100">
            <button onClick={() => changeLanguage('ua')} className={`${currentLanguage === 'ua' ? 'font-semibold' : 'opacity-75'}`}>ua</button>
          </div>
          <div className="lg:flex justify-center text-black flex cursor-pointer items-center gap-x-1 rounded-md  px-1 hover:bg-gray-100">
            <button  onClick={() => changeLanguage('ru')} className={`${currentLanguage === 'ru' ? 'font-semibold' : 'opacity-75'}`}>ru</button>
          </div>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <div class="flex gap-x-2 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        <span class="text-sm font-medium">Україна, м.Дніпро</span>
      </div>

      <div class="flex gap-x-8">
    <Dropdown 
        title={t('monuments')} 
        links={[
            {title: t('availability'), link: ""}, 
            {title: t('vertical'), link: ""}, 
            {title: t('horizontal'), link: ""}, 
            {title: t('small'), link: ""}
        ]}
    />
    <Dropdown 
        title={t('landscaping')} 
        links={[
            {title: t('anti_settlement_slabs'), link: ""}, 
            {title: t('paving_tiles'), link: ""}, 
            {title: t('granite_tiles'), link: ""}, 
            {title: t('fencing'), link: ""}, 
            {title: t('tables_and_benches'), link: ""}, 
            {title: t('vases_and_lamps'), link: ""}, 
            {title: t('cubes_and_spheres'), link: ""}
        ]}
    />
    <Dropdown 
        title={t('related_products')} 
        links={[
            {title: t('glass_photos'), link: ""}, 
            {title: t('plaques'), link: ""}, 
            {title: t('embedded_parts'), link: ""}
        ]}
    />
    <div className='px-4 py-2 cursor-pointer rounded-sm text-sm font-medium hover:bg-gray-100 flex items-center justify-center'>
        {t('building_materials')}
    </div>
</div>


      <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">+38056345654</span>
    </div>
  </div>
</div>
        <MobileMenu isOpen={isModalOpen}
        onCloseModal={onToglegModal}/>

    </div>
  )
}

export default Header