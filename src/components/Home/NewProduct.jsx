import React, { useContext, useEffect, useState } from 'react'

import '../../styles/Home/NewProduct.css'
import { GrLinkNext } from "react-icons/gr";
import { set } from 'react-hook-form';
import { databaseContext } from '../../pages/Home';
import Slider from 'react-slick';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
function NewProduct({ setIdProduct }) {
    const database = useContext(databaseContext).filter((value) => value.state == "New")
    //navigate change page web
    const navigate = useNavigate()
    //config slick slider
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 10000,
        cssEase: "linear"
    }
    // track state mouse to display component size of clothes
    const [indexDisplay, setIndexDisplay] = useState(-1)
    //handle click detail product
    const handleDetailProduct = (id) => {
        window.localStorage.setItem("idProduct", id)
        setIdProduct(id)
        navigate(`/Product/${id}`)
    }
    //handle click item color 
    const handleClickItemColor = (event, index) => {
        event.stopPropagation()//ngan sự kích hoạt sự kiện của phần tử cha
        Array.from(document.getElementsByClassName(`NewProduct_Color${index}`)[0].childNodes).map((value, index) => { value.classList.remove("ColorSelected") })
        if(event.target.tagName.toLowerCase()=="p")
           event.target.parentNode.classList.add("ColorSelected")
        else
           event.target.classList.add("ColorSelected")
    }
    return (
        <div className='NewProduct_container'>
            <div className='NewProduct_body'>

                <h2>HÀNG MỚI VỀ</h2>
                <div>
                    <Slider {...settings}>
                        {
                            database.map((value, index) => {
                                return (
                                    <div key={value.id} onClick={() => handleDetailProduct(value.id)}>
                                        <div onMouseEnter={() => setIndexDisplay(index)}
                                            onMouseLeave={() => setIndexDisplay(-1)}>
                                            <h2>{value.state}</h2>
                                            <img src={value.img} alt="error" />
                                            {value.evaluate != "" ? <div className='NewProduct_State'>
                                                <p>{value.evaluate}</p>
                                                <FaStar />
                                                <p>({value.pushchase})</p>
                                            </div> : ""
                                            }
                                            {
                                                indexDisplay == index ? <div className='NewProduct_Size' >
                                                    <p>Thêm nhanh vào giỏ hàng +</p>
                                                    <ul>
                                                        <li>M</li>
                                                        <li>L</li>
                                                        <li>X</li>
                                                        <li>XL</li>
                                                        <li>2XL</li>
                                                        <li>3XL</li>
                                                    </ul>
                                                </div> : ""
                                            }
                                        </div>
                                        <div>
                                            <ul className={`NewProduct_Color${index} Product_Color`}>
                                                {
                                                    Array.from(value.color).map((item, ind) => {
                                                        return (<li key={ind} onClick={(event) => handleClickItemColor(event, index)} className={ind == 0 ? "ColorSelected" : ""}>
                                                            <p style={{ backgroundColor: item.code }}></p>
                                                        </li>)
                                                    })
                                                }
                                            </ul>
                                            <p className='Product_Title'>{value.title}</p>
                                            <p className='Product_Category'>{value.material}</p>
                                            <div>
                                                <h2 className='Product_Price'>{`${value.price} đ`}</h2>
                                                <div>
                                                    <h2>{value.priceOrigin-value.price!=0?(`${value.priceOrigin} đ`):""}</h2>
                                                    <hr />
                                                </div>
                                                <h2>{value.discount!=0?(`-${value.discount}%`):""}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
