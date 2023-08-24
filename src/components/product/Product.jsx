import React, { memo, useState } from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import { formatPrice, numberWithCommas } from "../../ultils/helpers";
import { useDispatch } from "react-redux";
import { buyProduct } from "../../redux/actions/actions";
import axios from "axios";

const Product = ({ infoProduct }) => {
  const [isShow, setIsShow] = useState(null);
  let newOrSale;

  if (infoProduct?.promotion) {
    newOrSale = "sale";
  } else {
    newOrSale = "new";
  }

  const dispatch = useDispatch();

  const handleAddButtonClick = async (e) => {
    e.preventDefault();
    alert("Đã thêm sản phẩm vào giỏ hàng");
    dispatch(buyProduct({...infoProduct, quantity: 1}));
  };

  const handleBuyNowClick = () => {
    dispatch(buyProduct({...infoProduct, quantity: 1}));
  };

  return (
    <Link
      to={`/products/${infoProduct?.id}`}
      className="product"
      onMouseEnter={(e) => {
        e.stopPropagation();
        setIsShow(true);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setIsShow(false);
      }}
    >
      <div className="box-img">
        <img
          className="img-product"
          src={infoProduct?.image}
          alt="Ảnh sản phẩm"
        />
        {isShow && (
          <div className="product-action">
            <Link to={'/cart'} className="add-product" onClick={handleBuyNowClick}>
              Mua ngay
            </Link>
            <p className="add-cart" onClick={handleAddButtonClick}>
              Thêm vào giỏ
            </p>
          </div>
        )}
      </div>
      <div className="product-detail">
        <p className="product-vendor">{infoProduct?.brand?.name}</p>
        <p className="product-name">{infoProduct?.name}</p>
        <div className="box-price">
          {newOrSale && (
            <>
              <p
                className={`${
                  newOrSale === "new" ? "stick-new" : "stick-sale"
                }`}
              >
                {newOrSale === "new" ? "New" : "Sale"}
              </p>
              <p
                className={`product-price ${
                  newOrSale === "new" ? "new" : "sale"
                }`}
              >
                {numberWithCommas(formatPrice(Number(infoProduct?.price)))} VNĐ
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default memo(Product);
