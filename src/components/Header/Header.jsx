import React, { useContext, useEffect, useState } from 'react'
import Login from '../Login/Login.jsx'
import { Link, useNavigate } from 'react-router-dom';
import { remove } from 'firebase/database';
import {Tooltip} from 'react-tooltip'

import { contextData } from '../../App.js';
import Search from '../Home/Search.jsx';

import '../../styles/Header/Header.css'
import '../../styles/Responsive/HeaderRes.css'

import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import SideBar from './SideBar.jsx';

function Header({itemNav}) {
  const database = useContext(contextData)
  console.log("database: ",database)
  
  const navigate = useNavigate()
  const [NameUser, setNameUser] = useState();
  useEffect(() => {
    setNameUser(JSON.parse(window.localStorage.getItem('User'))?.displayName)
  }, [])
  console.log(NameUser)
  //render ui search
  const [stateSideBar,setStateSideBar]=useState(false);
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
  //render ui sidebar
  const renderUiSideBar=(flag)=>{
   if(flag)
    setStateSideBar(false)
   else
     setStateSideBar(true)
  }
  //track selected item of menu
  const listMenuNav=["HOME","SẢN PHẨM","QUẦN ÁO","PHỤ KIỆN"]
  const handleClickItemNav=(index)=>{
    switch(index){
      case 0:
        navigate('/')
        break;
      case 1:
        navigate('/Nav_Product')
        break;
      default:
        navigate('/')
        break;
    }
    itemNav.setItemNav(index)
  }
  return (
    <div className='Header'>
      <div className='Header_container'>
        <div className='Header_button_menu'>
          {
            stateSideBar==true?<IoMdClose onClick={()=>renderUiSideBar(stateSideBar)}/>:<RiMenu2Fill onClick={()=>renderUiSideBar(stateSideBar)}/>
          }
          <IoSearch onClick={() => renderUiSearch(0)}/>
        </div>

        <SideBar className={stateSideBar==true?'showSidebar':''}/>

        <img className='Header_Logo' src="https://firebasestorage.googleapis.com/v0/b/coolmateweb-9fefb.appspot.com/o/logo%2FlogoShop-removebg-preview.png?alt=media&token=53bfbe24-4ff8-4344-abfd-58859c00d84d" alt="error" />
        <ul className="Header_Nav" >
          {listMenuNav.map((value,index)=>{
            return (<li className={index==itemNav.itemNav?"Selected":""} onClick={()=>handleClickItemNav(index)}>{value}
          </li>)
          })}
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
