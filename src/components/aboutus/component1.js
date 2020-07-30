import React from 'react'
import backImg from '../../background_images/back-img.png'
import logoImg from '../../background_images/logo.png'
import company_logo from '../../background_images/company_logo_text.png'
import './component1.css'
const Component1=()=>{
    return(
        <div className="mission_div">
            <img className="mission_img" src={backImg} alt="img"/>
            <img className="company_img" src={company_logo} alt="Img"/>
            <a href="https://play.google.com/store/apps/details?id=com.krishiji" target="blank"><div className="play-store_frame"/></a>
            <img className="mission_logo" src={logoImg} alt="img"/>
            <p className="mission_heading">Our Mission</p>
            <p className="mission_text"><b>Krishi Sevak is a tractor and farm equipments rental app.</b>It is based on the concept of shared ecomony where one who has the equipments
            rents to the farmer.It aims at raising the level of mechanization in farming through the cost effective use of technology and a strong network to make 
            farm mechanization easily accessible, affordable and reachable to farmers.Currently it is running as a prototype in the district of Ayodhya,Uttar Pradesh.</p>
        </div>    
    )
}
export default Component1;