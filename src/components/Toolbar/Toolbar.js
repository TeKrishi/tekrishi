import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import classnames from 'classnames'
import './Toolbar.css'
import {Link} from 'react-router-dom'
import facebook from '../../social_media_images/facebook.png'
import company_logo from '../../background_images/company_logo_text.png'
import playIcon from '../../social_media_images/play_icon.png'
import twitter from '../../social_media_images/twitter.png'
import linkedin from '../../social_media_images/linkedin.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
class Toolbar extends Component{
    constructor(props){
        super(props)
        this.state={
            visible: true
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
      // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
    
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos===0;
    
        this.setState({
          visible
        })
    }
    render(){
    return (
        <header className={classnames("toolbar", {
            "toolbar--hidden": !this.state.visible
          })}
          >
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                <div className="toolbar_logo"><Link to="/"><img className="comp_img" src={company_logo} alt="Img"/></Link></div>
                <div className="spacer"/>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/">Home</NavLink></li>
                        <li><NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/features">Features</NavLink></li>
                        <li><NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/about">About Us</NavLink></li>
                        {/* <li><NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/contact">Contact</NavLink></li> */}
                        <li><a activeClassName="navbar__link--active" className="navbar__link" href="#idd" style={{scrollBehavior: 'smooth'}}>Contact</a></li>
                        <li className="social-media">
                            <a href="https://www.facebook.com/teKrishi-114186377051081" target="blank"><img src={facebook} alt="Facebook"/></a>
                            <a href="https://twitter.com/TeKrishi" target="blank"><img style={{paddingLeft:'0.35em'}} src={twitter} alt="Twitter"/></a>
                            <a href="https://www.linkedin.com/company/tekrishi/" target="blank"><img style={{paddingLeft:'0.35em'}} src={linkedin} alt="LinkedIn"/></a>
                            <a href="https://play.google.com/store/apps/details?id=com.krishiji" target="blank"><img style={{paddingLeft:'0.35em',width:'25px'}} src={playIcon} alt="Play"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
    }
}
export default Toolbar;