import React from 'react';
import './Header.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = () => {
  return (
    <div className='header_container'>

     

        <div className='header_logo'>
            <img src='https://png.pngtree.com/png-vector/20220701/ourmid/pngtree-business-corporate-letter-p-logo-design-vector-png-image_5475037.png' alt='logImg'/>
        </div>
        <div className='header_content'>
            <div className='header_content-detail'>
            <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg?size=948:533' alt='logImg'/>
             <text>XYZ Enterprises Pvt.ltd</text>
            </div>
            <div className='header_content-arrow'>
                <KeyboardArrowDownIcon className='header_content-arrow-icon' />
            </div>

        </div>

    </div>
  )
}

export default Header 