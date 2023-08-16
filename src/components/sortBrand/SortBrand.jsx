import React, { useState } from "react";
import "./sortBrand.scss";
import { listCheckboxBrand } from "../../ultils/containts";

const SortBrand = ({ brands, handleFilterByBrand }) => {
    const [extend, setExtend] = useState(true);
    return (
        <div className="checklist-brand">
            <p className="title-box-filter" onClick={() => setExtend(!extend)}>
                Thương hiệu
                <span>{extend ? "-" : "+"}</span>
            </p>
            {extend && (
                <div className="list-brand">
                    {brands?.map((item) => (
                        <div key={item.id} className="item-brand">
                            <input
                                type="checkbox"
                                value={item.name}
                                name={item.name}
                                id={item.name}
                                onClick={handleFilterByBrand}
                            />
                            <label for={item.name}>{item.name}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortBrand;
