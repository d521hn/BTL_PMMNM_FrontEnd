import React from 'react'
import './blog.scss'
import { Breadcrumb, ItemBlog, ItemBlogNew, Pagination } from '../../../components'

const Blog = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  return (
    <div className='w-full'>
      <div className="box-breadcrumb">
        <Breadcrumb/>
      </div>
      <div className='content-custom'>
        <div className="blog-body">
          <div className="new-blogs">
            <h2 className="title-box-left">Bài viết mới nhất</h2>
            <div className="list-new-blog">
              <ItemBlogNew/>
              <ItemBlogNew/>
              <ItemBlogNew/>
            </div>
          </div>
          <div className="list-blog">
            <h2 className="title-box-right">Góc đồ chơi</h2>
            <div className="">
              <ItemBlog/>
              <ItemBlog/>
              <ItemBlog/>
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

export default Blog