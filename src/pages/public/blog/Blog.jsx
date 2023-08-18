import React, { useState, useEffect } from "react";
import "./blog.scss";
import {
  Breadcrumb,
  ItemBlog,
  ItemBlogNew,
  // Pagination,
} from "../../../components";
import { apiGetBlogs } from "../../../apis";

const Blog = () => {

  const [blogs, setBlogs] = useState(null);

  const fetchBlogs = async () => {
    const response = await apiGetBlogs();
    if (response.status === 200) setBlogs(response.data.content);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-full">
      <div className="box-breadcrumb">
        <Breadcrumb />
      </div>
      <div className="content-custom">
        <div className="blog-body">
          <div className="new-blogs">
            <h2 className="title-box-left">Bài viết mới nhất</h2>
            <div className="list-new-blog">
              {blogs?.map((item) => (
                <ItemBlogNew blog={item} key={item.id}/>
              ))}
            </div>
          </div>
          <div className="list-blog">
            <h2 className="title-box-right">Góc đồ chơi</h2>
            <div className="">
              {blogs?.map((item) => (
                <ItemBlog blog={item} key={item.id}/>
              ))}
            </div>
            <div className="content-custom box-pagination">
              {/* <Pagination itemsPerPage={4} items={items}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
