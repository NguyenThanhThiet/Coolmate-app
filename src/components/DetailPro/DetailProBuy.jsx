import React, { useEffect, useState } from 'react'
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdOutlineZoomInMap } from "react-icons/md";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5"
import { BiTimer } from "react-icons/bi";
import { LuPackageCheck } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";

import '../../styles/DetailPro/DetailPro_Buy.css'
import axios from 'axios'
import { Tooltip } from 'react-tooltip'

function DetailProBuy() {
    //store data
    const [data, setData] = useState("")
    //get data api 
    useEffect(() => {
        const pathApi = `https://65f51306f54db27bc0229836.mockapi.io/product/${window.localStorage.getItem('idProduct')}`
        axios({ method: 'GET', url: pathApi })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }, [])
    //store count product user buy
    const [countProduct, setCountProduct] = useState(1)
    //state button zoom img
    const [stateZoom, setStateZoom] = useState(false)
    //list store array images 
    const [ListImages, setListImages] = useState([])
    useEffect(() => {
        const Images = [data.img, "https://mcdn2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2024/thumbqboo12.8_1.jpg",
            "https://mcdn2.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/March2024/24CMAW.QB001.16_7.jpg",
            "https://mcdn2.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/March2024/24CMAW.QB001.19_34.jpg",
            "https://mcdn2.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/March2024/24CMAW.QB001.17.jpg",
            "https://mcdn2.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/March2024/24CMAW.QB001.18.jpg",
            "https://mcdn2.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/March2024/24CMAW.QB001.22.jpg"]
        setListImages(Images)
    }, [data])
    //variable track images images selected to display
    const [SelectedImg, setSelectedImg] = useState(0)
    //track item color selected
    const [itemSelected,setItemSelected]=useState(0)
    return (
            <div className='DetailProduct_Buy'>
                <div className='DetailProduct_Img'>
                    <li>
                        {
                            ListImages.map((value, index) => {
                                return (<ul key={index} onClick={() => setSelectedImg(index)} className={index!=SelectedImg?"SelectedImg":""}>
                                    <img src={value} alt="error" />
                                </ul>)
                            })
                        }
                    </li>
                    <div>
                        <img className='DetailProduct_Img_Main' src={ListImages[SelectedImg]} alt="error" />
                        {
                            stateZoom ? <MdOutlineZoomInMap onClick={(event) => { event.target.previousSibling.style.scale = 1; setStateZoom(false) }} /> : <MdOutlineZoomOutMap onClick={(event) => { event.target.previousSibling.style.scale = 1.5; setStateZoom(true) }} />
                        }

                        <div>
                            <GrLinkPrevious onClick={() => { setSelectedImg(((SelectedImg - 1) + ListImages.length) % ListImages.length) }} />
                            <GrLinkNext onClick={() => { setSelectedImg((SelectedImg + 1) % (ListImages.length)) }} />
                        </div>
                    </div>
                </div>
                <div className='DetailProduct_Info'>
                    <h2>{data.title}</h2>
                    <div className='DetailProduct_Info_Sale'>
                        <div>
                            <img src="https://mcdn.coolmate.me/image/July2023/mceclip0.png" alt="error" />
                            <div>
                                <h2>KẾT THÚC TRONG </h2>
                                <p>00</p>
                                <h2>:</h2>
                                <p>56</p>
                                <h2>:</h2>
                                <p>36</p>
                            </div>
                        </div>
                        <div>
                            <h2>{data.price}</h2>
                            <div>
                                <div>
                                    <h2>{data.princeOrigin}</h2>
                                    <hr />
                                </div>
                                {data.discount != "" ? <p>Giảm đến {data.discount}</p> : ""}
                            </div>
                        </div>
                    </div>
                    <div className='DetailProduct_Info_Discount'>
                        <p>Giảm thêm 10% tương đương 17.000đ (áp dụng với thành viên Coolclub với mọi đơn hàng)</p>
                        <CiDiscount1 />
                    </div>
                    <div className='DetailProduct_Info_Color'>
                        <div>
                            <p>Màu sắc:</p>
                            <h2>{data.color!=undefined?data.color[itemSelected].name:""}</h2>
                        </div>
                        <li>
                            {
                                data.color?.map((value,index)=>{
                                    return (<ul className={itemSelected==index?"SelectedColor":""} onClick={()=>setItemSelected(index)}>
                                        <p style={{backgroundColor:value.code}}></p>
                                        </ul>)
                                })
                            }
                        </li>
                    </div>
                    <div className='DetailProduct_Info_Size'>
                        <div>
                            <div>
                                <p>Kích thước: </p>
                                <p></p>
                            </div>
                            <div>
                                <p>Hướng dẫn chọn size</p>
                                <hr />
                            </div>
                        </div>

                        <li>
                            <ul >
                                <p className='DetailProduct_Info_Size_M'>M</p>
                                <Tooltip id='tooltip-1' anchorSelect='.DetailProduct_Info_Size_M' clickable place='bottom'>
                                    <div>
                                        <p>1m55-1m59</p>
                                        <p>48kg-54kg</p>
                                    </div>
                                </Tooltip>

                            </ul>
                            <ul>
                                <p className='DetailProduct_Info_Size_L'>L</p>
                                <Tooltip anchorSelect='.DetailProduct_Info_Size_L' clickable>
                                    <div>
                                        <p>1m60-1m66</p>
                                        <p>55kg-61kg</p>
                                    </div>
                                </Tooltip>
                            </ul>
                            <ul>
                                <p className='DetailProduct_Info_Size_X'>X</p>
                                <Tooltip anchorSelect='.DetailProduct_Info_Size_X' clickable>
                                    <div>
                                        <p>1m66-1m72</p>
                                        <p>62kg-68kg</p>
                                    </div>
                                </Tooltip>
                            </ul>
                            <ul>
                                <p className='DetailProduct_Info_Size_XL'>XL</p>
                                <Tooltip anchorSelect='.DetailProduct_Info_Size_XL' clickable>
                                    <div>
                                        <p>1m72-1m77</p>
                                        <p>69kg-75kg</p>
                                    </div>
                                </Tooltip>
                            </ul>
                            <ul>
                                <p className='DetailProduct_Info_Size_2XL'>2XL</p>
                                <Tooltip anchorSelect='.DetailProduct_Info_Size_2XL' clickable>
                                    <div>
                                        <p>1m77-1m83</p>
                                        <p>76kg-82kg</p>
                                    </div>
                                </Tooltip>
                            </ul>
                            <ul>
                                <p className='DetailProduct_Info_Size_3XL'>3XL</p>
                                <Tooltip anchorSelect='.DetailProduct_Info_Size_3XL' clickable>
                                    <div>
                                        <p>1m84-1m88</p>
                                        <p>83kg-87kg</p>
                                    </div>
                                </Tooltip>
                            </ul>
                        </li>
                    </div>
                    <div className='DetailProduct_Info_Buy'>
                        <div>
                            <FiMinus onClick={() => { countProduct > 1 ? setCountProduct(countProduct - 1) : setCountProduct(1) }} />
                            <p>{countProduct}</p>
                            <IoMdAdd onClick={() => setCountProduct(countProduct + 1)} />
                        </div>
                        <div>
                            <IoBagCheckOutline />
                            <p>Thêm vào giỏ hàng</p>
                        </div>
                    </div>
                    <div className='DetailProduct_Info_Ship'>
                        <h2>Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên 200.000đ</h2>
                        <div>
                            <BiTimer />
                            <p>Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày</p>
                        </div>
                        <div>
                            <LuPackageCheck />
                            <p>Ở tỉnh thành khác nhận hàng từ 2-5 ngày</p>
                        </div>
                    </div>
                    <li className='DetailProduct_Info_Service'>
                        <ul><p>Đổi trả cực dễ chỉ cần có số điện thoại</p></ul>
                        <ul><p>60 ngày đổi trả vì bất kỳ lý do gì</p></ul>
                        <ul><p>Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày</p></ul>
                        <ul><p>Đến tận nơi nhận hàng trả, hoàn tiền trong 24h</p></ul>
                    </li>
                </div>
            </div>
    )
}

export default DetailProBuy
