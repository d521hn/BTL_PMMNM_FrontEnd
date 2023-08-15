import React, { memo, useEffect, useState } from "react";
import "./detailProduct.scss";
import { Breadcrumb, SliderProduct } from "../../../components";
import { useParams } from "react-router-dom";
import { apiGetProduct } from "../../../apis";
import { formatPrice, numberWithCommas, countPrice } from "../../../ultils/helpers";

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

    const priceNew = countPrice(product?.promotion?.value,Number(product?.price))

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
                            <span className="pro-sale">
                                -{product?.promotion?.value}%
                            </span>
                            <span className="pro-price">{numberWithCommas(formatPrice(priceNew))}VNĐ</span>
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
                            />
                            <input
                                type="text"
                                value={quantity}
                                className="quantity-selector"
                            />
                            <input
                                type="button"
                                className="btn-detail-product"
                                value="+"
                            />
                        </div>

                        <div className="addcart-buynow">
                            <button className="add-to-cart">
                                Thêm vào giỏ
                            </button>
                            <button className="buy-now">Mua ngay</button>
                        </div>

                        <div className="product-description">
                            <ul className="tabs-clearfix">
                                <li className="active">Mô tả</li>
                                <li>Thông tin</li>
                                <li>Hướng dẫn chơi</li>
                            </ul>
                            <p className="content-description">
                                Magformers là dòng đồ chơi xếp hình nam châm
                                thông minh hàng đầu thế giới đến từ Hàn Quốc.
                                Những bộ Magformers có thể giúp bé phát triển tư
                                duy hình học 2D - 3D. Toàn bộ Magformers được
                                làm từ nhựa cao cấp và nam châm neodymium cho
                                lực hút mạnh gấp 10 lần nam châm thường.
                                Funnyland là nhà phân phối Magformers chính hãng
                                tại Việt Nam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DetailProduct);
