import { useTranslation } from 'react-i18next';
import Svg from '../Svg/Svg';
import { Title } from '../Title/Title';

export const Features = () => {
const {t} = useTranslation()

  return (
    <div className="">
      <Title title={t('feature_title')}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-12 px-2 lg:px-12 items-start">
        <div className="flex space-x-8">
          <div>
            <Svg id={'icon-quality'} fill={'black'} size={39}></Svg>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-700">
              {t('quality_title')}
            </h3>
            <p className="text-gray-600 my-2  text-md  lg:text-lg">
              {t('quality_text')}
            </p>
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <Svg
              id={'icon-delivery'}
              stroke={'black'}
              fill={'black'}
              size={38}
            ></Svg>
          </div>
          <div id="pickup">
            <h3 className="text-lg md:text-xl font-bold text-gray-700">
              {t('delivery_title')}
            </h3>
            <p className="text-gray-600 my-2  text-md  lg:text-lg">
              {t('delivery_text')}
            </p>
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <Svg
              id={'icon-clock'}
              stroke={'black'}
              fill={'transparent'}
              size={38}
            ></Svg>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-700">
            {t('effectively_title')}
            </h3>
            <p className="text-gray-600 my-2  text-md  lg:text-lg">
            {t('effectively_text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
