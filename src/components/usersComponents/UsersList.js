import React, { useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { usersInfo } from '../../CmsDB';
import "./UsersList.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function UsersList() {
    const [usersInf, setUsersInf] = useState(usersInfo)

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 50
        },
        {
            field: "userName",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <Link to="/" className="userList-item">
                        <div className='position-relative'>
                            <img src="cat.jpg" className='userAva' />
                            <div className={`position-absolute ${params.row.status === "active" ? "user-status-active" : "user-status-deactive"}`}></div>
                            <span className="user-name">{params.row.userName}</span>
                        </div>
                    </Link>
                )
            }
        },
        {
            field: "email",
            headerName: "Email",
            width: 300
        },
        {
            field: "status",
            headerName: "Status",
            width: 150
        },
        {
            field: "transaction",
            headerName: "Transaction",
            width: 150
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='d-flex justify-content-evenly h-100 align-items-center'>
                        <Link to={`/user/${params.row.id}`}>
                            <EditIcon onClick={() => handleEdit(params.row.id)} style={{ cursor: 'pointer' }} />
                        </Link>
                        <DeleteIcon onClick={() => handleDelete(params.row.id)} style={{ cursor: 'pointer' }} />
                    </div>
                )
            }
        }
    ]

    const handleDelete = (id) => {
        setUsersInf(usersInf.filter(user => user.id !== id));
    }

    const handleEdit = (id) => {
        console.log("Edit user with id:", id);
    }

    return (
        <Paper className='mx-3 mt-5' sx={{ height: 400 }} elevation={3}>
            <DataGrid
                rows={usersInf}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 8, 10]}
            />
        </Paper>
    )
}
