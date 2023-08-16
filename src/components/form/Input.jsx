import React from 'react';
import './input.scss';

const Input = ({ type, id, value, placeholder, onChange }) => {
    return (
        <>
            <div className="form-group input1">
                <input
                    type={type}
                    className="form-control"
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </>

    )
}

export default Input;