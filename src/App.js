import React from 'react';
import './App.css';
import Home from './pages/Home.jsx'
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";

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
 const fireBase=initializeApp(firebaseConfig)

  return (
    <context.Provider value={fireBase}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/SignUp' element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </context.Provider>
  );
}

export default App;
