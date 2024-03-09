import React, { useContext } from 'react'

import '../../styles/Home/Header.css'
import '../../styles/Home/Responsive/HeaderRes.css'

import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import { context } from '../../pages/Home.jsx';
import Login from '../Login/Login.jsx'

function Header() {
  const setLoginState=useContext(context)

  return (
    <div className='Header_container'>

      <div className='Header_Menu'>
        <HiOutlineMenuAlt1/>
        <IoSearch/>
      </div>
      
      <img className='Header_Logo' src="cool_mateLogo.jpg" alt="error" />

      <li className="Header_Nav">
        <ul>
          <p>SALE</p>
        </ul>
        <ul>
          <p>SẢN PHẨM</p>
        </ul>
        <ul>
          <p>ĐỒ LÓT</p>
        </ul>
        <ul>
          <p>ĐỒ THỂ THAO</p>
        </ul>
        <ul>
          <p>MẶC HẰNG NGÀY</p>
        </ul>
        <ul>
          <p>NƯỚC HOA</p>
        </ul>
        <ul>
          <p>SẢN XUẤT RIÊNG</p>
        </ul>
        <ul>
          <p>CARE&SHARE</p>
        </ul>
      </li>

      <div className='Header_ActionUser'>
        <div className='Header_ActionUser_Button'>
          <IoSearch />
          <input type="text" placeholder='Tim kiếm sản phẩm...' />
        </div>

        <FaUser onClick={()=>{setLoginState(true)}}/>

        <div className='Header_ActionUser_Buy'>
          <HiShoppingBag />
          <p>0</p>
        </div>


      </div>
      

    </div>
  )
}

export default Header
