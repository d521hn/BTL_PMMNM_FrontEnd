import React, { memo, useState } from 'react'
import './itemProductCart.scss'
import icons from '../../ultils/icons'

const ItemProductCart = ({info}) => {
  const { ImBin } = icons
  const [sumPrice, setSumPrice] = useState(100000000)
  return (
    <div className='item-product-cart'>
      <div className='img-product-cart'>
        <img src={info?.image} alt="" />  
      </div>  
      <p className='name-product-cart'>
        {info?.name}
      </p>

      <div className='quantity-product-cart'>
        <button>-</button>
        <input type="text" value={info?.quantity}/>
        <button>+</button>
      </div>
      <p className='price-product-cart'>{info?.price}</p>
      <div className="total-delete">
        <p className='sum-price'>Thành tiền: <span>{ info?.quantity * info?.price }</span></p>
        <ImBin className='btn-delete'/>
      </div>
    </div>
  )
}

export default memo(ItemProductCart)