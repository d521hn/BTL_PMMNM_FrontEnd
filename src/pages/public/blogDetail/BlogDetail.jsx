import React from 'react'
import './blogDetail.scss'
import { Breadcrumb, ItemBlogNew } from '../../../components'
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
                            <>
                                <p style={{ marginLeft: 0 }}>
                                    <i>
                                        <strong>
                                            Challenge 1 - Thử thách biến hình Quả Cầu 3D -&gt; Mặt Trăng 3D trong 45
                                            giây
                                        </strong>
                                    </i>
                                </p>
                                <p style={{ marginLeft: 0 }}>
                                    Chương trình thi đấu CHƠI SÁNG TẠO - HỌC ĐỈNH CAO cùng Magformers
                                    tuần&nbsp;này mang đến cho bé cơ hội thử thách sự nhanh nhẹn của đôi bàn tay
                                    khi biến hình <strong>Quả Cầu 3D</strong> trong tích tắc trở thành{" "}
                                    <strong>Mặt Trăng 3D</strong>&nbsp;với các mảnh ghép nam châm Magformers
                                    hình vuông&nbsp;và tam giác&nbsp;
                                </p>
                                <p style={{ marginLeft: 0 }}>
                                    <img
                                        className="image_resized"
                                        style={{ width: "auto" }}
                                        src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb5/2/16/23f0.png"
                                        alt="⏰"
                                    />{" "}
                                    Thời gian thi đấu: 5 - 11.8.2023
                                </p>
                                <p style={{ marginLeft: 0 }}>
                                    (*) Điều kiện: Áp dụng cho các bé thi đấu trực tiếp tại cửa hàng ToyShop
                                </p>
                                <p style={{ marginLeft: 0 }}>
                                    Tham gia thử thách&nbsp;Chơi Sáng Tạo - Học Đỉnh Cao tại ToyShop sẽ được
                                    tích điểm thưởng sau khi hoàn thành thử thách, cùng kiểm tra thành tích của
                                    mình tại đây nha&nbsp;
                                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2FFunnyLandLeaderboard%3Ffbclid%3DIwAR0O_qlMhwfNZhEylNI6JdGBT8j9fT5N9lSgb5KQvgzL6qgoaQ_9mTyP5Fo&h=AT3Tre-0EVbY-zfjKs4tX_rw-VnUe_5x_9h92FKBEHp4B6Ngh7sCNjq8EKtK1EL8smjUZChe6UAcpjJQHTxOkxZ6GtG7k1z7Gqyk_RtuBl6rqVdrnGYUlUKLSJm6kALNYNpjIbE&__tn__=-UK-R&c[0]=AT1CagWP_NVVGe3chPGtqx1isMa2NRSeCRi8TSpw-tW3cxwslNgsp9RU7CzEyPvzgbeqDh4THR4MjyqrFk641jetPglqsP-e2aBIpfHs-WpnzMtsyfU4Ng49HPODmPdokLcMccsYKFnii6z76oOx2D8rkoZtxz6Ylx8dkCN20uDNw--_ow">
                                        https://bit.ly/ToyShopLeaderboard
                                    </a>
                                </p>
                                <p style={{ marginLeft: 0 }}>
                                    Cùng ToyShop điểm lại một số hình ảnh của chương trình tại các cửa hàng
                                    ToyShop vào cuối tuần rồi nhé
                                </p>
                            </>



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