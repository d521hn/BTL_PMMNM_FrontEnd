import React from 'react';
import './input.scss';

const Input = ({ type, id, value, placeholder }) => {
    return (
        <>
            <div className="form-group">
                <input
                    type={type}
                    className="form-control"
                    id={id}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </>

    )
}

export default Input;