import React from 'react'
import '../../styles/SignUp/SignUp.css'

import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
    return (
        <div className='SignUp_container'>
            <div className='body'>
                <div>
                    <div className='SignUp_Form'>
                        <h2>Đăng ký</h2>
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
                            <div>
                                <input type="text" placeholder='Tên của bạn' />
                                <input type="text" placeholder='SĐT của bạn' />
                            </div>

                            <input type="text" placeholder='Email/SĐT của bạn' />
                            <div>
                                <input type="password" placeholder='Mật khẩu' />
                                <FaRegEyeSlash />
                            </div>

                            <div>
                                <input type="password" placeholder='Nhập lại mật khẩu' />
                                <FaRegEyeSlash />
                            </div>

                            <button>Đăng ký</button>
                        </form>

                        <div className='SignUp_ChangePages'>
                            <a href="../Login/Login.jsx">Đăng nhập</a>
                        </div>

                    </div>

                    <div className='SignUp_Advertise'>
                        <img src="advertise.jpg" alt="" />
                    </div>

                    <IoMdClose />
                </div>
            </div>
        </div>
    )
}

export default SignUp
