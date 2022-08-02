import React from "react";
import '../../../App.css';
import banner from '../../../assects/banner.png';
import maxHeaderLB from '../../../assects/maxHeaderLB.svg';

function Banner() {
    return (
        <div className="aem-Grid aem-Grid--12 demo-Grid baneer">
            <div className="brand-box">
                <h1>Women’s <br/> Outerwear</h1>
                <span className="max-header"><img src={maxHeaderLB} /> </span>
            </div>
            <div className="brand-image">
                <img src={banner} alt="here is hero image" />
            </div>
        </div>
    );
}
export default Banner;