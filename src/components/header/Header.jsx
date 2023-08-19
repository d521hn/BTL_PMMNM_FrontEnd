import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import path from "../../ultils/path";
import icons from "../../ultils/icons";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { cartArrSellector } from "../../redux/selectors";
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
  const location = useLocation();
  const navigate = useNavigate();

  const handleInputSearch = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    setUserName2(username);
  }, []);

  const handleClickUser = () => {
    setUserName2("");
    sessionStorage.clear();
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`search-result/${input}`);
    setInput("");
  };

  const [countProducts, setCountProducts] = useState(0);

  const productsCart = useSelector(cartArrSellector);
  useEffect(() => {
    setCountProducts(productsCart.length)
  }, [productsCart]);

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
            onKeyDown={handleKeyDown}
          />
          <AiOutlineSearch className="icon-search" onClick={handleSearch} />
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
        <div className="info-cart">
          <Link to="/login" className="user" onClick={handleClickUser}>
            <FaUserCircle />
          </Link>
          <Link to={path.CART} className="cart">
            <BsFillCartFill />
            <span className="count-products">({countProducts})</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
