import React from 'react'

import '../../styles/Header/SideBar.css'

import { GrLinkNext } from "react-icons/gr";

function SideBar({className}) {
  return (
    <div className={`SideBar_container ${className}`}>
      <ul className='SideBar_list'>
        <li><p>HOME</p>
            <GrLinkNext/>
        </li>
        <li>
            <p>SẢN PHẨM</p>
            <GrLinkNext/>
        </li>
        <li>
            <p>QUẦN ÁO</p>
            <GrLinkNext/>
        </li>
        <li>
            <p>PHỤ KIỆN</p>
            <GrLinkNext/>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
