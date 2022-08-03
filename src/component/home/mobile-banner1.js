import React from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";
import hero1 from '../../assects/hero1.png';
import width from '../../assects/width.svg';
import woman from '../../assects/woman.png';
import mens from '../../assects/mens.png';
import electronic from '../../assects/electronics.png';
import jwelray from '../../assects/jwelary.png';

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
            <div className="mobile-shop-menu">
                <div className="mobile-shoping-menu" onClick={handleClick}>
                    <div className="mobile-shoping-menue-image"><img src={woman} alt="shop for womans" /></div>
                    <div className="mobile-shop-discription">
                        <h2>Shop Women</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <span className="mobile-max-header-bemnner"><img src={width} alt="here is width image" /></span>
                    </div>
                </div>
                <div className="mobile-shoping-menu" onClick={handleClick}>
                    <div className="mobile-shoping-menue-image"><img src={mens} alt="shop for womans" /></div>
                    <div className="mobile-shop-discription">
                        <h2>Shop Men</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <span className="mobile-max-header-bemnner"><img src={width} alt="here is width image" /></span>
                    </div>
                </div>
                <div className="mobile-shoping-menu" onClick={handleClick}>
                    <div className="mobile-shoping-menue-image"><img src={jwelray} alt="shop for womans" /></div>
                    <div className="mobile-shop-discription">
                        <h2>Jwelary</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <span className="mobile-max-header-bemnner"><img src={width} alt="here is width image" /></span>
                    </div>
                </div>
                <div className="mobile-shoping-menu" onClick={handleClick}>
                    <div className="mobile-shoping-menue-image"><img src={electronic} alt="shop for womans" /></div>
                    <div className="mobile-shop-discription">
                        <h2>Electronics</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <span className="mobile-max-header-bemnner"><img src={width} alt="here is width image" /></span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MobileBanner1;