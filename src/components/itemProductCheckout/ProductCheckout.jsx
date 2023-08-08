import React from 'react'
import './productCheckout.scss'

const ProductCheckout = () => {
    return (
        <div className="product-checkout d-flex align-items-center">
            <div className="product-img">
                <div className="product-thumnail">
                    <img src="https://product.hstatic.net/1000117512/product/b6c5dc439ea7ba6a9eb8b7d14d7414c4.jpg_720x720q80_a936ebba781244b0a294f362d1a8ee9e_small.jpg" alt="" className='rounded mx-auto d-block' />
                </div>

                <div className="product-quantity d-flex align-items-center justify-content-center">
                    <span>1</span>
                </div>
            </div>
            <div className="product-name">
                <span>Xe mô hình Tomica 10 Lotus Exige R-GT 1:64</span>
            </div>
            <div className="product-price">
                <span>44,000₫</span>
            </div>
        </div>
    )
}

export default ProductCheckout;