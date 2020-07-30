import React from 'react'
import './about_us.css'

import Component2 from './aboutus/component2'
import Component1 from './aboutus/component1'
import Component3 from './aboutus/component3'
import Footer from './footer'

const AboutUs=({profile_data})=>{
    
    return(
        <>
        <div className='mission_wrapper'>
                <Component1/>
            </div>
            <div className="team_title">
                <p>Meet The Team</p>
            </div>
            <br/>
            <br/>
                {/* <hr className="horizontal_line"/> */}
            <div className='profile_wrapper'>
                {
                    profile_data.map((each_data)=>{
                        return(
                            <Component2 each_profile={each_data} key={each_data.id}/>
                        )
                    })
                }
            </div>
            <div className="feature_wrapper">
                <Component3/>
            </div>
            <div className="footer_ref_about">
                <Footer/>
            </div>
            </>
    )
}
export default AboutUs;