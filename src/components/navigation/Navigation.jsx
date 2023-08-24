import React from "react";
import "./navigation.scss";
import { navigations } from "../../ultils/containts";
import RenderMenu from "./RenderMenu";

const Navigation = () => {
  return (
    <div className="w-full bg-main">
      <div className="content-custom list-navigation">
        <RenderMenu data={navigations}/>
      </div>
    </div>
  );
};

export default Navigation;
