import React from "react";
import "./itemBlogNew.scss";
import { Link } from "react-router-dom";

const ItemBlogNew = ({ blog }) => {
  return (
    <Link to={`/blog/${blog?.id}`} className="item-blog-new">
      <img
        src="https://file.hstatic.net/1000117512/article/900x900_post_facebook_summer_warehouse_sale-01_eab2b0e5e0224144be4d2859fba749c2_medium.jpg"
        alt=""
      />
      <div className="title-author">
        <p className="title-blog-new">
          {blog?.title}
        </p>
        <p className="author">
          <span className="name-author">{blog?.user?.userName}</span>
          <span className="post-date-new">{blog?.createdTime.slice(0,10)}</span>
        </p>
      </div>
    </Link>
  );
};

export default ItemBlogNew;
