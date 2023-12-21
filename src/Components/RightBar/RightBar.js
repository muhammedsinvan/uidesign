import React from 'react';
import "./RightBar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';

const RightBar = () => {
  return (
    <div className='rightBar_container'>
        <div className='rightBar_container-notification'>
        <NotificationsIcon  className='rightBar_container-notificationIcon'/>
        </div>

        <div className='rightBar_container-add'>
            <AddIcon  className='rightBar_container-addIcon'/>
        </div>
  
    </div>
  )
}

export default RightBar