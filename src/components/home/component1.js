import React from 'react'
import './component1.css'
import backImg from '../../background_images/back-img.png'
import company_logo from '../../background_images/company_logo_text.png'
const Component1 = ()=>{
    return(
        <div className="back">
        <img src={backImg} className='intro' alt='Img'/>
        <img className="logo_img" src={company_logo} alt="Img"/>
        <a href="https://play.google.com/store/apps/details?id=com.krishiji" target="blank"><div className="play-store_box"/></a>
        </div>
    )
}
export default Component1;