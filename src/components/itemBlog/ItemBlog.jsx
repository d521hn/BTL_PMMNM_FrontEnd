import React from "react";
import "./itemBlog.scss";
import { Link } from "react-router-dom";

const ItemBlog = ({ blog }) => {
  return (
    <Link to={`/blog/${blog?.id}`} className="item-blog">
      <img
        src="https://file.hstatic.net/1000117512/article/z4478570310226_0b817ae4977912e57a83d52192b555fe_4f2f52b185ad4e4a9ba2f44c60601adb_large.jpg"
        alt=""
      />
      <div className="summary-blog">
        <p className="title-blog">
          {blog?.title}
        </p>
        <p className="author">
          <p className="box-author">
            Người viết: <span className="name-author">{blog?.user?.firstName} {blog?.user?.lastName}</span>
          </p>
          <span className="post-date-new">{blog?.createdTime.slice(0,10)}</span>
        </p>
        <p className="summary-content">
          {blog?.content}
        </p>
      </div>
    </Link>
  );
};

export default ItemBlog;
