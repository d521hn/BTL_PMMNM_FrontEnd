import React, { useState } from 'react'
import './itemProductCart.scss'
import icons from '../../ultils/icons'

const ItemProductCart = () => {
  const { ImBin } = icons
  const [sumPrice, setSumPrice] = useState(100000000)
  return (
    <div className='item-product-cart'>
      <div className='img-product-cart'>
        <img src="https://product.hstatic.net/1000117512/product/globber_elite_prime_xanh_0d5768d57982442eaa1b8e2ac3bf3deb_master.png" alt="" />  
      </div>  
      <p className='name-product-cart'>
        Xe trượt scooter 3 bánh gấp gọn có bánh xe và mặt trước phát sáng GLOBBER ELITE PRIME 
        cho trẻ em từ 3 đến 9 tuổi (Xanh dương/Hồng)
      </p>

      <div className='quantity-product-cart'>
        <button>-</button>
        <input type="text" value={4}/>
        <button>+</button>
      </div>
      <p className='price-product-cart'>2,880,000đ</p>
      <div className="total-delete">
        <p className='sum-price'>Thành tiền: <span>{ sumPrice }</span></p>
        <ImBin className='btn-delete'/>
      </div>
    </div>
  )
}

export default ItemProductCart