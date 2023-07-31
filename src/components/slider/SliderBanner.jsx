import React from 'react'
import Slider from 'react-slick'
import { banners } from '../../ultils/containts';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SliderBanner = () => {
  return (
    <>
      {banners && (
        <Slider className='custom-slider' {...settings}>
          {banners?.map((el) => (
            <img key={el.id} src={el.srcImg} alt="" />
          ))}
        </Slider>
      )}
    </>
  )
}

export default SliderBanner