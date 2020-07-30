import React from 'react'
import './component2.css'
import Video from '../../background_images/video.mp4'
const Component2=()=>{
    return(
        <div className="history_div">
            <div className="history_title">
                <p>BackGround</p>
            </div>
            <hr className="horiz_line"/>
            <div className="history_flex">
            <div className="history_detail">
                <p className="history_title"><b>How did it Start</b></p>
                <p className="history_text">In northern part of India, consisting of Gangetic plains, the per capita income of farmer is very low.
                Most of them still rely on traditional methods of farming which results in poor yield. The most important reason for this is lack of equipments. 
                Farmers are unable to afford all equipments needed for farming resulting in poor yield although the soil is fertile.
                Our team came up with the idea of "Krishi Sevak" an android platform where farmers having equipments can rent to others. 
                Through this, farmers can get equipments at affordable rate. We are still bringing on updates to our app.</p>
            </div>
            <video className="Video" src={Video} autoPlay="true" loop="true"/>
            </div>
        </div>
    )
}
export default Component2;