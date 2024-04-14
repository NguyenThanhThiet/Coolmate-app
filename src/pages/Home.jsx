import React, { useState,useContext,useMemo, useEffect } from 'react'
import Header from '../components/Home/Header.jsx'
import Login from '../components/Login/Login.jsx'
import SignUp from '../components/SignUp/SignUp.jsx'
import Banner from '../components/Home/Banner.jsx'
import Flashsale from '../components/Home/Flashsale.jsx'
import NewProduct from '../components/Home/NewProduct.jsx'
import BestSale from '../components/Home/BestSale.jsx'
import Product from '../components/Home/Product.jsx'
import Footer from '../components/Home/Footer.jsx'
import '../styles/Home/Home.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { context } from '../App.js'
import axios from 'axios'

export const databaseContext = React.createContext()
function Home({setIdProduct}) {
  const firebase = useContext(context)
  const [database, setDatabase] = useState([]);
  useEffect(() => {
    axios({method: "GET",url:"https://65f51306f54db27bc0229836.mockapi.io/product"})
    .then((reponse)=>
    {
      setDatabase(reponse.data)
      console.log(reponse.data)
    })
    .catch((error)=>
    {
      console.log(error)
    })
  }, [])
  
  return (
    <div className='Home'>
      <databaseContext.Provider value={database}>
        <Banner />
        <Flashsale setIdProduct={setIdProduct}/>
        <NewProduct setIdProduct={setIdProduct}/>
        <BestSale setIdProduct={setIdProduct}/>
        <Product setIdProduct={setIdProduct}/>
      </databaseContext.Provider>
    </div>
  )
}

export default Home
