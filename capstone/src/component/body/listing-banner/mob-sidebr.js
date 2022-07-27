import React from "react";
import '../../../App.css';

function MobSideBar(){
return(
    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide demo-GridColumn sort-option">
          <p><span>Clothing / Women’s / Outerwear</span></p>
    <h2>Filters</h2>
    <hr />
    <div className="chekboxes">
        <label>
            <input type="checkbox" />
            Jewellery
        </label><br />
        <label>
            <input type="checkbox" />
            Electronics
        </label><br />
        <label>
            <input type="checkbox" />
            Men’s Clothing
        </label><br />
        <label>
            <input type="checkbox" />
            Women’s Clothing
        </label>
    </div>
</div>
);
}
export default MobSideBar;