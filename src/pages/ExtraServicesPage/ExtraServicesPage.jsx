import React from 'react'
import { Title } from '../../components/Title/Title'
import { useTranslation } from 'react-i18next';

const ExtraServicesPage = () => {

  const { t } = useTranslation();
  const { i18n } = useTranslation();

return (
  <div>
    <Title title={t('extra_services')} description={t('landscaping-description')}/>
<div className="h-screen">

</div>
</div>
)
}

export default ExtraServicesPage