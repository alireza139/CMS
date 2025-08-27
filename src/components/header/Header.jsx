import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './Header.css'

export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <div className="left-head">
        DASHBOARD❤
      </div>

      <div className="right-head d-flex align-items-center">
        <div className="icon-container">
          <NotificationsIcon></NotificationsIcon>
          <span className="notifications-icon-badge">2</span>
        </div>

        <div className="icon-container">
          <LanguageIcon></LanguageIcon>
          <span className="notifications-icon-badge">2</span>
        </div>

        <div className="icon-container">
          <SettingsIcon></SettingsIcon>
        </div>

        <img src="cat.jpg" alt="user-avatar" className="user-avatar" />
      </div>
    </header>
  )
}
