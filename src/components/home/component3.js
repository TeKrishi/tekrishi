import React from 'react'
import './component3.css'
import Video from '../../background_images/krishi_sevak_logo.png'
import {NavLink} from 'react-router-dom'

const Component3 =()=>{
    return(
        <div className="appl_div">
            <div className="appl_flex">
            <img className="appl_Video" src={Video} alt="img"/>
            <div className="appl_detail">
                <p className="appl_title"><b>Krishi Sevak</b></p>
                <p className="appl_text">Krishi Sevak is an app for the farmers who can't afford tractor-trolley, levellers,cultivators,harvestors on their own. 
                This app provides platform for service providers to add their farming eqipments they are having with them. 
                This can be used by farmers on customer side to book the services of service providers.
                Currently, payment is CASH mode where the farmer directly pays to the service provider. 
                This is a prototype app currently running in villages near Ayodhya. 
                For more details visit, <NavLink style={{color: 'blue', textDecoration: 'none'}} exact to="/features">Features</NavLink>
</p>
            </div>
                
            </div>
        </div>
    )
}
export default Component3;