import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import facebook1 from '../../../assects/facebook1.svg';
import instagram1 from '../../../assects/instagram1.svg';
import twitter1 from '../../../assects/twitter1.svg';
import maxheader from '../../../assects/mh3.svg';
import '../../../App.css';

const PlaceOrder = ({ }) => {
    const [items, setItems] = useState([]);
    const [rediolocaldata, setRediolocaldata] = useState([]);
    const [cardlocaldata, setCardlocaldata] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('inputdatainfo'));
        const rediolocaldata = JSON.parse(localStorage.getItem('redioinfo'));
        const cardlocaldata = JSON.parse(localStorage.getItem('paydatainfo'));
        if (items, rediolocaldata, cardlocaldata) {
            setItems(items);
            setRediolocaldata(rediolocaldata);
            setCardlocaldata(cardlocaldata);
        }
    }, []);

    const Getcarddata = useSelector((state) => state.Change);
    if (Getcarddata.count === 0) {
        console.log(localStorage.getItem("products"));
        Getcarddata.products = JSON.parse(localStorage.getItem("products"));
        Getcarddata.count = 1;
    }
    return (
        <>
            <div className="aem-Grid aem-Grid--12 demo-Grid order-page">
                <div className="order-succesfull-titles">
                    <h1>Order Successful!</h1>
                    <img src={maxheader} />
                    </div>
                <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--tablet--8 aem-GridColumn--phone--12 demo-GridColumn demo-GridColumn--separator pr32">
                    <h2>Order Number #1700834</h2>
                    <div className="aem-Grid aem-Grid--12 demo-Grid">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn demo-GridColumn--separator shiping-info-column">
                            <h3>Shipping Information</h3>
                            <p>{items.Email}</p>
                            <p>{items.Phone}</p>
                            <span><p>{items.FName} {items.LName}</p></span>
                            <span><p>{items.Address} {items.Address2}</p></span>
                            <span><p>{items.City} {items.ZIP}</p></span>
                            <span><p>{items.State}</p></span>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn demo-GridColumn--separator shiping-method-column">
                            <h3>Shipping Method</h3>
                            <p>{rediolocaldata}</p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn demo-GridColumn--separator card-info-column">
                            <h3>Payment Information</h3>
                            <p>Credit Card</p>
                            <p>Visa ending in {cardlocaldata.expdate} </p>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 demo-Grid">
                        {Getcarddata.products && Getcarddata.products.map((carddatalocal) => {
                            return (
                                <>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn demo-GridColumn--separator">
                                        <div className="aem-Grid aem-Grid--12 demo-Grid card-product">
                                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--3 demo-GridColumn demo-GridColumn--separator ">
                                                <img src={carddatalocal.image} alt="photo" />
                                            </div>
                                            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--9 aem-GridColumn--phone--9 demo-GridColumn demo-GridColumn--separator ">
                                                <span><h6>{carddatalocal.title}</h6></span>
                                                <ul>
                                                    <li>Size: Medium</li>
                                                    <li>Color: Storm</li>
                                                    <li>Quantity:{carddatalocal.count}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        })}
                    </div>
                    <div className="aem-Grid aem-Grid--12 demo-Grid order-info">
                        <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore <br /> magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call <br /> Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--hide  demo-GridColumn demo-GridColumn--separator discount-box pr32">
                    <h4>Give us a follow <br/> to SAVE 20% <br/>on your next order.</h4>
                    <div className="media-icon">
                        <ul>
                            <li><img src={instagram1} /></li>
                            <li><img src={facebook1} /></li>
                            <li><img src={twitter1} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlaceOrder;