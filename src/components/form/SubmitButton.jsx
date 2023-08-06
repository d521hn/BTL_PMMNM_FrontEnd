import React from 'react'
import './submitButton.scss'

const SubmitButton = ({text}) => {
    return (
        <>
            <button type="submit" className="btn btn-lg">
                {text}
            </button>
        </>
    )
}

export default SubmitButton