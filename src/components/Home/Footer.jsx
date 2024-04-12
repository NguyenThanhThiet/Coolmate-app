import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import '../../styles/Home/Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='Footer_container'>
            <div className='Footer_Banner'>
                <h2>Tham gia COOLCLUB - Nhận ngay Voucher 15% + Hoàn tiền khi mua sắm</h2>
                <div>
                    <Link to={'/Login'}>ĐĂNG KÝ MIỄN PHÍ hoặc ĐĂNG NHẬP</Link>
                    <Link to={'/Login'}>Tìm hiểu đặc quyền Hội viên CoolClub</Link>
                </div>
            </div>
            <div className='Footer_body'>
                <div className='Footer_Information'>
                    <li>
                        <ul>
                            <h2>COOLMATE lắng nghe bạn</h2>
                            <p>Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa</p>
                            <p>Đóng góp ý kiến</p>
                        </ul>
                        <ul>
                            <div>
                                <FaPhone />
                                <div>
                                    <p>Hotline</p>
                                    <h2>1900.272737 - 028.7777.2737 </h2>
                                    <h2>(8:30 - 22:00)</h2>
                                </div>

                            </div>
                            <div>
                                <MdEmail />
                                <div>
                                    <p>Email</p>
                                    <h2>Cool@coolmate.me</h2>
                                </div>
                            </div>
                        </ul>
                        <ul>
                            <li>
                                <ul>
                                    <FaFacebookF />
                                </ul>
                                <ul>
                                    <SiZalo />
                                </ul>
                                <ul>
                                    <FaTiktok />
                                </ul>
                                <ul>
                                    <FaYoutube />
                                </ul>
                                <ul>
                                    <FaInstagram />
                                </ul>
                            </li>
                        </ul>
                    </li>
                </div>

                <div>
                    <li>
                        <ul>
                            <h2>COOLCLUB</h2>
                            <p>Đăng ký thành viên</p>
                            <p>Ưu đãi&Đặc quyền</p>
                        </ul>
                        <ul>
                            <div>
                                <h2>CHÍNH SÁCH</h2>
                                <p>Chính sách đổi trả 60 ngày</p>
                                <p>Chính sách khuyển mãi</p>
                                <p>Chính sách bảo mật</p>
                                <p>Chính sách giao hàng</p>
                            </div>
                            <div>
                                <h2>COOLMATE.ME</h2>
                                <p>Lịch sử thay đổi website</p>
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <h2>CHĂM SÓC KHÁCH HÀNG</h2>
                                <p>Trải nghiệm mua sắm 100% hài lòng</p>
                                <p>Hỏi đáp - FAQs</p>
                            </div>
                            <div>
                                <h2>KIẾN THỨC MẶC ĐẸP</h2>
                                <p>Hướng dẫn chọn size</p>
                                <p>Blog</p>
                                <p>Group mặc đẹp sống chất</p>
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <h2>TÀI LIỆU - TUYỂN DỤNG</h2>
                                <p>Tuyển dụng</p>
                                <p>Đăng ký bản quyền</p>
                            </div>
                            <div>
                                <h2>VỀ COOLMATE</h2>
                                <p>Coolmate 101</p>
                                <p>DVKH xuất sắc</p>
                                <p>Câu chuyện về Coolmate</p>
                                <p>Nhà máy</p>
                                <p>Care & Share</p>
                            </div>
                        </ul>
                        <ul>
                            <h2>ĐỊA CHỈ LIÊN HỆ</h2>
                            <p>Văn phòng Hà Nội: Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng Hưng, Phường Phúc La, Quận Hà Đông, RP Hà Nội</p>
                            <p>Văn phòng TP HCM: Lầu 1, Số 163 Trần Trong Cung, Phường Tân Thuận Đông, Quận 7, Tp.Hồ Chí Minh</p>
                        </ul>
                    </li>
                </div>
                <div>
                    <div>
                        <h2>@ CÔNG TY TNHH FASTECH ASIA</h2>
                        <p>Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.</p>
                    </div>
                    <li>
                        <ul>
                            <img src="LogoBussiness/logo1.png" alt="" />
                        </ul>
                        <ul>
                            <img src="LogoBussiness/logo2.png" alt="" />
                        </ul>
                        <ul>
                            <img src="LogoBussiness/Logo3.webp" alt="" />
                        </ul>
                        <ul>
                            <img src="LogoBussiness/Logo4.webp" alt="" />
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Footer
