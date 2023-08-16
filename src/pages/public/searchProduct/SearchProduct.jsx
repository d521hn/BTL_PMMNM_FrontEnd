import React, { useEffect, useState } from "react";
import "./searchProduct.scss";
import { Product } from "../../../components";
import { useParams } from "react-router-dom";
import { apiProductsSearch } from "../../../apis";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);
  let params = useParams();

  const fetchProductSearch = async (value) => {
    const response = await apiProductsSearch(value);
    if (response.status === 200) setProducts(response.data.content);
  };

  useEffect(() => {
    fetchProductSearch(params.value);
  }, [params.value]);


  return (
    <div className="content-custom">
      <div className="title-search">
        <h2>Tìm kiếm</h2>
        <p>Có {products?.length} tìm kiếm</p>
      </div>

      <p className="mess-search">Kết quả tìm kiêm cho <span>"{params.value}"</span></p>
      <div className="search-products ">
        {products?.length > 0 ? (
          products?.map((el) => <Product infoProduct={el} key={el.id} />)
        ) : (
          <div>Không tìm thấy sản phẩm</div>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
