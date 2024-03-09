import React, { useState } from 'react'
import Header from '../components/Home/Header.jsx'
import Login from '../components/Login/Login.jsx'
import SignUp from '../components/SignUp/SignUp.jsx'
import Banner from '../components/Home/Banner.jsx'
import Flashsale from '../components/Home/Flashsale.jsx'

import '../styles/Home/Home.css'

export const context=React.createContext()
function Home() {
  const [LoginState,setLoginState]=useState(false)
  return (
    <context.Provider value={setLoginState}>
      <div>
        <Header/>
        <Banner/>
        <div className='Login_component'>
          {LoginState?<Login/>:null}
        </div>
        
        <Flashsale/>
    </div>
    </context.Provider>
    
  ) 
}

export default Home
