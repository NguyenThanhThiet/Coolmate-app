import { React, useState, useEffect, useContext } from 'react'
import '../../../styles/Home/Nav_Product/Home_Product.css'

import { VscSettings } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";

import { databaseContext } from '../../../pages/Home';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Home_Product({ setIdProduct }) {
  const [lengthProduct, setLengthProduct] = useState(0)

  //get database api from sever
  const [database, setDatabase] = useState([])
  useEffect(() => {
    axios({ method: "GET", url: "https://65f51306f54db27bc0229836.mockapi.io/product" })
      .then((reponse) => {
        setDatabase(reponse.data)
        console.log(reponse.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  //database temporary to change follow item
  const [tempDatabase, setTempDatabase] = useState([])
  useEffect(() => { setTempDatabase(database.filter((value) => value.state == "New")) }, [database])
  const handleCliclItemCategory = (indexOptions) => {
    console.log(indexOptions)
    switch (indexOptions) {
      case 0:
        setTempDatabase(database.filter((value) => value.state == "New"))
        break;
      case 1:
        setTempDatabase(database.sort((a, b) => b.pushchase - a.pushchase))
        break;
      case 2:
        setTempDatabase(database.sort((a, b) => a.price - b.price))
        break;
      case 3:
        setTempDatabase(database.sort((a, b) => b.price - a.price))
        break;
      default:
        setTempDatabase(database.sort((a, b) => b.discount - a.discount))
        break;
    }
  }

  // track state mouse to display component size of clothes
  const [indexDisplay, setIndexDisplay] = useState(-1)

  //handle click item color 
  const handleClickItemColor = (event, index) => {
    event.stopPropagation()//ngan sự kích hoạt sự kiện của phần tử cha
    Array.from(document.getElementsByClassName(`Product_Color${index}`)[0].childNodes).map((value, index) => { value.classList.remove("ColorSelected") })
    if (event.target.tagName.toLowerCase() == "p")
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
  //track display of filter
  const [stateFilter, setStateFilter] = useState(false)
  const handleDisplayFilter = () => {
    if (!stateFilter) {
      document.getElementsByClassName('Nav_Product_filterAndproduct_filter')[0].style.display = 'none'
      document.getElementsByClassName('Nav_Product_title_filter')[0].style.display='flex'
      setStateFilter(true)
    }
    else {
      document.getElementsByClassName('Nav_Product_filterAndproduct_filter')[0].style.display = 'block'
      document.getElementsByClassName('Nav_Product_title_filter')[0].style.display='none'
      setStateFilter(false)
    }
  }
  return (
    <div className='Nav_Product'>
      <div className='Nav_Product_title'>
        <h2>TẤT CẢ SẢN PHẨM</h2>
        <div>
          <div onClick={handleDisplayFilter}>
            <VscSettings />
            <p>{!stateFilter ? "Ẩn Fillter" : "Hiện Fillter"}</p>
          </div>
          <ul className='Nav_Product_title_filter'>
            <li>Tất cả</li>
            <li>Áo</li>
            <li>Quần</li>
            <li>Balo</li>
            <li>Phụ kiện</li>
          </ul>
        </div>
      </div>
      <div className='Nav_Product_filterAndproduct'>
        <div className='Nav_Product_filterAndproduct_filter'>
          <h2>244 kết quả</h2>
          <div >
            <div>
              <p>Danh mục</p>
              <ul>
                <li>
                  <input id='checkBox1_all' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_all">Tất cả</label>
                </li>
                <li><input id='checkBox1_shirt' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_shirt">Áo</label></li>
                <li>
                  <input id='checkBox1_pants' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_pants">Quần</label>
                </li>
                <li>
                  <input id='checkBox1_bag' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_bag">Balo</label>
                </li>
                <li>
                  <input id='checkBox1_accessories' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_accessories">Phụ kiện</label>
                </li>
              </ul>
            </div>
            <div>
              <p>Kích cỡ</p>
              <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
                <li>3XL</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
                <li>32</li>
                <li>33</li>
              </ul>
            </div>
            <div>
              <p>Màu sắc</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <p>Mức giá</p>
              <ul>
                <li><input id='checkBox1_price1' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_price1">Tất cả</label></li>
                <li><input id='checkBox1_price2' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_price2">Dưới 100</label></li>
                <li><input id='checkBox1_price3' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_price3">Dưới 500</label></li>
                <li><input id='checkBox1_price4' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_price4">Dưới 1 triệu</label></li>
                <li><input id='checkBox1_price5' type="checkbox" placeholder='HIN' />
                  <label htmlFor="checkBox1_price5">Dưới 10 triệu </label></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='Nav_Product_filterAndproduct_product'>
          <div>
            <p>{tempDatabase.length} kết quả</p>
            <div>
              <label htmlFor="category">Phân loại</label>
              <select name="" id="category" onChange={(event) => handleCliclItemCategory(parseInt(event.target.value))}>
                <option value={0}>Mới nhất</option>
                <option value={1}>Bán chạy</option>
                <option value={2}>Giá thấp đến cao</option>
                <option value={3}>Giá cao đến thấp</option>
                <option value={4}>% giảm giá nhiều</option>
              </select>
            </div>
            <div />
          </div>

          <ul className='Nav_Product_filterAndproduct_product_list'>
            {
              tempDatabase.map((value, index) => {
                if (index >= 0 && index < lengthProduct + 4)
                  return (
                    <li key={index} onClick={() => handleDetailProduct(value.id)}>
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
                            <h2>{value.priceOrigin - value.price != 0 ? (`${value.priceOrigin} đ`) : ""}</h2>
                            <hr />
                          </div>
                          <h2>{value.discount != 0 ? (`- ${value.discount}%`) : ""}</h2>
                        </div>
                      </div>
                    </li>
                  )
              })
            }
          </ul>

          {
            lengthProduct + 4 >= tempDatabase.length ? undefined : (<div>
              <h2 onClick={() => lengthProduct < tempDatabase.length ? setLengthProduct(lengthProduct + 4) : null}>XEM THÊM</h2>
              <p>Hiển thị {lengthProduct + 4} trên tổng số {tempDatabase.length} sản phẩm</p>
            </div>)

          }
        </div>
      </div>
    </div>
  )
}

export default Home_Product
