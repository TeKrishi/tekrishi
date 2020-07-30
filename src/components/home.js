import React from 'react'
import Component1 from './home/component1';
import Footer from './footer';
import './home.css'
import Component2 from './home/component2';
import Component3 from './home/component3';
import Component4 from './home/component4';

const Home=(props)=>{
    return(
        <>
            <Component1/>
            <Component2/>
            <Component3/>
            <Component4/>
            <div className="footer_ref_home">
                <Footer/>
            </div>
        </>
    )
}
export default Home;