import React from 'react'
import backImg from '../../background_images/phone_app.png'
import logoImg from '../../background_images/test_pic.png'
import quoteImg from '../../background_images/quote.png'
import './component4.css'
const Component4=()=>{
    return(
        <>
        <div className="test_title">
                <p>Testimonials</p>
            </div>
            <hr className="horiz_line"/>
        <div className="test_div">
            <img className="test_img" src={backImg} alt="img"/>
            <img className="test_logo" src={logoImg} alt="img"/>
            <p className="test_heading">Ravi Verma</p>
            <p className="test_text">
            " This app provided very good platform for renting my tractor. Earlier I was could reach only a small number of people.Although lockdown had deep imapct, 
            I hope it will be very beneficial in upcoming Rabi Season. "
            </p>
            <img className="quote_logo" src={quoteImg} alt="img"/>
        </div>    
        </>
    )
}
export default Component4;