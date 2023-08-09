import React from 'react'
import Slider from 'react-slick'
import { listImageProduct } from '../../ultils/containts';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};

const SliderProduct = () => {
  return (
    <>
      {listImageProduct && (
        <Slider className='custom-slider custom-slider-product' {...settings}>
          {listImageProduct?.map((el) => (
            <img className="img-small-product" key={el.id} src={el.srcImg} alt="" />
          ))}
        </Slider>
      )}
    </>
  )
}

export default SliderProduct