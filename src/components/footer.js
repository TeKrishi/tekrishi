import React from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom'
import playLogo from '../background_images/play_logo.png'
import facebook from '../background_images/facebook_small.png'
import twitter from '../background_images/twitter_small.png'
import linkedIn from '../background_images/linkedin_small.png'
import ScrollTop from './scrollTop'
const Footer=()=>{
    return(
        <div className="footer" id="idd">
            <div className="footer_flex">
                <div className="contact_div">
                    <p className="contact_title">Contact</p>
                    <p className="place_address">Professor CR Rao Road, Gachibowli, IIIT Hyderabad, Hyderabad, Telangana 500032</p>
                    <p className="tel_address">Tel - +91-6388330992<br/><br/><a style={{color:'white',textDecoration:'none'}} href="mailto:krishi.sevak2k20@gmail.com">krishi.sevak2k20@gmail.com</a></p>
                </div>
                <div className="play_div">
                    <p className="play_title">Download our app</p>
                    <a href="https://play.google.com/store/apps/details?id=com.krishiji" target="blank"><img className="play_logo" src={playLogo} alt="Img"/></a>
                </div>
                <div className="quicklinks_div">
                    <p className="quicklinks_title">Quick Links</p>
                    <div>
                        <NavLink exact to="/" style={{color:'white',textDecoration:'none'}}><p className="quicklinks_text">Home</p></NavLink>
                        <p className="quicklinks_text"><NavLink exact to="/features" style={{color:'white',textDecoration:'none'}}>Features</NavLink></p>
                        <p className="quicklinks_text"><NavLink exact to="/about" style={{color:'white',textDecoration:'none'}}>About Us</NavLink></p>
                        {/* <p className="quicklinks_text"><NavLink exact to="/contact" style={{color:'white',textDecoration:'none'}}>Contact</NavLink></p> */}
                        {/* <p className="quicklinks_text"><a href="#idd" style={{scrollBehavior: 'smooth',color:'white',textDecoration:'none'}}>Contact</a></p> */}
                        <div className="scroll_up">
                            <ScrollTop scrollStepInPx="50"
                            delayInMs="16.66"/>
                        </div>
                        <div className="socialmedia_quicks">
                            <a href="https://www.facebook.com/teKrishi-114186377051081" target="blank"><img src={facebook} alt="Facebook"/></a>
                            <a href="https://twitter.com/TeKrishi" style={{paddingLeft:'1em'}} target="blank"><img src={twitter} alt="Twitter"/></a>
                            <a style={{paddingLeft:'1em'}} href="https://www.linkedin.com/company/tekrishi/" target="blank"><img src={linkedIn} alt="LinkedIn"/></a>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© by teKrishi</p>
                    </div>
                </div>
            </div>
            {/* <div className="blank_space">
                <br/>
                <br/>
                <br/>
                <br/>
            </div> */}
        </div>
    )
}
export default Footer;

