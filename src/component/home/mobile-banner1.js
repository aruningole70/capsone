import React from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";
import hero1 from '../../assects/hero1.png';

function MobileBanner1() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/body');
    };
    return (
        <>
            <div className="mobile-banner-min-div" style={{ backgroundImage: `url(${hero1})` }}>
                <div className="mobile-banner">
                    <h1>Shop the new <br /> Signature Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button onClick={handleClick}>SHOP NOW</button>
                </div>
            </div>
        </>
    );
}
export default MobileBanner1;