import React, { useContext, useState } from 'react'

import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';

import '../../styles/Login/Login.css'
import { context } from '../../App';
import { useForm } from 'react-hook-form';
import { getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Swal from 'sweetalert2';

function Login() {
    //url page useNavigate
    const UrlPageNavigate=useNavigate()
    //handle input of user
    const schema = yup.object({
        EmailUser: yup.string().email("Email không hợp lệ").required("Email không được bỏ trống"),
        PasswordUser: yup.string().min(8, "Mật khẩu ít nhất 8 ký tự").required("Password không được bỏ trống")
    })
    //useForm to store data of user
    const {register,handleSubmit,reset,formState:{errors}}=useForm({mode:'onChange',resolver:yupResolver(schema)})

   
    //Login account user of firebase
    const firebase=useContext(context)

    const loginUser=(data)=>
    {
        const auth=getAuth(firebase)
        signInWithEmailAndPassword(auth,data.EmailUser,data.PasswordUser)
        .then((useCredentials)=>
        {
            window.localStorage.setItem('User',JSON.stringify(useCredentials.user))
            Swal.fire({
                title: "Thanh công",
                text: "Bạn đã đăng nhập thành công",
                icon: "success",
              });
            setTimeout(()=>{
                UrlPageNavigate('/')
            },2000)
        })
        .catch((errors)=>
        {
            Swal.fire({
                title: "Thất bại",
                text: "Đăng nhập thất bại",
                icon: "error",
              });
        })
    }
    //register account user by google account
    const LoginUserbyGg = () => {
        const googleAuth = new GoogleAuthProvider()
        const auth = getAuth(firebase)
        signInWithPopup(auth, googleAuth)
            .then((result) => {
                Swal.fire({
                    title: "Thanh công",
                    text: "Bạn đã đăng nhập thành công",
                    icon: "success",
                });
                setTimeout(() => {
                    UrlPageNavigate('/')
                }, 2000)
            })
            .catch((errors) => {
                alert("That bai")
            })
    }

    //set state input password
    const [stateInputPassword,setStateInputPassword]=useState("password")

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

                        <form onSubmit={handleSubmit(loginUser)}>
                        <div>
                                <div>
                                    <input type="text" placeholder='Email/SĐT của bạn' {...register("EmailUser")} required autoComplete='off' />
                                </div>

                                <span>{errors.EmailUser?.message}</span>
                            </div>

                            <div>
                                <div>
                                    <input type={stateInputPassword} placeholder='Mật khẩu' {...register("PasswordUser")} required />
                                    {stateInputPassword == "password" ? <FaRegEyeSlash onClick={() => setStateInputPassword("text")} /> : <FaRegEye onClick={() => setStateInputPassword("password")} />}
                                </div>
                                <span>{errors.PasswordUser?.message}</span>
                            </div>

                            <button>Đăng nhập</button>
                        </form>

                        <div className='Login_ChangePages'>
                            <Link to={'/SignUp'}>Đăng ký tài khoản mới</Link>
                            <a href="">Quên mật khẩu</a>
                        </div>

                    </div>

                    <div className='Login_Advertise'>
                        <img src="advertise.jpg" alt="" />
                    </div>

                    <Link to={'/'}><IoMdClose/></Link>
                </div>
            </div>
        </div>


    )
}

export default Login
