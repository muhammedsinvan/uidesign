import React from 'react';
import './Dashboard.css';
import FreePlan from './FreePlan';
import Plan from "./Plan"

const Dashboard = () => {
  return (
    <div className='dashboard_container'>

    <div className='dashboard_title'>
      <text>Choose a plan that's just right for you !</text>
    </div>

<div className='dashboard_slideButton'>
  <div className='dashboard_slideButton-item'>
  <text>Monthly</text>
  <text>Annually</text>
  </div>
</div>

<Plan />

<FreePlan />
<div className='dashboard_footer'>
  <text>
    * Some unique features are provided as add-ons with individual points for each features.
  </text>
</div>

</div> 
  
  )
}

export default Dashboard