import React, { useContext, useState } from 'react'
import '../../styles/SignUp/SignUp.css'

import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

import { context } from '../../App';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "firebase/auth"

import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2'
function SignUp() {

    //url pages
    const UrlPageNavigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    //handle required inputs
    const handleError = (data) => {
        const regexSDT = /[a-zA-Z]/
        if (regexSDT.test(data.PhoneUser) || data.PhoneUser.length < 10)
            alert("Số điện thoại không đúng" + data.PhoneUser)
        else {
            const regexEmail = new RegExp(/.+@gmail.com/)
            if (!regexEmail.test(data.EmailUser))
                alert("Email không đúng")
            else {
                if (data.PasswordUser.length < 8)
                    alert("Mật khẩu ít nhất 8 ký tự")
                else {
                    if (data.PasswordUser != data.PasswordVerify)
                        alert("Mật khẩu xác minh chưa đúng")
                    else
                        registerUser(data)
                }
            }
        }
    }


    //register account user to firebase 
    const Firebase = useContext(context)

    const registerUser = (data) => {
        const authF = getAuth(Firebase)
        createUserWithEmailAndPassword(authF, data.EmailUser, data.PasswordUser)
            .then((userCredential) => {
                //thanh cong
                const user = userCredential.user
                updateProfile(user, { displayName: data.NameUser, PhoneUser: data.PhoneUser })
                    .then(() => {
                        //thanh cong
                        Swal.fire({
                            title: "Thanh công",
                            text: "Bạn đã đăng nhập thành công",
                            icon: "success",
                        });
                        setTimeout(() => {
                            UrlPageNavigate('/Login')
                        }, 2000)

                    })
                    .catch((errors) => {
                        alert("Danh ky that bai:" + errors)
                    })
            })
            .catch((errors) => {
                const stringAlert = "";
                switch (errors.code) {
                    case "auth/email-already-in-use":
                        stringAlert = "Đăng ký thất bại! Email đã được sử dụng"
                    default:
                        alert("Danh ky that bai:" + errors.code)
                }

            })
        reset()
    }
    //register account user by google account
    const registerUserbyGg = () => {
        const googleAuth = new GoogleAuthProvider()
        const auth = getAuth(Firebase)
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

     //register account user by FaceBook account
     const registerUserbyFacebook = () => {
        const facebookAuth = new FacebookAuthProvider()
        const auth = getAuth(Firebase)
        signInWithPopup(auth, facebookAuth)
            .then((result) => {
                Swal.fire({
                    title: "Đăng ký",
                    text: "Bạn đã đăng ký thành công",
                    icon: "success",
                });
                setTimeout(() => {
                    UrlPageNavigate('/')
                }, 2000)
            })
            .catch((errors) => {
                alert("That bai"+errors.message)
            })
    }
    const [stateInput1, setStateInput1] = useState("password")
    const [stateInput2, setStateInput2] = useState("password")
    const changeTypePass = (action) => {
        if (action == "input1")
            stateInput1 == "password" ? setStateInput1("text") : setStateInput1("password")
        else
            stateInput2 == "password" ? setStateInput2("text") : setStateInput2("password")
    }
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
                                <img src="googleIcon.svg" alt="ErrorGoogle" onClick={registerUserbyGg} />
                            </ul>
                            <ul>
                                <FaFacebookF onClick={registerUserbyFacebook}/>
                            </ul>
                        </li>

                        <div>
                            <hr></hr>
                            <p> Hoặc </p>
                            <hr></hr>
                        </div>

                        <form onSubmit={handleSubmit(handleError)}>
                            <div>
                                <input type="text" placeholder='Tên của bạn' {...register("NameUser")} required />
                                <input type="text" placeholder='SĐT của bạn' {...register("PhoneUser")} required />
                            </div>

                            <input type="text" placeholder='Email/SĐT của bạn' {...register("EmailUser")} required />
                            <div>
                                <input type={stateInput1} placeholder='Mật khẩu' {...register("PasswordUser")} required />

                                {stateInput1 == "password" ? <FaRegEyeSlash onClick={(event) => changeTypePass("input1")} /> : <FaRegEye onClick={(event) => changeTypePass("input1")} />}
                            </div>

                            <div>
                                <input type={stateInput2} placeholder='Nhập lại mật khẩu' {...register("PasswordVerify")} required />
                                {stateInput2 == "password" ? <FaRegEyeSlash onClick={(event) => changeTypePass("input2")} /> : <FaRegEye onClick={(event) => changeTypePass("input2")} />}
                            </div>

                            <button>Đăng ký</button>
                        </form>

                        <div className='SignUp_ChangePages'>
                            <Link to={'/Login'}>Đăng nhập</Link>
                        </div>

                    </div>

                    <div className='SignUp_Advertise'>
                        <img src="advertise.jpg" alt="" />
                    </div>

                    <Link to={'/'}><IoMdClose /></Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
