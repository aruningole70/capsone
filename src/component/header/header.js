import '../../App.css';
import React, { useState } from 'react';
import search from '../../assects/search.svg';
import shoppingbag from '../../assects/shoppingbag.svg';
import user from '../../assects/user.svg';
import menu from '../../assects/menu.svg';
import { useNavigate } from 'react-router-dom';
import Comp1 from './mobi-nav';
import { useSelector } from 'react-redux/es/exports';

const Header = () => {
    const getdata = useSelector ((state) => state.Change);
    if (getdata.count === 0 && localStorage.getItem("products")) {
        console.log(localStorage.getItem("products"));
        getdata.products = JSON.parse(localStorage.getItem("products"));
        getdata.count = 1;
    }
    console.log(getdata);
    let subTotal = 0;
    if(getdata.products){
        for (let i = 0; i < getdata.products.length; i++) {
            subTotal = subTotal + getdata.products[i].count;
        }
    }
    console.log("subTotal",subTotal);
    const [showHideComp1, setShowHideComp1] = useState(false);
    const hideComponent = (e) => {
        switch (e) {
            case "showHideComp1":
                setShowHideComp1(!showHideComp1);
        }
    }
    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/');
    }

    const handleClick = () => {
        navigate('/cart');
    };
    const click = () => {
        navigate('/body');
    }
    return (
        <nav className='aem-Grid aem-Grid--12 demo-Gridd'>
            <div className='aem-Grid aem-Grid--12 demo-Grid main-nav'>
                <h1 onClick={homeClick} className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 demo-GridColumn demo-GridColumn--separator logo-image'>VENIA</h1>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 demo-GridColumn demo-GridColumn--separator list-item'>
                    <div>
                        <ul>
                            <li onClick={homeClick} >Home</li>
                            <li onClick={click}>Women</li>
                            <li onClick={click}>Men</li>
                            <li>Smart Gear</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 demo-GridColumn demo-GridColumn--separator list-item-icon'>
                    <ul>
                        <li><img src={search} alt="here is search bar" />search</li>
                        <li><img src={user} alt="go to log in page" />Sign in</li>
                        <li onClick={handleClick} className="cart-icon">
                            <img src={shoppingbag} alt="go to shoping cart" />
                            <span className='badge rounded-pill badge-notification bg-danger'>{subTotal}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='mobile-nav'>
                <ul>
                    <li><button onClick={() => hideComponent("showHideComp1")}><img src={menu} alt="here is menu bar" /></button></li>
                    <li onClick={homeClick}>VENIA</li>
                    <li onClick={handleClick}><img src={shoppingbag} alt ="go to cart-item"/>
                    <span className='badge rounded-pill badge-notification bg-danger'>{subTotal}</span>
                    </li>
                </ul>
            </div>
            <div>
                {showHideComp1 && <Comp1 />}
            </div>
        </nav>
    );
}

export default Header

