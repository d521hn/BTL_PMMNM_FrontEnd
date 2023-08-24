import React from "react";
import "./renderMenu.scss";
import { Link } from "react-router-dom";

const RenderMenu = ({ data }) => {
  return (
    <ul className="list-menu">
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.path} className="item-menu">
              {item.name}
            </Link>
            {item.sub && (
              <ul className="menu-sub">
                {item.sub.map((itemSub) => (
                  <li key={itemSub.id}>
                    <Link className="item-menu-sub" to={itemSub.path}>
                      {itemSub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default RenderMenu;
