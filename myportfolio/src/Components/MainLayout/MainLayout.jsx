import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import './MainLayout.css'

function MainLayout(props) {
  return (
    <div className='mainlayout'>
        <Navbar/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default MainLayout