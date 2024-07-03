import React, { useState } from 'react';
import { WorksCard } from './WorksCard';
import { Button } from '../Button/Button';

export const WorksList = ({ worksArr }) => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const handleHide = () => {
    setVisibleCount(2);
  };

  return (
    <>
      {worksArr && (
        <div className="w-full">
          <ul className="flex gap-8 flex-col justify-center">
            {worksArr.slice(0, visibleCount).map((el, index) => (
              <WorksCard
                key={index}
                img={el.img}
                title={el.title}
                description={el.description}
                text={el.text}
                buttonName={el.buttonName}
                link={el.link}
                reverseOrientation={index % 2 === 0}
              />
            ))}
          </ul>
              <div className="flex justify-center mt-6 lg:mt-8 gap-4">
              {visibleCount < worksArr.length && (
            <div onClick={handleLoadMore}>
              <Button bg={false} >
                Дивитися ще
              </Button>
            </div>
          )}
          {visibleCount > worksArr.length && visibleCount !== worksArr.length && visibleCount !== 2 && (
            <div onClick={handleHide}>
              <Button bg={false} >
                Cховати
              </Button>
            </div>
          )}
              </div>
        </div>
      )}
    </>
  );
};
