import React from 'react'
import { Breadcrumb, SortBrand, SortOld, SortPrice, Product, Pagination } from '../../../components'
import './productGroup.scss'

const ProductGroup = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
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
          <div className="container-products">
            <div className="box-products">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
            <div className='content-custom box-pagination'>
              <Pagination itemsPerPage={4} items={items}/>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default ProductGroup