import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className='App'>
        <div className='Head'>
            <Header />
            <NavBar />
        </div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout