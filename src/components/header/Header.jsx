import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import path from "../../ultils/path";
import icons from "../../ultils/icons";
import logo from "../../assets/images/logo.png";
const {
  AiOutlineSearch,
  FaFacebookF,
  TfiYoutube,
  FaUserCircle,
  BsFillCartFill,
} = icons;

const Header = () => {
  const [input, setInput] = useState("");
  const [username2, setUserName2] = useState("");

  const handleInputSearch = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    setUserName2(username);
  }, []);

  const handleClickUser = () => {
    setUserName2("");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("emailUser");

  };

  const navigate = useNavigate()
  const handleSearch = () => {
    navigate(`search-result/${input}`)
    setInput("")
  }

  return (
    <div className="w-full">
      <div className="content-custom header">
        <Link to={path.HOME}>
          <img src={logo} alt="" className="logo-page" />
        </Link>
        <div className="header-search">
          <input
            type="text"
            placeholder="Bạn đang tìm đồ chơi gì?"
            onChange={handleInputSearch}
            value={input}
          />
          <AiOutlineSearch className="icon-search" onClick={handleSearch}/>
        </div>
        <div className="social">
          <Link to={"https://www.facebook.com/"} className="facebook">
            <FaFacebookF />
          </Link>
          <Link to={"https://www.youtube.com/"} className="youtube">
            <TfiYoutube />
          </Link>
        </div>
        {username2}
        <div className="info-cart" onClick={handleClickUser}>
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
