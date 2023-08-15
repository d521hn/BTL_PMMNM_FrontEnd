import React, { useState, useEffect, memo } from "react";
import "./productGroup.scss";
import {
    Breadcrumb,
    SortBrand,
    SortOld,
    SortPrice,
    Product,
    Pagination,
    PagiItem,
} from "../../../components";
import { apiGetBrand, apiGetProducts } from "../../../apis";

const ProductGroup = () => {
    const items = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
    ];

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

    useEffect(() => {
        fetchBrands();
        fetProducts();
    }, []);

    return (
        <div className="w-full">
            <div className="box-breadcrumb">
                <Breadcrumb />
            </div>
            <div className="content-custom">
                <div className="collection-body">
                    <div className="box-filter">
                        <SortOld />
                        <SortBrand />
                        <SortPrice />
                    </div>
                    <div className="container-products">
                        <div className="content-custom box-pagination">
                            <Pagination itemsPerPage={6} items={products} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductGroup);
