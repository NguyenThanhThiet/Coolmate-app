import React, { useContext, useEffect, useState } from 'react'

import '../../styles/Home/Header.css'
import '../../styles/Home/Responsive/HeaderRes.css'

import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";


import Login from '../Login/Login.jsx'
import { Link, useNavigate } from 'react-router-dom';
import { databaseContext } from '../../pages/Home.jsx';

import Search from './Search.jsx';
import { remove } from 'firebase/database';

import {Tooltip} from 'react-tooltip'
function Header() {
  const database = useContext(databaseContext)

  const navigate = useNavigate()
  const [NameUser, setNameUser] = useState();
  useEffect(() => {
    setNameUser(window.localStorage.getItem('User'))
  }, [])
  //render ui search
  const renderUiSearch = (flag) => {
    if (flag == 0) {
      document.getElementsByClassName("Header_container")[0].classList.add("Header_hidden")
      document.getElementsByClassName("Header_UI_Search")[0].classList.remove("Header_hidden")
    }
    else {
      document.getElementsByClassName("Header_container")[0].classList.remove("Header_hidden")
      document.getElementsByClassName("Header_UI_Search")[0].classList.add("Header_hidden")
    }
  }
  //logout account user
  const logout = () => {
    window.localStorage.removeItem("User")
    navigate('/Login')
  }
  //track selected item of menu
  let itemSelectedPre=0;
  const handleItemSelected=(event,item)=>
  {
    if(itemSelectedPre!=-1)
       document.getElementsByClassName("Header_Nav")[0].childNodes[itemSelectedPre].classList.remove("Selected")
    event.target.classList.add("Selected")
    itemSelectedPre=item
  }
  
  return (
    <div className='Header'>
      <div className='Header_container'>
        <div className='Header_Menu'>
          <HiOutlineMenuAlt1 />
          <IoSearch />
        </div>

        <img className='Header_Logo' src="https://www.coolmate.me/images/logo-coolmate-new.svg?v=1cool_mateLogo.jpg" alt="error" />

        <ul className="Header_Nav" >
          <li className='Selected' onClick={(event)=>handleItemSelected(event,0)}>
            SALE
          </li>
          <li onClick={(event)=>handleItemSelected(event,1)}>
            SẢN PHẨM
          </li>
          <li onClick={(event)=>handleItemSelected(event,2)}>
            ĐỒ LÓT
          </li>
          <li onClick={(event)=>handleItemSelected(event,3)}>
            ĐỒ THỂ THAO
          </li>
          <li onClick={(event)=>handleItemSelected(event,4)}>
            MẶC HẰNG NGÀY
          </li>
          <li onClick={(event)=>handleItemSelected(event,5)}>
            NƯỚC HOA
          </li>
          <li onClick={(event)=>handleItemSelected(event,6)}>
            SẢN XUẤT RIÊNG
          </li>
          <li onClick={(event)=>handleItemSelected(event,7)}>
            CARE&SHARE
          </li>
        </ul>

        <div className='Header_ActionUser' >
          <div className='Header_ActionUser_Button' onClick={() => renderUiSearch(0)} >
            <IoSearch />
            <input type="text" placeholder='Tim kiếm sản phẩm...' />
          </div>
          {
            NameUser == undefined ? <Link to={'/Login'}><FaUser /></Link> : (
              <div className='Header_User' >
                <p>{NameUser}</p>
                <FaChevronDown className='OptionAccount'/>
                
                <Tooltip anchorSelect='.OptionAccount' clickable >
                  <div className='Option_Account' >
                      <ul>
                        <li onClick={()=>navigate('/Account')}>
                          <FaRegUser />
                          <p>Tài khoản</p>
                        </li>
                        <li>
                          <IoExitOutline />
                          <p onClick={logout}>Đăng xuất</p>
                        </li>
                      </ul>
                    </div>
                </Tooltip>
                
                


              </div>)
          }
          <div className='Header_ActionUser_Buy'>
            <HiShoppingBag />
            <p>0</p>
          </div>

        </div>

      </div>
      <Search />



    </div>

  )
}

export default Header
