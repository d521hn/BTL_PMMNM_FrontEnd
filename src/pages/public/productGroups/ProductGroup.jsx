import React, { useState, useEffect, memo } from "react";
import "./productGroup.scss";
import {
  Breadcrumb,
  SortBrand,
  SortOld,
  SortPrice,
  Pagination,
} from "../../../components";
import {
  apiGetBrand,
  apiGetProducts,
  apiProductsByBrand,
  apiProductsByOld,
} from "../../../apis";
import { useParams } from "react-router-dom";

const ProductGroup = () => {
  const [brands, setBrands] = useState(null);
  const [products, setProducts] = useState(null);

  const fetchBrands = async () => {
    const response = await apiGetBrand();
    if (response.status === 200) setBrands(response.data.content);
  };

  const fetProducts = async () => {
    const response = await apiGetProducts();
    if (response.status === 200) setProducts(response.data.content);
  };

  let params = useParams();
  let valueBrand = "";
  const fetchProductByOld = async (value) => {
    const response = await apiProductsByOld(value);
    if (response.status === 200) setProducts(response.data.content);
  };

  const handleFilterByBrand = (e) => {
    if (e.target.checked) {
      params = "";
      valueBrand = e.target.value;
    }
  };

  useEffect(() => {
    if (params.value) {
      fetchBrands();
      fetchProductByOld(params.value);
    } else {
      fetchBrands();
      fetProducts();
    }
  }, [params.value, valueBrand]);

  return (
    <div className="w-full">
      <div className="box-breadcrumb">
        <Breadcrumb />
      </div>
      <div className="content-custom">
        <div className="collection-body">
          <div className="box-filter">
            <SortOld />
            <SortBrand
              brands={brands}
              handleFilterByBrand={handleFilterByBrand}
            />
            <SortPrice />
          </div>
          <div className="container-products">
            <div className="content-custom box-pagination">
              {products && <Pagination itemsPerPage={6} items={products} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductGroup);
