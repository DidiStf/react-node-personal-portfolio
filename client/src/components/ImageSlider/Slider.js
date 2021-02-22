import classnames from 'classnames';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import RatioContainer from '../RatioContainer/RatioContainer';

import './Slider.scss';

const ImageSlider = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const { images, isMobileApp, name } = project;

  const handleClickPreviousSlide = () => {
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const handleClickNextSlide = () => {
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    images.length && (
      <div className='ImageSlider'>
        {images.length > 1 && (
          <>
            <FontAwesomeIcon
              className='ImageSlider_arrow left'
              icon={faChevronCircleLeft}
              onClick={handleClickPreviousSlide}
              size='2x'
            />
            <FontAwesomeIcon
              className='ImageSlider_arrow right'
              icon={faChevronCircleRight}
              onClick={handleClickNextSlide}
              size='2x'
            />
          </>
        )}
        {isMobileApp ? (
          <RatioContainer>
            {images.map((image, i) => (
              <div
                className={classnames(
                  'ImageSlider_slide',
                  i === current && 'active'
                )}
                key={i}
              >
                {i === current && (
                  <img
                    className={classnames(
                      'ImageSlider_image',
                      isMobileApp && 'mobile'
                    )}
                    src={image}
                    alt={`${name} screenshot`}
                  />
                )}
              </div>
            ))}
          </RatioContainer>
        ) : (
          images.map((image, i) => (
            <div
              className={classnames(
                'ImageSlider_slide',
                i === current && 'active'
              )}
              key={i}
            >
              {i === current && (
                <img
                  className={classnames(
                    'ImageSlider_image',
                    isMobileApp && 'mobile'
                  )}
                  src={image}
                  alt={`${name} screenshot`}
                />
              )}
            </div>
          ))
        )}
      </div>
    )
  );
};

export default ImageSlider;
