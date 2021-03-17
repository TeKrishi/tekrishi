import React from 'react'
import profPic1 from '../../background_images/vishal_pic.jpg'
import profPic2 from '../../background_images/shivansh_pic.jpeg'
import profPic4 from '../../background_images/kartik_pic.jpeg'
import profPic6 from '../../background_images/dhruv_arya.jpeg'
import profPic5 from '../../background_images/tony.jpeg'
import profPic3 from '../../background_images/akash_pic.jpeg'
import profLink from '../../background_images/profile_linkd.png'
import './component2.css'

const Component2=({each_profile})=>{
    let source = profPic1
    let id=each_profile.id
    if(id===1)
    {
        source=profPic1
    }
    if(id===2)
    {
        source=profPic2
    }
    if(id===3)
    {
        source=profPic3
    }
    if(id===4)
    {
        source=profPic4
    }
    if(id===5)
    {
        source=profPic5
    }
    if(id===6)
    {
        source=profPic6
    }

    return(
        <div className="block">
            <img className="profile_pic" src={source} alt="Img"/>
            <p className="profile_name">{each_profile.name}</p>
            <a  className="profile_link" href={each_profile.link} target="blank"><img className="profile_link_img" src={profLink} alt="Img"/></a>
            <p className="profile_post">{each_profile.post}</p>
        </div>
    )
}
export default Component2;