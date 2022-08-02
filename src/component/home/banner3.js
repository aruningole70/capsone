import React from "react";
import { useNavigate } from "react-router-dom";
import hero2 from '../../assects/hero2.png';
import '../../App.css'

function Banner3 (){

    const navigate = useNavigate ();
    const handleClick = () => {
        navigate('/body');
    };
return(
    <>
    <div className="aem-Grid aem-Grid--default--12 demo-Grid banner3-main">
                <div className="banner3-box">
                    <h3>Take off in the new <br/> Signature Legging</h3>
                    <p className="p1">Lorem Ipsum Dolor Tempor</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                    <div className="baneer3-button">
                    <button className="SHOP-COLLECTION">SHOP COLLECTION</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="SHOP-NOW" onClick={handleClick}>SHOP NOW</button>
                    </div>
                </div>
                <div className="hero2-image">
                    <img src={hero2} alt="here is hero image 2" />
                </div>
            </div>
    </>
);

}
export default Banner3