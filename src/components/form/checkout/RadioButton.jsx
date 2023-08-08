import React from 'react'
import './radioButton.scss'

const RadioButton = ({id, lableName, linkImg, onClick}) => {
    return (
        <div className="form-check form-check2 d-flex align-items-center">
            <input
                className="form-check-input radio-checkout"
                type="radio"
                name="checkout-type"
                id={id}
                onClick={onClick}
                defaultChecked=""
            />
            <label className="form-check-label d-flex align-items-center" htmlFor={id}>
                <div className="label-img">
                    <img src={linkImg} alt="" />
                </div>
                <span>{lableName}</span>
            </label>
        </div>
    )
}

export default RadioButton