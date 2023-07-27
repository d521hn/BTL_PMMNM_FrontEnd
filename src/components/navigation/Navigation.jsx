import React from "react";
import './navigation.scss'
import { Link } from "react-router-dom";
import { navigations } from '../../ultils/containts'

navigations.map(el => console.log(el))

const Navigation = () => {
  
    return (
      <div className="w-full bg-main">
        <div className="content list-navigation">
          {navigations.map((el) => (
            <Link to={el.path} className="item-navigation" key={el.id}>{el.name}</Link>
          ))}
        </div>
      </div>
    )
};

export default Navigation;
