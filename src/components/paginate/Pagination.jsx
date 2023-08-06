import React, { useState, useEffect } from 'react'
import './pagination.scss'
import { PagiItem } from '../index'
import ReactPaginate from 'react-paginate'

const Pagination = ({ itemsPerPage, items }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <PagiItem currentItems={currentItems} /> */}
      <ReactPaginate
        className='pagination'
        activeClassName='active-pagination'
        breakLabel="..."
        nextLabel="->"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<-"
        renderOnZeroPageCount={null}
        
      />
    </>
  )
}

export default Pagination