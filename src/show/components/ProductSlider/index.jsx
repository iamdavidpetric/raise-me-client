import './style.scss';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';

const ProductSlider = props => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className='product-images-slider'>
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt='product images' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'>
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='product-images-slider-thumbs-wrapper'>
              <img src={item} alt='product images' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

ProductSlider.propTypes = {
  images: PropTypes.array.isRequired
};

export default ProductSlider;
