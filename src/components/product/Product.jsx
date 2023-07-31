import React, { useState } from 'react'
import './product.scss'
import { Link } from 'react-router-dom'

const Product = () => {
  const [isShow, setIsShow] = useState(false)
  const newOrSale = 'new'
  return (
    <Link 
      to={'/'} 
      className='product'
      onMouseEnter={(e) => {
        e.stopPropagation();
        setIsShow(true);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setIsShow(false);
      }}
    >
      <img className='img-product' src="https://vn-test-11.slatic.net/p/62c5feca63c68dc242e685d32d14850a.jpg" alt="" />
      {isShow && (
        <div className='product-action'>
          <p className='add-product'>Mua ngay</p>
          <p className='add-cart'>Thêm vào giỏ</p>
        </div>
      )}
      <div className='product-detail'>
        <p className='product-vendor'>Globber</p>
        <p className='product-name'>Xe trượt scooter 3 bánh gấp gọn có bánh xe phát sáng GLOBBER PRIMO cho trẻ em từ độ tuổi dưới 2 năm tuổi nên sử dụng</p>
        <div className='box-price'>
          { newOrSale && (
            <>
              <p className={`${newOrSale === 'new' ? 'stick-new' : 'stick-sale'}`}>{newOrSale === 'new' ? 'New' : 'Sale'}</p>
              <p className={`product-price ${newOrSale === 'new' ? 'new' : 'sale'}`}>2,888,777đ</p>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default Product