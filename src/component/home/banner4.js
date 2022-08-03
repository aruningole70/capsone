import React from "react";
import image from '../../assects/image.png';
import { useNavigate } from "react-router-dom";
import '../../App.css';
import maxHeader4 from '../../assects/maxHeader4.svg';
import mapPin from '../../assects/mapPin.svg';

function Banner4() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/body');
    };
    return (
        <>
            <div className="banner4-main-div">
                <div className="climed-man-image">
                <img src={image} alt="here is hero image 3" />
                </div> 
                <div className="banner4-box">
                    <h4>Conquer your next adventure</h4>
                    <p>Lorem Ipsum Dolor Tempor</p>
                    <button onClick={handleClick}>SHOP DEVICES</button>
                </div>
                <div className="banner4-mobile-box">
                <h4>Conquer your</h4>
                    <p>Lorem Ipsum Dolor Tempor</p>
                    <button onClick={handleClick}>SHOP DEVICES</button>
                </div>
                <span className='mapiconWrapper'>
                        <img src={mapPin} alt="map pin icon" className='mapPinImg' />
                        <img src={maxHeader4} alt='Horizontal line for styling' className='mapMaxHeaderImg' />
                    </span>
            </div>
        </>

    );
}
export default Banner4;