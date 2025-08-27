import React from 'react'
import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimeLineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutloneIcon from '@mui/icons-material/MailOutline'
import DynamicFeed from '@mui/icons-material/DynamicFeed'
import { ChatBubbleOutline } from '@mui/icons-material'
import { WorkOutline, Report, MessageOutlined } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className='sideBar ps-2 pt-2'>
            {/* Dashboard */}
            <div className="sideBar-wrapper">
                <h6 className='sideBar-title m-0'>Dashboard</h6><hr className='mt-0' />
                <ul className="sideBar-list">
                    <li className='sideBar-list-item'>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>
                            <TimeLineIcon />
                            Home
                        </NavLink>
                    </li>
                    <li className='sideBar-list-item'>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/analytics'>
                            <LineStyleIcon />
                            Analytics
                        </NavLink>
                    </li>
                    <li className='sideBar-list-item'>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/sales'>
                            <TrendingUpIcon />
                            Sales
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Quick Menu */}
            <div className="sideBar-wrapper">
                <h6 className='sideBar-title m-0'>Quick Menu</h6><hr className='mt-0' />
                <ul className="sideBar-list">
                    <li className="sideBar-list-item">
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/users'>
                            <PermIdentityIcon />
                            Users
                        </NavLink>
                    </li>
                    <li className="sideBar-list-item">
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/newUser'>
                            <PermIdentityIcon />
                            New User
                        </NavLink>
                    </li>
                    <li className="sideBar-list-item">
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/products'>
                            <BarChartIcon />
                            Products
                        </NavLink>
                    </li>
                    <li className="sideBar-list-item">
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/transactions'>
                            <MailOutloneIcon />
                            Transaction
                        </NavLink>
                    </li>
                    <li className="sideBar-list-item">
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/reports'>
                            <Report />
                            Reports
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Notifications */}
            <div className="sideBar-wrapper">
                <h6 className='sideBar-title m-0'>Notifications</h6><hr className='mt-0' />
                <ul className="sideBar-list">
                    <li className="sideBar-list-item">
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/mail'>
                            <DynamicFeed />
                            Mail
                        </NavLink>
                    </li>
                    <li className="sideBar-list-item">
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/feedback'>
                            <ChatBubbleOutline />
                            Feedback
                        </NavLink>
                    </li>
                    <li className="sideBar-list-item">
                        <NavLink className={({ isActive }) => `special-link ${isActive ? 'active' : ''}`} to='/messages'>
                            <MessageOutlined />
                            <span className="sideBar-notifications-badge">9</span>
                            Messages
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
