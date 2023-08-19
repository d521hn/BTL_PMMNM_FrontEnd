import React, { memo, useEffect, useState } from "react";
import "./detailProduct.scss";
import { Breadcrumb } from "../../../components";
import { useParams } from "react-router-dom";
import { apiGetProduct } from "../../../apis";
import {
  formatPrice,
  numberWithCommas,
  countPrice,
} from "../../../ultils/helpers";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { buyProduct } from "../../../redux/actions/actions";

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  let pid = useParams();
  const fetchProduct = async (id) => {
    const response = await apiGetProduct(id);
    if (response.status === 200) setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct(pid.id);
  }, [pid]);

  const priceNew = countPrice(
    product?.promotion?.value,
    Number(product?.price)
  );

  const [content, setContent] = useState(null);
  const [active, setActive] = useState(1);

  const handleViewExtend = (value) => {
    if (value == 1) {
      setContent(product?.describe);
      setActive(1);
    } else if (value == 2) {
      setContent(product?.info);
      setActive(2);
    } else {
      setContent(product?.guide);
      setActive(3);
    }
  };

  const handleChangeQuantity = (flag) => {
    if (flag === "minus" && quantity === 1) return;
    if (flag === "minus") setQuantity((prev) => +prev - 1);
    if (flag === "plus") setQuantity((prev) => +prev + 1);
  };

  const enterInput = (number) => {
    if (!Number(number) || Number(number) < 0) {
      return;
    } else {
      setQuantity(number);
    }
  };

  const dispatch = useDispatch()

  const handleByNow = () => {
    dispatch(buyProduct({...product, quantity: quantity}));
  }

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    alert("Đã thêm sản phẩm vào giỏ hàng");
    dispatch(buyProduct({...product, quantity: quantity}));
  };

  return (
    <div className="w-full">
      <div className="box-breadcrumb">
        <Breadcrumb title={product?.name} />
      </div>
      <div className="content-custom">
        <div className="box-detail-product">
          <div className="box-img">
            <div className="img-thumb">
              <img src={product?.image} alt="Ảnh sản phẩm" />
            </div>
          </div>
          <div className="box-detail">
            <h3 className="detail-product-name">{product?.name}</h3>

            <div className="detail-product-price">
              <span className="pro-sale">-{product?.promotion?.value}%</span>
              <span className="pro-price">
                {numberWithCommas(formatPrice(priceNew))}VNĐ
              </span>
              <del className="pro-price-old">
                {numberWithCommas(formatPrice(Number(product?.price)))}
                VNĐ
              </del>
            </div>

            <div className="quantity-product">
              <input
                type="button"
                className="btn-detail-product"
                value="-"
                onClick={() => handleChangeQuantity("minus")}
              />
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={quantity}
                className="quantity-selector"
                onChange={(e) => enterInput(e.target.value)}
              />
              <input
                type="button"
                className="btn-detail-product"
                value="+"
                onClick={() => handleChangeQuantity("plus")}
              />
            </div>

            <div className="addcart-buynow">
              <button className="add-to-cart" onClick={handleAddButtonClick}>Thêm vào giỏ</button>
              <Link to={"/cart"} className="buy-now" onClick={handleByNow}>
                Mua ngay
              </Link>
            </div>

            <div className="product-description">
              <ul className="tabs-clearfix">
                <li
                  className={active == 1 ? "active" : ""}
                  onClick={() => handleViewExtend(1)}
                >
                  Mô tả
                </li>
                <li
                  className={active == 2 ? "active" : ""}
                  onClick={() => handleViewExtend(2)}
                >
                  Thông tin
                </li>
                <li
                  className={active == 3 ? "active" : ""}
                  onClick={() => handleViewExtend(3)}
                >
                  Hướng dẫn chơi
                </li>
              </ul>
              <p className="content-description">
                {content ? content : product?.describe}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailProduct);
