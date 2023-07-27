import React from "react";
import './footer.scss'
import icons from "../../ultils/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const { FaFacebookF, TfiYoutube } = icons;
  return (
    <div className="w-full bg-main">
      <div className="content">
        <div className="introduction">
          <h3>Giới thiệu</h3>
          <p>
            ToyShop là cửa hàng đồ chơi có địa chỉ tại: 123 đường Cầu Diễn, Quận Bắc Từ Liêm, Hà Nội.
            Là cửa hàng chuyên cung cấp các sản phẩm cho trẻ em như: Đò chơi, đồ dùng học tập,...
          </p>
          <div className="social">
            <Link to={'https://www.facebook.com/'} className="facebook"><FaFacebookF/></Link>
            <Link to={'https://www.youtube.com/'} className="youtube"><TfiYoutube/></Link>
          </div>
        </div>
        <div className="policy">
          <h3>Chính sách</h3>
          <ul>
            <li>Tìm kiếm</li>
            <li>Giới thiệu</li>
            <li>Hỗ trợ khách hàng</li>
            <li>Chính sách mua hàng</li>
            <li>Chính sách thanh toán</li>
            <li>Chinh sách giao hàng</li>
            <li>Chính sách đổi trả</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Thông tin liên hệ</h3>
          <p>Số 123 Đ. Cầu Diễn, Minh Khai, Bắc Từ Liêm, Hà Nội</p>
          <p>097666888</p>
          <p>toyshop123@gmail.com</p>
        </div>
        <div className="fanpage">
          <h3>Địa chỉ</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4005.0144978240737!2d105.73240110032842!3d21.054967024254694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e1!3m2!1svi!2s!4v1690423990711!5m2!1svi!2s" width="300" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
};

export default Footer;
