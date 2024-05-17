import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home.jsx'
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import DetailProduct from './pages/DetailProduct.jsx';
import Account from './components/Account/Account.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer.jsx';
import Home_Product from './components/Home/Nav_Product/Home_Product.jsx';

import SideBar from './components/Header/SideBar.jsx';

import axios from 'axios';
export const context = React.createContext()
export const contextData = React.createContext()
function App() {
  //config firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCGfjNcOn8uxXqz437BOd4N4oBREUApAXw",
    authDomain: "coolmateweb-9fefb.firebaseapp.com",
    projectId: "coolmateweb-9fefb",
    storageBucket: "coolmateweb-9fefb.appspot.com",
    messagingSenderId: "81622100861",
    appId: "1:81622100861:web:376e084e627364e9333a14",
    measurementId: "G-LTZFNN6MBT"
  };
  //initialize firebase
  const fireBase = initializeApp(firebaseConfig)
  //store id product access
  const [idProduct, setIdProduct] = useState(0)
  useEffect(() => setIdProduct(window.localStorage.getItem('idProduct')), [])
  //track item navigation of header
  const [itemNav, setItemNav] = useState(0)
  //get database
  const [database, setDatabase] = useState([])
  useEffect(() => {
    axios({ method: "GET", url: "https://65f51306f54db27bc0229836.mockapi.io/product" })
      .then((reponse) => {
        setDatabase(reponse.data)
        console.log(reponse.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <context.Provider value={fireBase}>
      <div className="App">
      <contextData.Provider value={database}>
        <BrowserRouter>
          <Routes>

              <Route path='/' element={<>
                <Header itemNav={{ itemNav, setItemNav }} />
                <Home setIdProduct={setIdProduct} /> 
                <Footer />
                
              </>
              }></Route>

              <Route path='/Login' element={<Login />}></Route>

              <Route path='/SignUp' element={<SignUp />}></Route>

              <Route path={`/Product/${idProduct}`} element={<>
                <Header itemNav={{ itemNav, setItemNav }} />
                <DetailProduct />
                <Footer />
              </>}></Route>

              <Route path='/Account' element={<>
                <Header itemNav={{ itemNav, setItemNav }} />
                <Account />
                <Footer />
              </>}></Route>

              <Route path='/Nav_Product' element={<>
                <Header itemNav={{ itemNav, setItemNav }} />
                <Home_Product setIdProduct={setIdProduct} />
                <Footer />
              </>}>

              </Route>
          </Routes>
        </BrowserRouter>
        </contextData.Provider>
      </div>
    </context.Provider>
  );
}

export default App;
