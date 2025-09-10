import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import "./ProductsList.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CuModal from '../../components/customModal/CuModal'
import { Button } from 'react-bootstrap';


export default function ProductsList() {
    const [productslist, setProductslist] = useState([
        {
            id: 1,
            name: "product-1",
            price: 152,
            imgSrc: "/coats/coat1.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 2,
            name: "product-2",
            price: 555,
            imgSrc: "/coats/coat2.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 3,
            name: "product-3",
            price: 140,
            imgSrc: "/coats/coat3.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 4,
            name: "product-4",
            price: 495,
            imgSrc: "/coats/coat4.webp",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 5,
            name: "product-5",
            price: 120,
            imgSrc: "/coats/coat5.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 6,
            name: "product-6",
            price: 184,
            imgSrc: "/coats/coat6.webp",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 7,
            name: "product-7",
            price: 271,
            imgSrc: "/coats/coat1.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 8,
            name: "product-8",
            price: 350,
            imgSrc: "/coats/coat2.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
    ])
    const [chosenProduct, setChosenProduct] = useState(null)
    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
            headerAlign: "center",   // عنوان وسط‌چین
            align: "center",         // محتوای سلول هم وسط‌چین        
            renderCell: (params) => {
                return (
                    <div>{"00" + params.row.id}</div>
                )
            }
        },
        {
            field: "name",
            headerName: "Name",
            flex: 3,
            headerAlign: "center",   // عنوان وسط‌چین
            align: "center",         // محتوای سلول هم وسط‌چین
            renderCell: (params) => {
                return (
                    <Link to={`/Product/${params.row.id}`} className="userList-item">
                        <img src={params.row.imgSrc} className='product-img' />
                        <span className="user-name">{params.row.name}</span>
                    </Link>
                )
            }
        },
        {
            field: "count",
            headerName: "Count",
            flex: 3,
            headerAlign: "center",   // عنوان وسط‌چین
            align: "center",         // محتوای سلول هم وسط‌چین
        },
        {
            field: "price",
            headerName: "Price",
            flex: 3,
            headerAlign: "center",   // عنوان وسط‌چین
            align: "center",         // محتوای سلول هم وسط‌چین
            renderCell: (params) => {
                return (
                    <div>{params.row.price + "$"}</div>
                )
            }
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 3,
            headerAlign: "center",   // عنوان وسط‌چین
            align: "center",         // محتوای سلول هم وسط‌چین
            renderCell: (params) => {
                return (
                    <div className='d-flex justify-content-evenly h-100 align-items-center'>
                        <CuModal
                            innerBtn={<EditIcon></EditIcon>}
                            modalMode="edit"
                            productslist={productslist}
                            chosenProduct={params.row}
                            onReceive={receiveProductInfo}>
                        </CuModal>
                        <DeleteIcon onClick={() => deleteHandler(params.row.id)} style={{ cursor: 'pointer' }} />
                    </div>
                )
            }
        }
    ]

    // ِelete a product from the list
    const deleteHandler = (id) => {
        if (window.confirm("آیا مطمئنی می‌خوای این محصول رو حذف کنی؟")) {
            setProductslist(productslist.filter(product => product.id !== id));
        }
    }

    // receive a product(edited or new) from the CuModal component
    const receiveProductInfo = (productInfo) => {
        // Update existing product
        if (productInfo.id) {
            setProductslist(productslist.map(p => p.id === productInfo.id ? productInfo : p));
        }

        // add a new product
        else {
            setProductslist([...productslist, {
                id: productslist.length + 1,
                name: productInfo.name,
                price: productInfo.price,
                count: productInfo.count,
                imgSrc: productInfo.imgSrc
            }]);
        }
    }

    useEffect(() => {
        console.log(productslist);
    }, [productslist])



    return (
        <>
            <CuModal
                innerBtn={<Button variant="primary" className='mt-3 ms-3'>Add a new product</Button>}
                modalMode={"add"}
                productslist={productslist}
                onReceive={receiveProductInfo}>

            </CuModal>
            <Paper className='mx-3 mt-4' sx={{ height: 500 }} elevation={3}>
                <DataGrid
                    rows={productslist}
                    columns={columns}
                    rowHeight={80}   // ارتفاع هر سطر
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions={[5, 8, 10]}
                />
            </Paper>
        </>
    )
}
