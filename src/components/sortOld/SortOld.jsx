import React from 'react'
import './sortOld.scss'
import { sortOld } from '../../ultils/containts'
import { Link } from 'react-router-dom'

const SortOld = () => {
  return (
    <div className='filter-old'>
      {sortOld.map((el, index) => (
        <>
          <Link 
            className='item-filter-old'
            to={el.path} 
            key={el.id}
          >
            {el.title}
          </Link>
          {index < sortOld.length - 1 && (<div className='line-under'></div>)}
        </>
      ))}
    </div>
  )
}

export default SortOld