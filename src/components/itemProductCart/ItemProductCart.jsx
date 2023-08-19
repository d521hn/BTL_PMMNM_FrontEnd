import React, { memo, useState } from 'react'
import './itemProductCart.scss'
import icons from '../../ultils/icons'
import { useDispatch } from 'react-redux'
import { changeQuantity, deleteProduct } from '../../redux/actions/actions'
import { deleteProduct } from '../../redux/actions/actions'
import axios from 'axios'
import ProductCartApi from '../../services/ProducCartApi'

const ItemProductCart = ({info}) => {
  const { ImBin } = icons
  const dispatch = useDispatch()
  const handleDeleteClick = async() => {
    if (window.confirm("Bạn có chắc xóa sản phẩm không")) {
      dispatch(deleteProduct(info))
      try{
        await ProductCartApi.deleteProduct(3, info?.product.id);
      }
      catch{

      }
    }
  }

  const [quantity, setQuantity] = useState(info?.quantity)
  
  const handleAddQuantity = () => {
    setQuantity(prev => ++prev)
    dispatch(changeQuantity({...info, quantity: quantity + 1}))
  }

  const handleReduceQuantity = () => {
    setQuantity(prev => --prev)
    dispatch(changeQuantity({...info, quantity: quantity - 1}))
  }

  const handleChangeQuantity = () => {

  }

  return (
    <div className='item-product-cart'>
      <div className='img-product-cart'>
        <img src={info?.product.image} alt="" />  
      </div>  
      <p className='name-product-cart'>
        {info?.product.name}
      </p>

      <div className='quantity-product-cart'>
        <button onClick={handleReduceQuantity}>-</button>
        <input type="text" value={quantity} onChange={handleChangeQuantity}/>
        <button onClick={handleAddQuantity}>+</button>
      </div>
      <p className='price-product-cart'>{(info?.product.price).toLocaleString("vi-VN")} đ</p>
      <div className="total-delete">
        <p className='sum-price'>Thành tiền: <span>{ (info?.quantity * info?.product.price).toLocaleString("vi-VN") }</span></p>
        <ImBin className='btn-delete'onClick={handleDeleteClick}/>
      </div>
    </div>
  )
}

export default memo(ItemProductCart)