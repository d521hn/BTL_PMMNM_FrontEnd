import React from "react";
import './header.scss'
import { Link } from "react-router-dom";
import path from "../../ultils/path";
import icons from "../../ultils/icons";

const Header = () => {
    const { AiOutlineSearch, FaFacebookF, TfiYoutube, FaUserCircle, BsFillCartFill } = icons;
    return (
      <div className="w-full">
        <div className="content">
          <Link to={path.HOME}>
            <img
              src="https://theme.hstatic.net/1000117512/1000772323/14/logo.png?v=953"
              alt=""
              className="logo-page"
            />
          </Link>
          <div className="header-search">
            <input type="text" placeholder="Bạn đang tìm đồ chơi gì?" />
            <AiOutlineSearch  className="icon-search"/>
          </div>
          <div className="social">
            <Link to={'https://www.facebook.com/'} className="facebook"><FaFacebookF/></Link>
            <Link to={'https://www.youtube.com/'} className="youtube"><TfiYoutube/></Link>
          </div>
          <div className="info-cart">
            <div className="user">
              <FaUserCircle/>
            </div>
            <BsFillCartFill/><span>(0)</span>
          </div>
        </div>
      </div>
    );
};

export default Header;
