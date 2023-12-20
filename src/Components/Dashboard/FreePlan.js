import React from 'react';
import './Dashboard.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { freeplan } from '../../data';

const FreePlan = () => {
  return (
    <div className='freeplan_container'>

{freeplan.map((data)=>(
      <div className='freeplan_box'>

      <div className='freeplan_box-left'>
        <text className='freeplan_box-leftBadge' style={{backgroundColor:data.color}}>{data.badge}</text>
        <text className='freeplan_box-leftTitle'>{data.title}</text>
        <p className='freeplan_box-leftDesc'>{data.desc}</p>
        <div className='freeplan_box-leftbutton' style={{backgroundColor:data.color}} >
          <text >{data.button} </text>
          <ArrowRightAltIcon  />
          </div>
      </div>
      
      <div className='freeplan_box-right'>
        <text>What you'll get : </text>
        {data.user&&<div className='freeplan_box-rightPoint' >
      <Person2OutlinedIcon />
      <text> {data.user}</text>
        </div>}
        {data.storage &&<div className='freeplan_box-rightPoint' >
      <CloudUploadOutlinedIcon />
      <text> {data.storage}</text>
        </div>}
        {data.support&&<div className='freeplan_box-rightPoint' >
      <EmailOutlinedIcon />
      <text>{data.support}</text>
        </div>}
      
       { data.done&&<div className='freeplan_box-rightPoint' >
      <DoneAllIcon />
      <text>{data.done}</text>
        </div>}
      
      </div>
            </div>
))}




    </div>
  )
}

export default FreePlan