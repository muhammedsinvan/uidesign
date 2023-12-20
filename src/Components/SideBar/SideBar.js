import React from 'react';
import './SideBar.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExtensionIcon from '@mui/icons-material/Extension';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
  return (
    <div className='sideBar_container'>
    <div className='sideBar_profile'>
        <img src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' alt='profileImg' />
        <div className='sideBar_profile-username'>
        <text>Ram Mohan</text>
        <KeyboardArrowRightIcon className='sideBar_profile-arrow'/>
        </div>
        <text>rammohan@gmail.com</text>
    </div>

    <div className='sideBar_menus'>
        <div className='sideBar_menuOne'>
            <DashboardIcon className='sideBar_menuOne-icone' />
            <text>Dashboard</text>
        </div>
        <div className='sideBar_menuOne'>
            <LocalFloristIcon className='sideBar_menuOne-icone' />
            <text>Perks</text>
        </div>
        <div className='sideBar_menuOne'>
            <ExtensionIcon className='sideBar_menuOne-icone' />
            <text>Addons</text>
        </div>
        <div className='sideBar_menuOne'>
            <QuizIcon className='sideBar_menuOne-icone' />
            <text>FAQ</text>
        </div>
        <div className='sideBar_menuOne'>
            <SupportAgentIcon className='sideBar_menuOne-icone' />
            <text>Support</text>
        </div>
    </div>
    <div className='sideBar_logout'>
        <text>Logout</text>
        <LogoutIcon />
    </div>
    </div>
  )
}

export default SideBar