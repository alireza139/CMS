import React, { useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { productsInfo } from '../../CmsDB';
import "./ProductsList.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ProductsList() {
    const [productsInf, setproductsInf] = useState(productsInfo)

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
                    <Link to="/" className="userList-item">
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
                        <Link to={`/product/${params.row.id}`}>
                            <EditIcon onClick={() => handleEdit(params.row.id)} style={{ cursor: 'pointer' }} />
                        </Link>
                        <DeleteIcon onClick={() => handleDelete(params.row.id)} style={{ cursor: 'pointer' }} />
                    </div>
                )
            }
        }
    ]

    const handleDelete = (id) => {
        if (window.confirm("آیا مطمئنی می‌خوای این محصول رو حذف کنی؟")) {
            setproductsInf(productsInf.filter(product => product.id !== id));
        }
    }

    const handleEdit = (id) => {
        console.log("Edit user with id:", id);
    }

    return (
        <Paper className='mx-3 mt-4' sx={{ height: 600 }} elevation={3}>
            <DataGrid
                rows={productsInf}
                columns={columns}
                rowHeight={80}   // ارتفاع هر سطر
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 8, 10]}
            />
        </Paper>
    )
}
