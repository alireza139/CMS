import React, { useState } from 'react'
import "./Product.css"
import Chart from "../../components/chart/Chart"
import { useParams, Navigate } from 'react-router-dom'
import { productsInfo } from '../../CmsDB'


export default function Product() {
    let [productsInf] = useState(productsInfo)
    let params = useParams()

    // یافتن محصول تکی موردنظر
    let mainProduct = productsInf.find(p => p.id == params.productID)

    // اگر محصول پیدا نشد → برو به صفحه 404
    if (!mainProduct) {
        return <Navigate to="../error404/Error404" replace />
    }

    // کل فروش محصول
    let allSell = mainProduct.saleInfo.reduce((acc, item) => acc + item.sale, 0)

    return (
        <div className='product-page'>
            <div className="leftSection">
                <Chart grid title="Sale Chart" data={mainProduct.saleInfo} datakey="sale" />
            </div>
            <div className="rightSection">
                <img src={mainProduct.imgSrc} alt="product image" className='product-image' />
                <div className='product'>
                    <label>Id:</label>
                    <div className="product-id">00{mainProduct.id}</div>
                </div>
                <div className='product'>
                    <label>Name:</label>
                    <div className="product-name">{mainProduct.name}</div>
                </div>
                <div className='product'>
                    <label>Count:</label>
                    <div className="product-count">{mainProduct.count}</div>
                </div>
                <div className='product'>
                    <label>Price:</label>
                    <div className="product-price">{mainProduct.price}$</div>
                </div>
                <div className='product'>
                    <label>All Sells:</label>
                    <div className="product-price">{allSell}$</div>
                </div>
            </div>
        </div>
    )
}
