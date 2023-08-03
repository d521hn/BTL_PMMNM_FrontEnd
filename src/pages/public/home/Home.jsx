import React from "react";
import SliderBanner from "../../../components/slider/SliderBanner";
import './home.scss'
import { categoryHome } from '../../../ultils/containts'
import { Link } from "react-router-dom";
import { Product } from "../../../components";

const Home = () => {
  return (
    <div className="w-full">
      <div className="slider-banner">
        <SliderBanner/>
      </div>
      <div className="category">
        <h3 className="title-category">Bạn đang tìm đồ chơi gì?</h3>
        <div className="list-category">
          {categoryHome.map((el) => (
            <Link to={el.path} className="item-category">
              <img src={el.img} alt="" />
              <p>{el.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="discover content-custom">
        <h3 className="title-discover">Khám phá đồ chơi độc đáo</h3>
        <div className="list-products-home">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>

        </div>
      </div>
      <div className="video-outstanding">
        <h2 className="title-video">Video sản phẩm nổi bật</h2>
        <div className="list-video">
          <iframe className="item-yt" width="25%" height="315" src="https://www.youtube.com/embed/L7xsdKi_TM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe className="item-yt" width="25%" height="315" src="https://www.youtube.com/embed/WZWyFE7bMoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe className="item-yt" width="25%" height="315" src="https://www.youtube.com/embed/qHwl_szNg4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      

    </div>
  )
};

export default Home;
