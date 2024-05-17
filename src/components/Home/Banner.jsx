import React, { useEffect, useState } from 'react'

import { getStorage, ref, listAll } from "firebase/storage";
import Slider from 'react-slick';

import '../../styles/Home/Banner.css'


import axios from 'axios'
function Banner() {
  const data=["https://firebasestorage.googleapis.com/v0/b/coolmateweb-9fefb.appspot.com/o/Banner%2FBanner1.jpg?alt=media&token=086189b9-9d88-40bd-bda0-2ab60f820cf7",
              "https://firebasestorage.googleapis.com/v0/b/coolmateweb-9fefb.appspot.com/o/Banner%2FBanner2.png?alt=media&token=93ec735a-8ccb-413f-9de6-46f1e386987d",
              "https://firebasestorage.googleapis.com/v0/b/coolmateweb-9fefb.appspot.com/o/Banner%2FBanner4.png?alt=media&token=aaa9e5ba-8990-4bef-bab9-fd8950fe8178",
              "https://firebasestorage.googleapis.com/v0/b/coolmateweb-9fefb.appspot.com/o/Banner%2Fbanner1.jpg?alt=media&token=db28e385-9cdb-4c9e-bd8a-2413c8e77952"]

 //config slick slider
 const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  cssEase: "linear"
}
  return (
    <div className='Banner_container'>
      <div className='Banner_Slider_Container'>
      <Slider {...settings}>
        {
          data.map((value)=>{
            return <img className='Banner_Slider_img' src={value} error></img>
          })
        }
      </Slider>
      </div>
      <ul className='Banner_Intro'>
        <li>
            <a href=""></a>
            <img src="https://firebasestorage.googleapis.com/v0/b/coolmateweb-9fefb.appspot.com/o/Banner%2Fbanner2.jpg?alt=media&token=36f35561-7dee-4828-b1f7-c9ea585ff77a" alt="" />
              
            <div>
                <p>Quà tặng chỉ còn</p>
                <div>
                   <h2>3798</h2>
                   <p>suất</p>
                </div>
            </div>
        </li>
        <li>
            <a href=""></a>
            <img src="https://firebasestorage.googleapis.com/v0/b/coolmateweb-9fefb.appspot.com/o/Banner%2Fbanner3.jpg?alt=media&token=4e8dd62d-b179-464c-9029-3c40e1f03335" alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Banner
