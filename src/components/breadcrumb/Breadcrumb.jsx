import React from 'react'
import './breadcrumb.scss'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ title }) => {
  const routes = [
    { path: "/", breadcrumb: "Trang chủ" },
    { path: "/products", breadcrumb:  "Danh mục"},
    { path: "/products/:value", breadcrumb: title },
    { path: "/cart", breadcrumb: "Giỏ hàng" },
    { path: "/blog", breadcrumb: "Bài viết" },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div className='navigation flex content-custom'>
      {breadcrumbs.map(({ match, breadcrumb }, index, self) => (
        <Link 
          className=''
          key={match.pathname} 
          to={match.pathname}
        >
          <span className='text-breadcrumb'>{breadcrumb}</span>
          {index !== self.length - 1 && '/'}
        </Link>
      ))}
    </div>
  )
}

export default Breadcrumb