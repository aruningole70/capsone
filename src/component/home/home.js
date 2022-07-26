import React from "react";
import '../../App.css';
import capstone1 from '../../assects/capstone1.png';
import woman from '../../assects/woman.png';
import width from '../../assects/width.svg';
import capstone2 from '../../assects/capstone2.png';
import capstone3 from '../../assects/capstone3.png';
import hero1 from '../../assects/hero1.png';
import hero2 from '../../assects/hero2.png';
import image from '../../assects/image.png';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate ();
    const handleClick = () => {
        navigate('/body');
    };

    return (
        <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn shop-menu">
                <div className="home-banner">
                    <h1>Shop the new <br /> Signature Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis <br /> aliquam faucibus purus.</p>
                    <button onClick={handleClick}>SHOP NOW</button>
                </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn home-image shop-menu">
                <img src={hero1} alt="fashion image" />
            </div>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid shop-menu">
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
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn">
                    <h3>Take off in the new Signature Legging</h3>
                    <p>Lorem Ipsum Dolor Tempor</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                    <button className="SHOP-COLLECTION">SHOP COLLECTION</button>
                    <button className="SHOP-NOW" onClick={handleClick}>SHOP NOW</button>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn hero-image">
                    <img src={hero2} alt="here is hero image 2" />
                </div>
            </div>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid">
                <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn climed-man">
                <img src={image} alt="here is hero image 3" />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn">
                    <h4>Conquer your next adventure</h4>
                    <p>Lorem Ipsum Dolor Tempor</p>
                    <button onClick={handleClick}>SHOP DEVICES</button>
                </div>
            </div>
        </div>
    );
}
export default Home;