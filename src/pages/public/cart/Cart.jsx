import React from "react";
import "./cart.scss";
import { Breadcrumb, ItemProductCart } from "../../../components";
import { Link } from "react-router-dom";
import icons from "../../../ultils/icons";
import path from "../../../ultils/path";
import { useSelector } from "react-redux";
import { cartArrSellector } from "../../../redux/selectors";

const Cart = () => {
  const { BsArrowRight } = icons;
  const productsCart = useSelector(cartArrSellector);
  
  let sumPrice = 0;
  productsCart.map(item => sumPrice += item.price * item.quantity)

  return (
    <div className="w-full">
      <div className="box-breadcrumb">
        <Breadcrumb />
      </div>
      <div className="content-custom">
        <div className="cart-body">
          <div className="cart-products">
            <h2 className="title-cart">Giỏ hàng của bạn</h2>
            <div className="list-product-cart">
              <p className="text-title">
                Bạn đang có <span>{productsCart.length}</span> sản phẩm trong
                giỏ hàng
              </p>
              {productsCart.map((item) => (
                <ItemProductCart key={item.id} info={item} />
              ))}
            </div>
          </div>
          <div className="info-cart">
            <Link className="comback-home" to={path.HOME}>
              Tiếp tục mua hàng{" "}
              <span>
                <BsArrowRight />
              </span>
            </Link>
            <div className="info-order">
              <p className="title-info-order">Thông tin đơn hàng</p>
              <div className="box-total-price">
                <p className="text-price">Tổng tiền:</p>
                <p className="total-price">
                  {(sumPrice).toLocaleString("vi-VN")} đ
                </p>
              </div>
              <Link to="/checkout">
                <button className="btn-pay">Thanh toán</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
