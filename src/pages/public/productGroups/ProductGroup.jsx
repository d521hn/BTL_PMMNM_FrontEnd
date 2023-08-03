import React from 'react'
import { Breadcrumb, SortBrand, SortOld, SortPrice, Product } from '../../../components'
import './productGroup.scss'

const ProductGroup = () => {
  return (
    <div className='w-full'>
      <div className="box-breadcrumb">
        <Breadcrumb/>
      </div>
      <div className="content-custom">
        <div className="collection-body">
          <div className="box-filter">
            <SortOld />
            <SortBrand />
            <SortPrice />
          </div>
          <div className="box-products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGroup