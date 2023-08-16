import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import path from "../../ultils/path";
import icons from "../../ultils/icons";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const {
    AiOutlineSearch,
    FaFacebookF,
    TfiYoutube,
    FaUserCircle,
    BsFillCartFill,
  } = icons;
  return (
    <div className="w-full">
      <div className="content-custom header">
        <Link to={path.HOME}>
          <img src={logo} alt="" className="logo-page" />
        </Link>
        <div className="header-search">
          <input type="text" placeholder="Bạn đang tìm đồ chơi gì?" />
          <Link to={path.COLLECTIONS}>
            <AiOutlineSearch className="icon-search" />
          </Link>
        </div>
        <div className="social">
          <Link to={"https://www.facebook.com/"} className="facebook">
            <FaFacebookF />
          </Link>
          <Link to={"https://www.youtube.com/"} className="youtube">
            <TfiYoutube />
          </Link>
        </div>
        <div className="info-cart">
          <Link to="/login" className="user">
            <FaUserCircle />
          </Link>
          <Link to={path.CART} className="cart">
            <BsFillCartFill />
            <span className="count-products">(0)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
