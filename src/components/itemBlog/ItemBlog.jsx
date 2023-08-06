import React from 'react'
import './itemBlog.scss'
import { Link } from 'react-router-dom'


const ItemBlog = () => {
  return (
    <Link to='/' className='item-blog'>
      <img src="https://file.hstatic.net/1000117512/article/z4478570310226_0b817ae4977912e57a83d52192b555fe_4f2f52b185ad4e4a9ba2f44c60601adb_large.jpg" alt="" />
      <div className='summary-blog'>
        <p className="title-blog">
        LEADERBOARD - BẢNG ĐIỂM THÀNH TÍCH THI ĐẤU CHƠI SÁNG TẠO - HỌC ĐỈNH CAO HÈ 2023
        </p>
        <p className="author">
          <p className="box-author">Người viết: <span className='name-author'>Khanh Trang</span></p>
          <span className='post-date-new'>06.08.2023</span>
        </p>
        <p className="summary-content">
          Bé tham gia thử thách Chơi Sáng Tạo - Học Đỉnh Cao tại Funnyland sẽ được tích điểm thưởng sau khi hoàn thành thử thách.  DANH...
        </p>
      </div>
    </Link>
  )
}

export default ItemBlog