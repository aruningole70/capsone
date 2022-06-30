import React from "react";
import '../../../App.css';
import onFilterChange from '../listing-banner/listing-banner'
// import SideBar from "../side-bar/side-bar";

function Filter() {
//    const onFilterChange =() =>{

//     }
    return (
        <div className="demo-GridRowExample-markup">
            <div className="aem-Grid aem-Grid--12 demo-Grid filter-banner">
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12 demo-GridColumn">
                    <p><span>Clothing / Women’s / Outerwear</span></p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--hide demo-GridColumn">
                    <p>38 Results</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6  aem-GridColumn--phone--hide demo-GridColumn drop-down">
                    <select name="" id="" onChange={onFilterChange}>
                        <option value="Sort by list">Sort by list</option>
                        <option value="categiry">Sort by Price</option>
                    </select>
                </div>
                <div className="filter-result">
                    <ul>
                        <li>
                            <img src="../../../logo/sliders.svg" alt="give rating to product" />
                            Filter Results
                        </li>
                        <li>
                            <img src="../../../images/arrow-up.svg" alt="give rating to product" />
                            <img src="../../../images/arrow-down.svg" alt="give rating to product" />
                            Sort Products
                        </li>
                    </ul>
                    <li>38 Results</li>
                </div>
            </div>
        </div>
    );
}
export default Filter;