import React from 'react'

const PagiItem = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  )
}

export default PagiItem