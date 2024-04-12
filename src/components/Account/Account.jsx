import {React} from 'react'
import '../../styles/Account/Account.css'
import {useNavigate} from 'react-router-dom'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
function Account() {
    const navigate=useNavigate()
    //logout account user
  const logout = () => {
    window.localStorage.removeItem("User")
    navigate('/Login')
  }

    return (
        <>
        <Header/>
        <div className='Account_container'>
            <div className='Account_NameUser'>
                <h2>Hi, Nguyễn Thanh Thiệt</h2>
            </div>

            <div className='Account_Infor'>
                <ul className='Account_Infor_Options'>
                    <li>Lịch sử đơn hàng</li>
                    <li>Lịch sử CoolCash</li>
                    <li>Ví Voucher</li>
                    <li>Sổ địa chỉ</li>
                    <li>Đánh giá và phản hồi</li>
                    <li>Chính sách & Câu hỏi thường gặp</li>
                    <li onClick={()=>{logout()}}>Đăng xuất</li>
                </ul>
                <div className='Account_Infor_User'>
                    <div>
                        <h2>Thông tin tài khoản</h2>
                        <p>Họ và tên: </p>
                        <p>Số điện thoại</p>
                        <p>Giới tính: Chưa cập nhật!</p>
                        <p>Ngày sinh: Chưa cập nhật!</p>
                        <p>Chiều cao: Chưa cập nhật!</p>
                        <p>Cân nặng: Chưa cập nhật!</p>
                        <button>CẬP NHẬT</button>
                    </div>

                    <div>
                        <h2>Thông tin đăng nhập</h2>
                        <p>Email: </p>
                        <p>Mật khẩu: </p>
                        <button>CẬP NHẬT</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Account
