// import React from 'react';

import React, { useState, useEffect } from "react";
// import sliders from '../../Assets/sliders.svg';
// import x from '../../Assets/x.svg';

function Sidebar({filterProduct , initialDataCat }) {

    const [isActive, setActive] = useState(false);
    const [isSelected, setisSelected] = useState(false);

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    const getCategoryData = () => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);

            })
        console.log(data)
    }

    useEffect(() => {
        getCategoryData()
    }, []);

    return (

        <React.Fragment>
            <aside >

                <div className='aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3 sidebar-demo'>
                    <p>Clothing / Women’s / Outerwear</p>

                    <div className="filter-icon">
                        <h3>Filters</h3>
                        <img src={""} className='cross_icon' alt="cross icon" aria-label="cross filter icon" />
                    </div>
                    <hr />
              
                    {initialDataCat.map((category) => {
                    return (
                        <>
                     <div className='Attribute-first' >
                    <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={() => {
                        setisSelected(!isSelected);
                        filterProduct({category})
                    }} />
                    <label htmlFor="chk1-label"> {category}</label><br />
                   
                </div>


                        </>
                    )
                })} 
                    
                    <hr />

                </div>


            </aside>
        </React.Fragment>
    )
}

export default Sidebar;