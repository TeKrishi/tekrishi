import React from 'react'
import './component3.css'
import ecell_logo from '../../background_images/ecell.png'
const Component3=()=>{
    return(
        <div className="feature_main">
            <p className="feature_title"><b>As Featured In:</b></p>
            <div className="feature_flex">
            <a className="ecell_link" href="https://ecell.iiit.ac.in/summerup/" target="blank"><img className="ecell_img" src={ecell_logo} alt="Img"/></a>
            <div className="event_detail">
                <p className="event_title"><b>SummerUP</b></p>
                <p className="event_text"><b>50-days long event by E-Cell,in collaboration with OSDG IIIT-H.</b>
                It aimed at bringing up on a project idea which has the potential to solve a problem 
                and around which a sustainable startup can be built.Further within
                these 50-days,forming a team 
                and implementing the technologies related
                 to it under the guidance of a mentor.</p>
            </div>
            </div>
        </div>
    )
}
export default Component3