import {React,useState,useContext} from 'react'
import '../../styles/Home/Search.css'
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { contextData } from '../../App';
function Search() {
  
  const database = useContext(contextData)

    //render ui search
  const renderUiSearch = (flag) => {
    if (flag == 0) {
      document.getElementsByClassName("Header_container")[0].classList.add("Header_hidden")
      document.getElementsByClassName("Header_UI_Search")[0].classList.remove("Header_hidden")
    }
    else {
      document.getElementsByClassName("Header_container")[0].classList.remove("Header_hidden")
      document.getElementsByClassName("Header_UI_Search")[0].classList.add("Header_hidden")
    }
  }
  //state store key search
  const [keySearch, setKeySearch] = useState("")
  return (
    <div className='Header_UI_Search Header_hidden'>
        <div className='Header_UI_Search_Infomation'>
          <div>
            <input type="text" placeholder='Tìm kiếm sản phẩm...' onChange={(event) => {
              document.getElementsByClassName("Header_UI_Search_Result_History")[0].classList.add("Header_hidden")
              document.getElementsByClassName("Header_UI_Search_Result_Current")[0].classList.remove("Header_hidden")
              setKeySearch(event.target.value)
            }} />
            <IoSearch />
          </div>
          <IoMdClose onClick={() => {
            document.getElementsByClassName("Header_UI_Search_Result_History")[0].classList.remove("Header_hidden")
            document.getElementsByClassName("Header_UI_Search_Result_Current")[0].classList.add("Header_hidden")
            return renderUiSearch(1)
          }} />
        </div>
        <div className='Header_UI_Search_Result'>
          <div className='Header_UI_Search_Result_History'>
            <div>
              <p>Từ khóa nổi bật ngày hôm nay</p>
              <li>
                <ul>Tập gym</ul>
                <ul>Áo Basic</ul>
                <ul>Excool</ul>
                <ul>Jeans</ul>
                <ul>Chạy Bộ</ul>
                <ul>Gym</ul>
                <ul>Polo</ul>
              </li>
            </div>
            <div>
              <p>Sản phẩm xã xem gần đây</p>
              <li>
                {
                  database?.map((value, index) => {
                    if (index >= 0 && index < 4)
                      return (<ul key={index}>
                        <img src={value.img} alt="error" />
                        <p>{value.title}</p>
                      </ul>)
                  })
                }
              </li>
            </div>
          </div>
          <div className='Header_UI_Search_Result_Current Header_hidden'>
            <p>Sản phẩm</p>
            <li>
              {
                keySearch != "" ? database.filter((value, index) => value.title.toLowerCase().includes(keySearch.toLowerCase()) == true)?.map((value, index) => {
                  if (index < 4)
                    return (<ul key={index}>
                      <div>
                        <h2>{value.state}</h2>
                        <img src={value.img} alt="" />
                        {value.evaluate != "" ? <div>
                          <p>{value.evaluate}</p>
                          <FaStar />
                          <p>({value.pushchase})</p>
                        </div> : ""
                        }
                      </div>

                      <div>
                        <li className='Product_Color'>
                          <ul>
                            <p></p>
                          </ul>
                          <ul>
                            <p></p>
                          </ul>
                        </li>
                        <p className='Product_Title'>{value.title}</p>
                        <p className='Product_Category'>{value.material}</p>
                        <div>
                          <h2 className='Product_Price'>{`${value.price} đ`}</h2>
                          <div>
                            <h2>{value.priceOrigin-value.price!=0?(`${value.priceOrigin} đ`):""}</h2>
                            <hr />
                          </div>
                          <h2>{value.discount!=0?(`- ${value.discount}%`):""}</h2>
                        </div>
                      </div>
                    </ul>)
                }) : <p>Không tìm thấy kết quả</p>
              }
            </li>
          </div>
        </div>
      </div>
  )
}

export default Search
