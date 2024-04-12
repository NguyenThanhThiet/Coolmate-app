import React, { useCallback, useContext, useMemo, useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import '../../styles/Home/Product.css'
import { context } from '../../App';
import { databaseContext } from '../../pages/Home';
import {useNavigate} from 'react-router-dom'

function Product({setIdProduct}) {

    let databaseApi = [...useContext(databaseContext)]


    const [lengthProduct, setLengthProduct] = useState(0)
    const [database, setDatabase] = useState([])
    useEffect(() => {
        if (database.length == 0)
            setDatabase(databaseApi)
    }, [database])

    const selectedItem = (event) => {

        Array.from(event.target.parentNode.childNodes).map((value) => {
            value.classList.remove("selected")
        })
        event.target.classList.add("selected")
        const contextElement=event.target.innerHTML
        if(contextElement!="Tất cả")
           setDatabase(databaseApi.filter((value)=>value.category==contextElement))
        else
           setDatabase(databaseApi)
    }
    // track state mouse to display component size of clothes
    const [indexDisplay, setIndexDisplay] = useState(-1)
    //handle click item color 
    const handleClickItemColor = (event, index) => {
        event.stopPropagation()//ngan sự kích hoạt sự kiện của phần tử cha
        Array.from(document.getElementsByClassName(`Product_Color${index}`)[0].childNodes).map((value,index)=>{value.classList.remove("ColorSelected")})
        if(event.target.tagName.toLowerCase()=="p")
           event.target.parentNode.classList.add("ColorSelected")
        else
           event.target.classList.add("ColorSelected")
    }
    //handle click detail product
    const navigate = useNavigate()
    const handleDetailProduct = (id) => {
        window.localStorage.setItem("idProduct", id)
        setIdProduct(id)
        navigate(`/Product/${id}`)
    }
    return (
        <div className='Product_container'>
            <div className='Product_body'>
                <img src="BannerProduct.jpg" alt="error" />
                <div className='Product_tabBar'>
                    <ul>
                        <li className="selected" onClick={(event) => selectedItem(event)}>Tất cả</li>
                        <li onClick={(event) => selectedItem(event)}>Áo</li>
                        <li onClick={(event) => selectedItem(event)}>Quần</li>
                        <li onClick={(event) => selectedItem(event)}>Quần lót</li>
                        <li onClick={(event) => selectedItem(event)}>Phụ kiện</li>
                        <li onClick={(event) => selectedItem(event)}>Balo</li>
                    </ul>
                </div>
                <ul>
                    {
                        database.map((value, index) => {
                            if (index >= 0 && index < lengthProduct + 5)
                                return (
                                    <li key={index} onClick={()=>handleDetailProduct(value.id)}>
                                        <div onMouseEnter={() => setIndexDisplay(index)}
                                            onMouseLeave={() => setIndexDisplay(-1)}>
                                            <h2>{value.state}</h2>
                                            <img src={value.img} alt="error" />
                                            {value.evaluate != "" ? <div className='Product_State'>
                                                <p>{value.evaluate}</p>
                                                <FaStar />
                                                <p>({value.pushchase})</p>
                                            </div> : ""
                                            }
                                            {
                                                indexDisplay == index ? <div className='Product_Size' >
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
                                            <ul className={`Product_Color${index} Product_Color`}>
                                                {
                                                    Array.from(value.color).map((item, ind) => {
                                                        return (<li key={ind} onClick={(event) => handleClickItemColor(event, index)} className={ind==0?"ColorSelected":""}>
                                                            <p style={{ backgroundColor: item.code }}></p>
                                                        </li>)
                                                    })
                                                }

                                            </ul>
                                            <p className='Product_Title'>{value.title}</p>
                                            <p className='Product_Category'>{value.material}</p>
                                            <div>
                                                <h2 className='Product_Price'>{value.price}</h2>
                                                <div>
                                                    <h2>{value.price_Origin}</h2>
                                                    <hr />
                                                </div>
                                                <h2>{value.discount}</h2>
                                            </div>
                                        </div>
                                    </li>
                                )
                        })
                    }
                </ul>
                {
                    lengthProduct + 5 >= database.length ? undefined : (<div>
                        <h2 onClick={() => lengthProduct < database.length ? setLengthProduct(lengthProduct + 5) : null}>XEM THÊM</h2>
                        <p>Hiển thị {lengthProduct + 5} trên tổng số {database.length} sản phẩm</p>
                    </div>)

                }

            </div>
        </div>
    )
}

export default Product
