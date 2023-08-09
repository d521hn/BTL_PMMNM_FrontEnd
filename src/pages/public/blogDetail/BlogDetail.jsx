import React from 'react'
import './blogDetail.scss'
import { Breadcrumb, ItemBlogNew } from '../../../components'
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BlogDetail = () => {
    const currentId = useParams();
    const nextId = parseInt(currentId.id) + 1;
    const preId = parseInt(currentId.id) - 1;

    return (
        <div className='w-full'>
            <div className="box-breadcrumb">
                <Breadcrumb />
            </div>
            <div className='content-custom'>
                <div className="blog-body">
                    <div className="new-blogs">
                        <h2 className="title-box-left">Bài viết mới nhất</h2>
                        <div className="list-new-blog">
                            <ItemBlogNew />
                            <ItemBlogNew />
                            <ItemBlogNew />
                        </div>
                    </div>
                    <div className="blog-detail">
                        <h2 className="title-blog">[Chơi Sáng Tạo - Học Đỉnh Cao] Thử thách Biến Hình 3D cùng Magformers</h2>
                        <div className="blog-info">
                            <span>Người viết: </span>
                            <span>Khánh Trần</span>
                            <span> lúc </span>
                            <span>07.08.2023</span>
                        </div>
                        <div className="blog-content">
                            <p>Nội dung</p>
                        </div>
                        <div className="nav-blog d-flex justify-content-between">
                        <div className="pre-blog d-flex align-items-center">
                                <Link to={`/blog/${preId}`} className='custom-link'>
                                    <FontAwesomeIcon icon={faArrowLeft} className='custom-icon' />
                                    <span>Bài trước</span>
                                </Link>
                            </div>
                            <div className="next-blog d-flex align-items-center">
                                <Link to={`/blog/${nextId}`} className='custom-link'>
                                    <span>Bài sau</span>
                                    <FontAwesomeIcon icon={faArrowRight} className='custom-icon' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail