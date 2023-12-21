import React, { useState } from 'react';
import './SideBar.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExtensionIcon from '@mui/icons-material/Extension';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const SideBar = () => {

    const [menu,setMenu] = useState(false);

    console.log(menu)
  return ( 
    <div className='sideBar_container'>

      {/* ----------------------  MOBILE VIEW ICONS ONLY------------------- */}
     { menu ?<></>   : <div className='header_menu'>
            <div className='header_topMenu'>
            <div className='header_menu-icons' onClick={()=>setMenu(!menu)}> 
            <MenuIcon className='header_menu-icon'/> 
            </div> 

            <div className='header_mb-icons'>  
            <DashboardIcon className='sideBar_menuOne-icone' /> 
            </div> 
            <div className='header_mb-icons'> 
            <LocalFloristIcon className='sideBar_menuOne-icone' /> 
            </div> 
            <div className='header_mb-icons'> 
            <ExtensionIcon className='sideBar_menuOne-icone' /> 
            </div>
            <div className='header_mb-icons'>
            <SupportAgentIcon className='sideBar_menuOne-icone' />
            </div>
            <div className='header_mb-icons'>
            <LogoutIcon className='sideBar_menuOne-icone'/>
            </div>
               
            </div>
            <div className='header_bottomMenu'>
                
<NotificationsIcon className='sideBar_menuOne-icone' />
<AddIcon className='sideBar_menuOne-icone' />
            </div>
</div>}

{/* -----------------------------END------------------------------------ */}

{/* ----------------------------MOBILE VIEW ICON WITH ITS NAME------------------------------------- */}

{menu&&
<div className='sideBar_mb-subContaner'>
<CloseIcon  className='side_mb-closeIcon' onClick={()=>setMenu(!menu)}/>
     <div className='sideBar_profile'>

        <img src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' alt='profileImg' />
        <div className='sideBar_profile-username'>
        <text>Ram Mohan</text>
        <KeyboardArrowRightIcon className='sideBar_profile-arrow'/>
        </div>
        <text>rammohan@gmail.com</text>
    </div>

    <div className='sideBar_menus'>
        <div className='sideBar_menuOne' onClick={()=>setMenu(!menu)}>
            <DashboardIcon className='sideBar_menuOne-icone' />
            <text>Dashboard</text>
        </div>
        <div className='sideBar_menuOne' onClick={()=>setMenu(!menu)}>
            <LocalFloristIcon className='sideBar_menuOne-icone' />
            <text>Perks</text>
        </div>
        <div className='sideBar_menuOne' onClick={()=>setMenu(!menu)}>
            <ExtensionIcon className='sideBar_menuOne-icone' />
            <text>Addons</text>
        </div>
        <div className='sideBar_menuOne' onClick={()=>setMenu(!menu)}>
            <QuizIcon className='sideBar_menuOne-icone' />
            <text>FAQ</text>
        </div>
        <div className='sideBar_menuOne' onClick={()=>setMenu(!menu)}>
            <SupportAgentIcon className='sideBar_menuOne-icone' />
            <text>Support</text>
        </div>
        <div className='sideBar_menuOne' onClick={()=>setMenu(!menu)}>
            <LogoutIcon className='sideBar_menuOne-icone' />
            <text>Logout</text>
        </div>
        <div className='sideBar_mb-menuBottom'>
        <NotificationsIcon />
<AddIcon  />
        </div>
    </div>
</div>}

{/* ----------------------------END----------------------------------------------- */}

        <div className='sideBar_subContainer'>
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
    </div>
  )
}

export default SideBar