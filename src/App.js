import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home.jsx'
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import DetailProduct from './pages/DetailProduct.jsx';
import Account from './components/Account/Account.jsx';
import Header from './components/Home/Header.jsx';
import Footer from './components/Home/Footer.jsx';
import Home_Product from './components/Home/Nav_Product/Home_Product.jsx';

export const context = React.createContext()
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
  const [itemNav,setItemNav]=useState(0)
  return (
    <context.Provider value={fireBase}>
      <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<>
                <Header itemNav={{itemNav,setItemNav}}/>
                <Home setIdProduct={setIdProduct} />
                <Footer />
              </>
            }></Route>

            <Route path='/Login' element={<Login />}></Route>

            <Route path='/SignUp' element={<SignUp />}></Route>

            <Route path={`/Product/${idProduct}`} element={<>
              <Header itemNav={{itemNav,setItemNav}}/>
              <DetailProduct />
              <Footer />
            </>}></Route>

            <Route path='/Account' element={<>
              <Header itemNav={{itemNav,setItemNav}}/>
              <Account />
              <Footer />
            </>}></Route>

            <Route path='/Nav_Product' element={<>
              <Header itemNav={{itemNav,setItemNav}}/>
              <Home_Product setIdProduct={setIdProduct}/>
              <Footer />
            </>}>

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </context.Provider>
  );
}

export default App;
