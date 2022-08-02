import React from "react";
import woman from '../../assects/woman.png';
import width from '../../assects/width.svg';

function Banner2(){
return (
    <>
    <div className=" aem-Grid aem-Grid--12 demo-Grid shop-menu">
                <div className="aem-GridColumn aem-GridColumn--default--3 demo-GridColumn demo-GridColumn--separator demo-GridColumn--multiline shoping-menu">
                    <img src={woman} alt="shop for womans" />
                    <div className="shop-discription">
                        <h2>Shop Women</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <img src={width} alt="here is width image" />
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 demo-GridColumn demo-GridColumn--separator demo-GridColumn--multiline shoping-menu">
                    <img src={woman} alt="shop for womans" />
                    <div className="shop-discription">
                        <h2>Shop Men</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <img src={width} alt="here is width image" />
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 demo-GridColumn demo-GridColumn--separator demo-GridColumn--multiline shoping-menu">
                    <img src={woman} alt="shop for womans" />
                    <div className="shop-discription">
                        <h2>Jwelary</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <img src={width} alt="here is width image" />
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 demo-GridColumn demo-GridColumn--separator demo-GridColumn--multiline shoping-menu">
                    <img src={woman} alt="shop for womans" />
                    <div className="shop-discription">
                        <h2>Electronics</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <img src={width} alt="here is width image" />
                    </div>
                </div>
            </div>
              </>
);
}
export default Banner2;