import React, { useState } from 'react'
import './sortPrice.scss'
import { listCheckboxPrice } from '../../ultils/containts'

const SortPrice = () => {
  const [extend, setExtend] = useState(true)
  return (
    <div className='checklist-brand'>
      <p
        className="title-box-filter"
        onClick={() => setExtend(!extend)}
      >
        Giá sản phẩm
        <span>{extend ? '-' : '+'}</span>
      </p>
      {extend && (
        <div className='list-price'>
          { listCheckboxPrice.map((item, index) => (
            <div key={index} className='item-brand'>
              <input type="checkbox" value={item.value}/>
              <label>{item.title}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortPrice