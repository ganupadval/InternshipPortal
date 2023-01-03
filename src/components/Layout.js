import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'
import '../App.css';

export default function Layout({children} ) {
  return (
    <div>
      <NavBar/>
      <>
      {children}
      </>
      <Footer/>
    </div>
  )
}
