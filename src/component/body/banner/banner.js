import React from "react";
import '../../../App.css';
// import header2 from '../../../assects/header2.svg';
// import hero from '../../../assects/hero.png';
import banner from '../../../assects/banner.png';

function Banner() {
    return (
        <div className="aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--6  demo-Grid baneer">
            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn brand-box">
                <div><h1>Women’s Outerwear</h1></div>
                <br/>
                <div className='banner-bottom'></div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn brand-image">
                <img src={banner} alt="here is hero image" />
            </div>
        </div>
        // <div className='banner'>
        //   <span className='banner-left'>
        //     <h1>Men’s <br/> <span>Outerwear</span></h1>
        //     <div className='banner-bottom'></div>
        //   </span>
        //   <img src={banner} alt="banner-image" aria-label='banner-img'/>
        // </div>
    );
}
export default Banner;