import React from 'react'
import './productCheckout.scss'

const ProductCheckout = ({ info }) => {
    return (
        <div className="product-checkout d-flex align-items-center justify-content-between">
            <div className="product-leff d-flex align-items-center justify-content-between">
                <div className="product-img">
                    <div className="product-thumnail">
                        <img src={info?.product.image} alt="" className='rounded mx-auto d-block' />
                    </div>

                    <div className="product-quantity d-flex align-items-center justify-content-center">
                        <span>{info?.quantity}</span>
                    </div>
                </div>
                <div className="product-name">
                    <span>{info?.product.name}</span>
                </div>
            </div>

            <div className="product-price">
                <span>{(info?.product.price).toLocaleString("vi-VN")} đ</span>
            </div>
        </div>
    )
}

export default ProductCheckout;