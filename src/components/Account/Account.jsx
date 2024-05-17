import {React, useEffect,useState} from 'react'
import '../../styles/Account/Account.css'
import {useNavigate} from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Footer from '../Footer'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Account() {
    const navigate=useNavigate()
    //logout account user
  const logout = () => {
    window.localStorage.removeItem("User")
    navigate('/Login')
  }
  const [user,setUser]=useState({})
  //get current signed-in user
  useEffect(()=>{setUser(JSON.parse(window.localStorage.getItem("User")))},[])
  console.log(user)
  //track item of options are selected
  const handleSelectedItem=(event)=>{
    Array.from(document.getElementsByClassName("Account_Infor_Options")[0].childNodes).map((value)=>{
        value.classList.remove("SelectedItem")
    })
    event.target.classList.add("SelectedItem")
  }
  return (
        <div className='Account_container'>
            <div className='Account_NameUser'>
                <h2>Hi, {user?.displayName}</h2>
            </div>

            <div className='Account_Infor'>
                <ul className='Account_Infor_Options'>
                    <li className='SelectedItem' onClick={(event)=>handleSelectedItem(event)}>Lịch sử đơn hàng</li>
                    <li onClick={(event)=>handleSelectedItem(event)}>Lịch sử CoolCash</li>
                    <li onClick={(event)=>handleSelectedItem(event)}>Ví Voucher</li>
                    <li onClick={(event)=>handleSelectedItem(event)}>Sổ địa chỉ</li>
                    <li onClick={(event)=>handleSelectedItem(event)}>Đánh giá và phản hồi</li>
                    <li onClick={(event)=>handleSelectedItem(event)}>Chính sách & Câu hỏi thường gặp</li>
                    <li onClick={()=>{logout()}}>Đăng xuất</li>
                </ul>
                <div className='Account_Infor_User'>
                    <div>
                        <h2>Thông tin tài khoản</h2>
                        <p>Họ và tên: {user?.displayName}</p>
                        <p>Số điện thoại: {user?.PhoneUser!=null?user.Phone:"Chưa cập nhật!"}</p>
                        <p>Giới tính: Chưa cập nhật!</p>
                        <p>Ngày sinh: Chưa cập nhật!</p>
                        <p>Chiều cao: Chưa cập nhật!</p>
                        <p>Cân nặng: Chưa cập nhật!</p>
                        <button>CẬP NHẬT</button>
                    </div>

                    <div>
                        <h2>Thông tin đăng nhập</h2>
                        <p>Email:  {user?.email}</p>
                        <p>Mật khẩu:  **********</p>
                        <button>CẬP NHẬT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
