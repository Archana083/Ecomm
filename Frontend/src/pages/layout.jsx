import React from 'react'
import Navbar from '../component/navbar/navbar'
import { Outlet } from 'react-router'
import Footer from '../component/footer/footer'
const Layout = () => {
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout