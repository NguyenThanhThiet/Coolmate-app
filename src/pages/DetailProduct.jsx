import React, { useEffect, useState } from 'react'

import '../styles/DetailPro/DetailPro_Buy.css'
import axios from 'axios'
import Header from '../components/Home/Header';
import DetailProBuy from '../components/DetailPro/DetailProBuy';
export const databaseContextDetail = React.createContext()
function DetailProduct() {
    const [database, setDatabase] = useState([]);
    useEffect(() => {
        axios({ method: "GET", url: "https://65f51306f54db27bc0229836.mockapi.io/product" })
            .then((reponse) => {
                setDatabase(reponse.data)
                console.log(reponse.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <databaseContextDetail.Provider value={database}>
            <div className='DetailProduct_Container'>
                <Header />
                <DetailProBuy />
            </div>
        </databaseContextDetail.Provider>
    )
}

export default DetailProduct
