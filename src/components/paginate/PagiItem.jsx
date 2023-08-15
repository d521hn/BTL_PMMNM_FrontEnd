import React from 'react'
import { Product } from '../index'

const PagiItem = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((el) => (
          <Product key={el.id} infoProduct={el} />
        ))}
    </>
  )
}

export default PagiItem