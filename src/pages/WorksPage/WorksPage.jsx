import React, { useEffect, useState } from 'react'
import { Title } from '../../components/Title/Title'
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';
import { useTranslation } from 'react-i18next';
import { PhotoProvider, PhotoView } from 'react-image-previewer';
import { Button } from '../../components/Button/Button';
import { getGallery, getIsLoading } from '../../Redux/gallery/gallerySelectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGallery } from '../../Redux/gallery/galleryOperation';
import { cutText } from '../../helpers/cutText'
import { CloseButton,  DragToolbar,  SlideArrowLeft, SlideArrowRight, SlideCountText, SlideDownload  } from 'react-image-previewer/ui'

 const WorksPage = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(12);
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  const isLoading = useSelector(getIsLoading)
const dispatch = useDispatch()

useEffect(() => {
dispatch(fetchGallery())
}, [dispatch])


  // const photos = ['https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid', 'https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid', 'https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid', 'https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid','https://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybridhttps://img.freepik.com/free-photo/view-of-gravestone-with-flowers_23-2149431247.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid',]
  const photos = useSelector(getGallery)

  return (
    <Section>
      <Container>
      <Title title={t('photogallery')}/>
      {!isLoading ? (<div>
      <div>
        {photos && photos.length > 0 ? (<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center">
        <PhotoProvider cale={0.5} maskOpacity={0.9}    overlayRender={props => {
     return (
       <>
         <DragToolbar {...props} />
         <CloseButton onClick={props. onClose} />
       </>
     )
   }}>

        {photos.slice(0, visibleCount).map((el) => 
            <PhotoView key={el._id} src={el.mainPhoto} >
              <div className="w-full  overflow-hidden relative shadow-md rounded-lg">
                            <img
                src={el.mainPhoto}
                alt={`image-${el.title}`}
                className="w-full  h-[240px]  lg:h-[400px] cursor-pointer  object-cover blur-xl brightness-125"
              />
              <img
                src={el.mainPhoto}
                alt={`bg-${el.title}`}
                className="w-full h-full cursor-pointer  object-scale-down	 absolute	top-0 right-0 "
              />

                            </div>

            </PhotoView>
        )}
             </PhotoProvider>
</div>) : (
              <div className="w-full flex justify-center items-center mt-8 font-manrope text-gray-700">
                {t('not_found')}
              </div>
            )}
      </div>
      <div className="flex justify-center mt-6 lg:mt-8 gap-4">
      {photos &&
            photos.length > visibleCount && (
              <div onClick={handleLoadMore}>
                <Button bg={false}>{t('see_more')}</Button>
              </div>
            )}
        </div>
      </div>) : (          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-12 lg:px-12 items-start">
            <div className="bg-slate-200 h-[320px] w-full rounded-md animate-pulse"></div>
            <div className="bg-slate-200 h-[320px] w-full rounded-md animate-pulse"></div>
            <div className="bg-slate-200 h-[320px] w-full rounded-md animate-pulse"></div>
            <div className="bg-slate-200 h-[320px] w-full rounded-md animate-pulse"></div>
            <div className="bg-slate-200 h-[320px] w-full rounded-md animate-pulse"></div>

            <div className="bg-slate-200 h-[320px] w-full rounded-md animate-pulse"></div>

          </div>)}
      </Container>
    </Section>
  )
}
export default WorksPage;
