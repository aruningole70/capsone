import React from "react";
import woman from '../../assects/woman.png';
import width from '../../assects/width.svg';
import mens from '../../assects/mens.png';
import electronic from '../../assects/electronics.png';
import jwelray from '../../assects/jwelary.png';
import { useNavigate } from "react-router-dom";
import '../../App.css';

function Banner2(){
    const navigate = useNavigate ();
    const handleClick = () => {
        navigate('/body');
    };
return (
    <>
    <div className="shop-menu">
                <div className="shoping-menu" onClick={handleClick}>
                    <div className="shoping-menue-image"><img src={woman} alt="shop for womans" /></div>
                    <div className="shop-discription">
                        <h2>Shop Women</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <span className="max-header-bemnner"><img src={width} alt="here is width image" /></span>
                    </div>
                </div>
                <div className="shoping-menu" onClick={handleClick}>
                    <div className="shoping-menue-image"><img src={mens} alt="shop for womans" /></div>
                    <div className="shop-discription">
                        <h2>Shop Men</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <span className="max-header-bemnner"><img src={width} alt="here is width image" /></span>
                    </div>
                </div>
                <div className="shoping-menu" onClick={handleClick}>
                    <div className="shoping-menue-image"><img src={jwelray} alt="shop for womans" /></div>
                    <div className="shop-discription">
                        <h2>Jwelary</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <span className="max-header-bemnner"><img src={width} alt="here is width image" /></span>
                    </div>
                </div>
                <div className="shoping-menu" onClick={handleClick}>
                    <div className="shoping-menue-image"><img src={electronic} alt="shop for womans" /></div>
                    <div className="shop-discription">
                        <h2>Electronics</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <span className="max-header-bemnner"><img src={width} alt="here is width image" /></span>
                    </div>
                </div>
            </div>
              </>
);
}
export default Banner2;