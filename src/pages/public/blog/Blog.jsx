import React from 'react'
import './blog.scss'
import { Breadcrumb, ItemBlog, ItemBlogNew } from '../../../components'

const Blog = () => {
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog