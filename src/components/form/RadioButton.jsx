import React from 'react'
import './radioButton.scss'

const RadioButton = ({id, lableName}) => {
    return (
        <>
            <div className="form-check form-check1">
                <input
                    className="form-check-input radio-gender"
                    type="radio"
                    name="gender"
                    id={id}
                    defaultChecked=""
                />
                <label className="form-check-label" htmlFor={id}>
                    {lableName}
                </label>
            </div>
            </>
    )
}

export default RadioButton