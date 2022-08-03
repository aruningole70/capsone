import React from "react";
import '../../App.css';
// import hero1 from '../../assects/hero1.png';
import imageh from '../../assects/imageh.png';
import cleft1 from '../../assects/cleft1.svg';
import { useNavigate } from "react-router-dom";
import Banner2 from "./banner2";

function Banner1 (){

    const navigate = useNavigate ();
    const handleClick = () => {
        navigate('/body');
    };
 return(
    <>
    <div className="shop-menu">
                <div className="frist-banner">
                <div className="arrow-left"><img src={cleft1}/></div>
                <div className="home-banner">
                    <h1>Shop the new <br /> Signature Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis <br /> aliquam faucibus purus.</p>
                    <button onClick={handleClick}>SHOP NOW</button>
                    </div>
                </div>
                <div className="banner1-image">
                <img src={imageh} alt="fashion image" />
            </div>  
            </div>
            <div className="banner2-div">
            <Banner2/>
            </div>
          
    </>
 );
}
export default Banner1;