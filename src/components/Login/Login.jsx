import React, { useContext } from 'react'

import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";

import '../../styles/Login/Login.css'
import { context } from '../../pages/Home';
function Login() {
    const setLoginState=useContext(context)
    return (
        <div className='Login_container'>
            <div className='body'>
                <div>
                    <div className='Login_Form'>
                        <h2>Đăng nhập</h2>
                        <p>Đăng nhập để không bỏ lỡ quyền lợi tích lũy và hoàn tiền cho bất kỳ đơn hàng nào</p>
                        <p>Đăng nhập hoặc đăng ký (miễn phí)</p>

                        <li>
                            <ul>
                                <img src="googleIcon.svg" alt="ErrorGoogle" />
                            </ul>
                            <ul>
                                <FaFacebookF />
                            </ul>
                        </li>

                        <div>
                            <hr></hr>
                            <p> Hoặc </p>
                            <hr></hr>
                        </div>

                        <form >
                            <input type="text" placeholder='Email/SĐT của bạn' />
                            <div>
                                <input type="password" placeholder='Mật khẩu' />
                                <FaRegEyeSlash />
                            </div>
                            <button>Đăng nhập</button>
                        </form>

                        <div className='Login_ChangePages'>
                            <a href="">Đăng ký tài khoản mới</a>
                            <a href="">Quên mật khẩu</a>
                        </div>

                    </div>

                    <div className='Login_Advertise'>
                        <img src="advertise.jpg" alt="" />
                    </div>

                    <IoMdClose onClick={()=>{setLoginState(false)}}/>
                </div>
            </div>
        </div>


    )
}

export default Login
