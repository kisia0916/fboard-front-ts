import React from 'react'
import "./LeftBar.css"
import PageButtons from './Buttons/PageButtons'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PagePostButtons from './Buttons/PagePostButtons';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import UserInfoSpace from './UserInfo/UserInfoSpace';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
function LeftBar() {
  return (
    <div className='LeftBarMain'>
      <div className='LeftBarMainWarpp'>
        <div className='PageTitle'>
          <span className='PageTitleText'>FBoard</span>
        </div>
        <PageButtons buttonText='Home' icon={<HomeIcon style={{fontSize:"175%"}} className='LeftButtonIcon'/>} />
        <PageButtons buttonText='Notification' icon={<NotificationsIcon style={{fontSize:"175%"}} className='LeftButtonIcon'/>} />
        <PageButtons buttonText='Friends' icon={<PeopleAltIcon style={{fontSize:"175%"}} className='LeftButtonIcon'/>} />
        <PageButtons buttonText='JoinedThread' icon={<DownloadDoneIcon style={{fontSize:"175%"}} className='LeftButtonIcon'/>} />
        <PageButtons buttonText='Profile' icon={<AccountBoxIcon style={{fontSize:"175%"}} className='LeftButtonIcon'/>} />


        <div className='LeftSpaceLine'></div>
        <PagePostButtons/>
      </div>
      <UserInfoSpace userName={"fumi"}/>
    </div>
  )
}

export default LeftBar