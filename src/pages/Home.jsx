import React, { useState } from 'react'
import Header from '../components/Home/Header.jsx'
import Login from '../components/Login/Login.jsx'
import SignUp from '../components/SignUp/SignUp.jsx'
import Banner from '../components/Home/Banner.jsx'
import Flashsale from '../components/Home/Flashsale.jsx'
import NewProduct from '../components/Home/NewProduct.jsx'
import '../styles/Home/Home.css'


function Home() {
  
  return (
      <div className='Home'>
        <Header/>
        <Banner/>
        <Flashsale/>
        <NewProduct/>
      </div>
  )                                                          
}

export default Home
