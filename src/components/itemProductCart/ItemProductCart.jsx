import React, { memo, useEffect, useState } from "react";
import "./itemProductCart.scss";
import icons from "../../ultils/icons";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteProduct } from "../../redux/actions/actions";

const ItemProductCart = ({ info }) => {
  const { ImBin } = icons;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(info.quantity);
  const [sumPrice, setSumPrice] = useState(info?.quantity * info?.price)
  

  const handleDeleteClick = async () => {
    if (window.confirm("Bạn có chắc xóa sản phẩm không")) {
      dispatch(deleteProduct(info));
    }
  };

  const handleAddQuantity = async () => {
    setQuantity((prev) => ++prev);
  };

  const handleReduceQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => --prev);
    }
  };

  useEffect(() => {
    dispatch(changeQuantity({ ...info, quantity: quantity }));
    setSumPrice(info?.quantity * info?.price)
  }, [quantity]);

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value)
  };

  return (
    <div className="item-product-cart">
      <div className="img-product-cart">
        <img src={info.image} alt="" />
      </div>
      <p className="name-product-cart">{info.name}</p>

      <div className="quantity-product-cart">
        <button onClick={handleReduceQuantity}>-</button>
        <input type="text" value={quantity} onChange={handleChangeQuantity} />
        <button onClick={handleAddQuantity}>+</button>
      </div>
      <p className="price-product-cart">
        {Number(info?.price).toLocaleString("vi-VN")} đ
      </p>
      <div className="total-delete">
        <p className="sum-price">
          Thành tiền:{" "}
          <span>
            {(sumPrice).toLocaleString("vi-VN")} đ
          </span>
        </p>
        <ImBin className="btn-delete" onClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default memo(ItemProductCart);
