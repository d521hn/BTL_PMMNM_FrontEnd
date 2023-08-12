import React, { useEffect, useState } from "react";
import "./home.scss";
import SliderBanner from "../../../components/slider/SliderBanner";
// import { categoryHome } from '../../../ultils/containts'
import { Link } from "react-router-dom";
import { Product } from "../../../components";
import { apiGetBrand, apiGetProducs } from "../../../apis";
import path from "../../../ultils/path";

const Home = () => {
    const [brands, setBrands] = useState(null);
    const [products, setProducts] = useState(null)

    const fetchBrands = async () => {
      const response = await apiGetBrand();
      if (response.status === 200) setBrands(response.data.content);
    };

    const fetProducts = async () => {
      const response = await apiGetProducs();
      if(response.status === 200) setProducts(response.data.content)
    }

    useEffect(() => {
        fetchBrands();
        fetProducts();
    }, []);

    return (
        <div className="w-full">
            <div className="slider-banner">
                <SliderBanner />
            </div>
            <div className="category">
                <h3 className="title-category">Bạn đang tìm đồ chơi gì?</h3>
                <div className="list-category">
                    {brands?.map((el) => (
                        <Link
                            key={el.id}
                            to={`${path.PRODUCTS}?brandName=${el.name}`}
                            className="item-category"
                        >
                            <img src={""} alt="" />
                            <p>{el.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="discover content-custom">
                <h3 className="title-discover">Khám phá đồ chơi độc đáo</h3>
                <div className="list-products-home">
                  {products?.map(el => (
                    <Product key={el.id} infoProduct={el}/>
                  ))}
                </div>
            </div>
            <div className="video-outstanding">
                <h2 className="title-video">Video sản phẩm nổi bật</h2>
                <div className="list-video">
                    <iframe
                        className="item-yt"
                        width="25%"
                        height="315"
                        src="https://www.youtube.com/embed/L7xsdKi_TM8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="item-yt"
                        width="25%"
                        height="315"
                        src="https://www.youtube.com/embed/WZWyFE7bMoA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="item-yt"
                        width="25%"
                        height="315"
                        src="https://www.youtube.com/embed/qHwl_szNg4M"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Home;
