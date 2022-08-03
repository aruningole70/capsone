import React from "react";
import '../../App.css';
import Banner1 from "./banner1";
import MobileBanner1 from "./mobile-banner1";
import Banner3 from "./banner3";
import Banner4 from "./banner4";
import Banner2 from "./banner2";

const Home = () => {
  

    return (
        <div className="aem-Grid aem-Grid--12 demo-Grid  home-main-banner">
            <div className="dextop-banner1"><Banner1/></div>
                <div className="mobile-banner1"><MobileBanner1/></div> 
                <div className="banner3"><Banner3/> </div>
                <div className="banner4"><Banner4/></div> 
                {/* <div className="banner2-component"><Banner2 /></div>              */}
        </div>  
    );
}
export default Home;
