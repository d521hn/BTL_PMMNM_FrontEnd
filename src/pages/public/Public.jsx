import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navigation, Footer } from '../../components'

const Public = () => {
  return (
    <div>
      <Header/>
      <Navigation/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Public