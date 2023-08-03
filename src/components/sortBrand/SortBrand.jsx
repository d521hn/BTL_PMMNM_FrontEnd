import React, { useState } from 'react'
import './sortBrand.scss'
import { listCheckboxBrand } from '../../ultils/containts'

const SortBrand = () => {
  const [extend, setExtend] = useState(true)
  return (
    <div className='checklist-brand'>
      <p
        className="title-box-filter"
        onClick={() => setExtend(!extend)}
      >
        Thương hiệu
        <span>{extend ? '-' : '+'}</span>
      </p>
      {extend && (
        <div className='list-brand'>
          { listCheckboxBrand.map((item, index) => (
            <div key={index} className='item-brand'>
              <input type="checkbox" value={item} name={item} id={item}/>
              <label for={item}>{item}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortBrand