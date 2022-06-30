import React from "react";
import Banner from "./banner/banner";
import Filter from "./filter-banner/filter-banner";
// import ListingBanner from "./listing-banner/listing-banner";
import SideBar from "./side-bar/side-bar";
import Categories from "./listing-banner/product";

function Body() {
    return (
        <div className="body">
            <Banner />
            <Filter />
            <div className="aem-Grid aem-Grid--12 demo-Grid main-section">
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--hide demo-GridColumn">
                    <SideBar />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn">
                    <Categories />
                </div>
            </div>
        </div>
    );
}
export default Body;
