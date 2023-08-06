import React from 'react'
import './itemBlogNew.scss'
import { Link } from 'react-router-dom'
import path from '../../ultils/path'

const ItemBlogNew = () => {
  return (
    <Link to='/' className='item-blog-new'>
      <img src="https://file.hstatic.net/1000117512/article/900x900_post_facebook_summer_warehouse_sale-01_eab2b0e5e0224144be4d2859fba749c2_medium.jpg" alt="" />
      <div className='title-author'>
        <p className="title-blog-new">
        Summer Warehouse Sale - Ưu Đãi Mùa Hè Lớn Nhất Năm Lên Đến 80%
        </p>
        <p className="author">
          <span className="name-author">Khanh Trang</span>
          <span className='post-date-new'>06.08.2023</span>
        </p>
      </div>
    </Link>
  )
}

export default ItemBlogNew