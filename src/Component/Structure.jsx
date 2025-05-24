import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Structure = () => {
  return (
    <div>
        <Header/>
        <div className='h-full'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Structure;
//the structure is use to structure how our pages are going to look like
//for each web page we will have the header, the Outlet and the footer
//nexted Routing ia how to structure your webpage