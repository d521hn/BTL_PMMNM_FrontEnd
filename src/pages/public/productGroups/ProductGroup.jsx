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
  apiFillterProducts,
} from "../../../apis";
import { useParams } from "react-router-dom";
import { portUrl } from "../../../ultils/containts";

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

  let paramsUrl = useParams();
  const fetchProductByOld = async (value) => {
    const response = await apiProductsByOld(value);
    if (response.status === 200) setProducts(response.data.content);
  };

  let url = new URL(`${portUrl}/products`);
  const [urlNew, setUrlNew] = useState(url);

  const fetProductsFromFillter = async (url) => {
    const response = await apiFillterProducts(url);
    if (response.status === 200) setProducts(response.data.content);
  };

  const handleFilterByBrand = (e) => {
    if (e.target.checked) {
      urlNew.searchParams.append("brandNames", e.target.value);
      fetProductsFromFillter(urlNew);
      setUrlNew(urlNew);
    } else {
      urlNew.searchParams.delete("brandNames", e.target.value);
      fetProducts(urlNew);
      setUrlNew(urlNew);
    }
  };

  const handleFillterByPrice = (e) => {
    if (e.target.checked) {
      let value = e.target.value
      let minmax = value.split("-")
      urlNew.searchParams.append("minPrice", minmax[0]);
      urlNew.searchParams.append("maxPrice", minmax[1]);
      console.log(urlNew);
      fetProductsFromFillter(urlNew);
    } else {
      urlNew.searchParams.delete("minPrice", e.target.value);
      urlNew.searchParams.delete("maxPrice", e.target.value);
      fetProducts(urlNew);
      setUrlNew(urlNew);
    }
  }

  useEffect(() => {
    if (paramsUrl.value) {
      fetchBrands();
      fetchProductByOld(paramsUrl.value);
    } else {
      fetchBrands();
      fetProducts();
    }
  }, [paramsUrl.value]);

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
            <SortPrice handleFillterByPrice={handleFillterByPrice} />
          </div>
          <div className="container-products">
            <div className="content-custom box-pagination">
              {products?.length > 0 ? (
                <Pagination itemsPerPage={6} items={products} />
              ) : (
                <div className="empty-product">Không tìm thấy sản phẩm</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductGroup);
