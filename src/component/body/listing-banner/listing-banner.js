import React, { useState } from "react";
import '../../../App.css';
import Pgination from "./pagination";
import { useNavigate } from 'react-router-dom';
import heart from '../../../assects/heart.svg';
import arrowd from '../../../assects/arrowd.svg';
import arrowup from '../../../assects/arrowup.svg';
import sliders from '../../../assects/sliders.svg';


function ListingBanner(props) {

    const navigate = useNavigate();

    const [showperpage] = useState(6)
    const [pagination, stePegination] = useState({
        start: 0,
        end: showperpage,
    })

    const onPaginationChange = (start, end) => {
        stePegination({ start: start, end: end })
        // console.log(start, end);
    }

    console.log(props);
    const onFilterChange = (value) => {
        console.log(value);
        if (value) {
            props.data.sort((a, b) => a.price - b.price)
        }
    }
    const handleOnSubmit = (id) => {
        navigate('/product-detail/' + id);
    };
    return (
        <div>
            <div className="aem-Grid aem-Grid--12 demo-Grid">
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
                            <img src={sliders} alt="give rating to product" />
                            Filter Results
                        </li>
                        <li>
                            <img src={arrowd} />
                            <img src={arrowup} />
                            Sort Products
                        </li>
                    </ul>
                    <li>38 Results</li>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12 demo-Grid">
                {props.data.slice(pagination.start, pagination.end).map((prod) => {
                    return (
                        <div onClick={() => handleOnSubmit(prod.id)} className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 demo-GridColumn banner-products" key={prod.id}>
                            <img
                                className="active"
                                src={prod.image}
                                alt=""
                            />
                            <p>{prod.title}</p>
                            <span>${prod.price}/-</span>
                            <br />
                            <img src={heart} alt="save for leter" />
                        </div>
                    );
                })}
                <div>
                    <Pgination showperpage={showperpage} onPaginationChange={onPaginationChange} />
                </div>
            </div>
        </div>
    );
}
export default ListingBanner;