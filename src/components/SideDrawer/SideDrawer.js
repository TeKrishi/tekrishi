import React from 'react'
import './SideDrawer.css'
import {NavLink} from 'react-router-dom'
import facebook from '../../social_media_images/facebook.png'
import twitter from '../../social_media_images/twitter.png'
import playIcon from '../../social_media_images/play_icon.png'
import linkedin from '../../social_media_images/linkedin.png'
const SideDrawer=(props)=>{
    let drawerClasses='side-drawer';
    if(props.show)
    {
        drawerClasses='side-drawer open'
    }
    return(
        <nav className={drawerClasses}>
            <ul>
            <li><NavLink exact activeClassName="navbars__link--active" className="navbars__link" to="/">Home</NavLink></li>
                        <li><NavLink exact activeClassName="navbars__link--active" className="navbars__link" to="/features">Features</NavLink></li>
                        <li><NavLink exact activeClassName="navbars__link--active" className="navbars__link" to="/about">About Us</NavLink></li>
                        {/* <li><NavLink exact activeClassName="navbars__link--active" className="navbars__link" to="/contact">Contact</NavLink></li> */}
                        {/* <li><NavLink exact activeClassName="navbars__link--active" className="navbars__link" to="#idd">Contact</NavLink></li> */}
                        <li><a activeClassName="navbars__link--active" className="navbars__link" style={{scrollBehavior: 'smooth'}} href="#idd">Contact</a></li>
                <li>
                    <a href="https://www.facebook.com/teKrishi-114186377051081" target="blank"><img src={facebook} alt="Facebook"/></a>
                    <a href="https://twitter.com/TeKrishi" target="blank"><img style={{paddingLeft:'0.35em'}} src={twitter} alt="Twitter"/></a>
                    <a href="https://www.linkedin.com/company/tekrishi/" target="blank"><img style={{paddingLeft:'0.35em'}} src={linkedin} alt="LinkedIn"/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.krishiji" target="blank"><img style={{paddingLeft:'0.35em',width:'25px'}} src={playIcon} alt="Play"/></a>
                </li>
            </ul>
        </nav>
    )
}
export default SideDrawer;