import React from "react";
import SliderBanner from "../../../components/slider/SliderBanner";
import './home.scss'
import { categoryHome } from '../../../ultils/containts'
import { Link } from "react-router-dom";

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
      <div className="discover">
        <h3 className="title-discover">Khám phá đồ chơi độc đáo</h3>
      </div>
    </div>
  )
};

export default Home;
