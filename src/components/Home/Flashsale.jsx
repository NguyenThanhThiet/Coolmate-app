import React, { useContext, useEffect, useState } from 'react'
import '../../styles/Home/Flashsale.css'

import { GrLinkNext } from "react-icons/gr";
import { databaseContext } from '../../pages/Home';
import Slider from 'react-slick';
import {useNavigate} from 'react-router-dom'
function Flashsale({setIdProduct}) {
  const database=[...useContext(databaseContext)]
  //config slick slider
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 5000,
    cssEase: "linear"
  }
  //handle click detail product
  const navigate=useNavigate()
  const handleDetailProduct=(id)=>
  {
      window.localStorage.setItem("idProduct",id)
      setIdProduct(id)
      navigate(`/Product/${id}`)
  }
  return (
    <div className='Flashsale_container'>
      <div className='Flashsale_banner'>

        <img src="https://firebasestorage.googleapis.com/v0/b/coolmateweb-9fefb.appspot.com/o/Banner%2FbannerFlashsale.jpg?alt=media&token=7d1a83b2-4cb0-4ddf-9a20-ed3ca30eb3a3" alt="" />

        <div>
          <div>
            <p>12:00 - 14:00</p>
            <p>SẮP DIỄN RA</p>
          </div>

          <div>
            <p>20:00 - 22:00</p>
            <p>SẮP DIỄN RA</p>
          </div>
        </div>

      </div>
      <div>
      <Slider {...settings}>
          {database.map((value, index)=>{
            if(value.state==="Sale")
              return (
              <div key={index} onClick={()=>handleDetailProduct(value.id)}>
                <div className='Flashsale_Img'>
                  <img src={value.img} alt="error" />
                </div>
                <div className='Flashsale_Info'>
                  <p>{value.title}</p>
                  <div>
                    <h2>{`${value.price} đ`}</h2>
                    <div>
                      <p>{value.priceOrigin-value.price!=0?(`${value.priceOrigin} đ`):""}</p>
                      <hr />
                    </div>
                    <p>{value.discount!=0?(`- ${value.discount}%`):""}</p>
                  </div>
                </div>
              </div>)
          })
          }
        </Slider>
        
      </div>
    </div>
  )
}

export default Flashsale
