import React,{Component} from 'react'
import topArrow from '../background_images/top_arrow.png'
import './scrollTop.css'
class ScrollTop extends Component{
    constructor(){
        super()
        this.state={
            intervalid: 0
        }
    }
    scrollStep(){
        if(window.pageYOffset===0)
        {
            clearInterval(this.state.intervalid)
        }
        window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)
    }
    scrollToTop(){
        let intervalid = setInterval(this.scrollStep.bind(this),
        this.props.delayInMs)
        this.setState({ intervalid: intervalid })
    }
    render(){
        return(
            <button title="Back to top" className="scroll"
            onClick={()=>{this.scrollToTop()}}>
               <img src={topArrow} className="top_arrow" alt="Img"/> 
            </button>
        )
    }
}
export default ScrollTop;