import React from 'react';
import './Dashboard.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { plan } from '../../data';

const Plan = () => {
  return (
    <div className='dashboard_planBoxs'>
    {plan.map((data)=>(
    <div className='dashboard_onePlanBoxs'>
  
    <text className='dashboard_onePlanBoxs-title'>{data.title}</text>
    <text className='dashboard_onePlanBoxs-price'>${data.price}/mo</text>
    <text className='dashboard_onePlanBoxs-discountPrice'>${data.discountPrice}/mo</text>
    <div className='dashboard_onePlanBoxs-button' style={{backgroundColor:data.color}}>
    <text>Get Started </text>
    <ArrowRightAltIcon  />
    </div>
  <div className='dashboard_onePlanBoxs-line'/>
  <text>What you'll get : </text>
  <div className='dashboard_onePlanBoxs-points'>
  <Person2OutlinedIcon/>
  <text>Upto {data.user} Users</text>
  </div>
  <div className='dashboard_onePlanBoxs-points'>
  <CloudUploadOutlinedIcon/>
  <text>Upto {data.storage}gb Storage</text>
  </div>
  <div className='dashboard_onePlanBoxs-points'>
  <EmailOutlinedIcon/>
  <text>{data.support}</text>
  </div>
  
  <div className='dashboard_onePlanBoxs-explore'>
    <text>EXPLORE FEATURES</text>
    <ArrowRightIcon className='dashboard_onePlanBoxs-exploreArrow' style={{color:data.color}}/>
    
  </div>
  
  </div>
    ))}
  </div>
  )
}

export default Plan