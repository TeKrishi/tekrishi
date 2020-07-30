import React from 'react'
import Footer from './footer'
import './features.css'
import step1Img from '../background_images/step1.png'
import step2Img from '../background_images/step2.png'
import step3Img from '../background_images/step3.png'
import step4Img from '../background_images/step4.png'
import step5Img from '../background_images/step5.png'

const Features=()=>{
    return(
        <>
            <div className="f_wrapper">
                <br/>
                <br/>
                <div className="step1">
                    <p className="step1_bullet">1.</p>
                    <p className="step1_title">Simple Language</p>
                    <p className="step1_text">Entire application uses simple Hindi. This provides farmers great ease of access to every feature of the app.</p>
                    <img src={step1Img} className="step1_img" alt="Img" id="s1"/>
                </div>
                <br/>
                <br/>
                <div className="step2">
                <p className="step2_bullet">2.</p>
                    <p className="step2_title">Easy Sign-In</p>
                    <p className="step2_text">Provides simple signup and signin using phone OTP. There is no need of password. SignIn is done through phone OTP.</p>
                    <img src={step2Img} className="step2_img" alt="Img" id="s2"/>
                </div>
                <br/>
                <br/>
                <div className="step1">
                    <p className="step1_bullet">3.</p>
                    <p className="step1_title">Simple Interface</p>
                    <p className="step1_text">Provides better user interaction through minimal typing. Almost all entries from the user are through graphical UI.</p>
                    <img src={step3Img} className="step1_img" alt="Img" id="s3"/>
                </div>
                <br/>
                <br/>
                <div className="step2">
                <p className="step2_bullet">4.</p>
                    <p className="step2_title">Multirole App</p>
                    <p className="step2_text">Single platform for both service-providers and farmers. One can register equipments and be the customer for other equipments.</p>
                    <img src={step4Img} className="step2_img" alt="Img" id="s4"/>
                </div>
                <br/>
                <br/>
                <div className="step1">
                    <p className="step1_bullet">5.</p>
                    <p className="step1_title">Miscellaneous</p>
                    <p className="step1_text">Provides in-app calling, records of past orders and bookings, edit section to edit and delete registration</p>
                    <img src={step5Img} className="step1_img" alt="Img" id="s5"/>
                </div>
                <br/>
                <br/>
            </div>
            <div className="footer_ref_features">
                <Footer/>
            </div>
        </>
    )
}
export default Features;