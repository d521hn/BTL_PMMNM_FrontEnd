import React from 'react'
import './radioButton.scss'

const RadioButton = ({id, lableName}) => {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id={id}
                    defaultChecked=""
                />
                <label className="form-check-label" htmlFor={id}>
                    {lableName}
                </label>
            </div></>
    )
}

export default RadioButton