import React, { memo, useState } from 'react'
import './itemProductCart.scss'
import icons from '../../ultils/icons'
import { useDispatch } from 'react-redux'
import { changeQuantity, deleteProduct } from '../../redux/actions/actions'

const ItemProductCart = ({info}) => {
  const { ImBin } = icons
  const dispatch = useDispatch()
  const handleDeleteClick = () => {
    if (window.confirm("Bạn có chắc xóa sản phẩm không")) {
      dispatch(deleteProduct(info))
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
        <img src={info?.image} alt="" />  
      </div>  
      <p className='name-product-cart'>
        {info?.name}
      </p>

      <div className='quantity-product-cart'>
        <button onClick={handleReduceQuantity}>-</button>
        <input type="text" value={quantity} onChange={handleChangeQuantity}/>
        <button onClick={handleAddQuantity}>+</button>
      </div>
      <p className='price-product-cart'>{info?.price}</p>
      <div className="total-delete">
        <p className='sum-price'>Thành tiền: <span>{ info?.quantity * info?.price }</span></p>
        <ImBin className='btn-delete'onClick={handleDeleteClick}/>
      </div>
    </div>
  )
}

export default memo(ItemProductCart)