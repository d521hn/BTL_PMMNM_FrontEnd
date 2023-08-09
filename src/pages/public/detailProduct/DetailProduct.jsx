import React, { useState } from 'react'
import './detailProduct.scss'
import { Breadcrumb, SliderProduct } from '../../../components'

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="w-full">
      <div className="box-breadcrumb">
        <Breadcrumb />
      </div>
      <div className="content-custom">
        <div className="box-detail-product">
          <div className="box-img">
            <div className="img-thumb">
              <img src="https://product.hstatic.net/1000117512/product/cong_vien_trong_choi_mao_hiem_-_2_b97e59f3aabc48b98799448581dd629e_master.png" alt="" />
            </div>
            <SliderProduct />
          </div>
          <div className="box-detail">
            <h3 className="detail-product-name">Bộ Công Viên Trò Chơi Mạo Hiểm Mở Rộng 48 Mảnh</h3>

            <div className="detail-product-price">
              <span className="pro-sale">-10%</span>
              <span className="pro-price">1.790.000đ</span>
              <del className="pro-price-old">1.990.000đ</del>
            </div>

            <div className="quantity-product">
              <input type="button" className="btn-detail-product" value="-" />
              <input type="text" value={quantity} className="quantity-selector" />
              <input type="button" className="btn-detail-product" value="+" />
            </div>

            <div className="addcart-buynow">
              <button className="add-to-cart">Thêm vào giỏ</button>
              <button className="buy-now">Mua ngay</button>
            </div>

            <div className="product-description">
              <ul className="tabs-clearfix">
                <li className="active">Mô tả</li>
                <li>Thông tin</li>
                <li>Hướng dẫn chơi</li>
              </ul>
              <p className="content-description">
                Magformers là dòng đồ chơi xếp hình nam châm thông minh hàng đầu thế giới đến từ Hàn Quốc.
                Những bộ Magformers có thể giúp bé phát triển tư duy hình học 2D - 3D.
                Toàn bộ Magformers được làm từ nhựa cao cấp và nam châm neodymium cho lực hút mạnh gấp 10 lần nam châm thường.
                Funnyland là nhà phân phối Magformers chính hãng tại Việt Nam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct