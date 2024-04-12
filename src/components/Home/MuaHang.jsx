import React from 'react'
import '../../styles/Home/MuaHang.css'
import { useForm } from 'react-hook-form'
function MuaHang() {
  const {register,handleSubmit,reset}=useForm()
  return (
    <div>
      <form>
        <input type="text" placeholder='Họ và Tên' required {...register("nameUser")}/>
        <input type="text" placeholder='Số điện thoại' required {...register("phoneUser")}/>
        <input type="text" placeholder='Địa chỉ' required {...register("addressUser")}/>
        <input type="text" placeholder='Lời nhắn cho shop' required {...register("message")}/>
     </form>
    </div>
  )
}

export default MuaHang
