import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../../../App.css';
import csquare from '../../../assects/csquare.svg';
import edit1 from '../../../assects/edit1.svg';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [redio, setRedio] = useState();
    const [show1div, setShow1div] = useState(false);
    const [show2div, setShow2div] = useState(false);
    const [show3div, setShow3div] = useState(false);
    const [show, setShow] = useState(true);
    const [showdiv, setShowDiv] = useState(false);
    const [carddata, setCarddata] = useState(true);
    const [editcarddata, setEditCarddata] = useState(false);

    const Getresiodata = (x) => {
        setRedio(x.target.value);
    }
    const handlechange = () => {
        setShow(!show);
        setShowDiv(!showdiv);
        setShow1div(!show1div);
        localStorage.setItem("inputdatainfo", JSON.stringify(inputdata));
    }
    const [shiping, setShiping] = useState(true);
    const [editshiping, setEditShiping] = useState(false);
    const Rediohandal = () => {
        setShiping(!shiping);
        setEditShiping(!editshiping);
        setShow2div(!show2div);
        localStorage.setItem("redioinfo", JSON.stringify(redio));
    }
    const Handalcard = () => {
        setCarddata(!carddata);
        setEditCarddata(!editcarddata);
        setShow3div(!show3div);
        localStorage.setItem("paydatainfo", JSON.stringify(paydata));
    }
    const [inputdata, setInputData] = useState({
        Email: "",
        Phone: "",
        Country: "",
        FName: "",
        LName: "",
        Address: "",
        Address2: "",
        City: "",
        State: "",
        ZIP: "",

    });
    const [paydata, setPayData] = useState({
        Cname: "",
        cardno: "",
        expdate: "",
        cvv: "",
    })

    const paymentData = (a) => {
        const name = a.target.name;
        const value = a.target.value;
        console.log(paydata);
        setPayData({ ...paydata, [name]: value })

    }

    const userData = (a) => {
        const name = a.target.name;
        const value = a.target.value;
        console.log(inputdata);
        setInputData({ ...inputdata, [name]: value })
    }

    const navigate = useNavigate();

    const PlaceOrder = () => {
        navigate('/placeorder');
    };
    const Getcarddata = useSelector((state) => state.Change);
    if (Getcarddata.count === 0) {
        console.log(localStorage.getItem("products"));
        Getcarddata.products = JSON.parse(localStorage.getItem("products"));
        Getcarddata.count = 1;
    }
    let subTotal = 0;
    if(Getcarddata.products){
        for (let i = 0; i < Getcarddata.products.length; i++) {
            subTotal = subTotal + (Getcarddata.products[i].price * Getcarddata.products[i].count);
        } 
    }
    
    let estTotal = 0;
    for (let i = 0; i < subTotal; i++) {
        estTotal = subTotal - (77.60 + 100 + 23.28);
    }
    return (
        <div>
            <div className="aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid checkout">
                <h1>Checkout</h1>
                <h2>Guest Checkout</h2>
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn demo-GridColumn--image">
                    <div className="1ts-div">
                        {show && <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn shiping-address">
                            <h3>Contact information</h3>
                            <p>We’ll use these details to keep you informed on your delivery.</p>
                            <div className="aem-Grid aem-Grid--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--1 demo-Grid ">
                                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image contact ">
                                        <label htmlFor="Email">Email</label><br />
                                        <input type="text" value={inputdata.Email}
                                            onChange={userData}
                                            name="Email" id="Email" placeholder="abc@xyz.com" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image contact">
                                        <label htmlFor="Phone">Phone Number</label><br />
                                        <input type="text" value={inputdata.Phone}
                                            onChange={userData}
                                            name="Phone" id="Phone" placeholder="(222) 222-2222" />
                                    </div>
                                </div>
                                <div></div>
                                <h4>1. Shipping Information</h4>
                                <div className="aem-Grid aem-Grid--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--1 demo-Grid demo-Grid shiping-input">
                                    <label htmlFor="Country">Country</label><br />
                                    <input type="text" value={inputdata.Country}
                                        onChange={userData}
                                        name="Country" id="Country" placeholder="United States" />
                                </div>
                                <br />
                                <div className="aem-Grid aem-Grid--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-Grid">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12  demo-GridColumn contact">
                                        <label htmlFor="FName">First Name</label><br />
                                        <input type="text" value={inputdata.FName}
                                            onChange={userData}
                                            name="FName" id="FName" placeholder="" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn contact">
                                        <label htmlFor="LName">Last Name</label><br />
                                        <input type="text" value={inputdata.LName}
                                            onChange={userData}
                                            name="LName" id="LName" placeholder="" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn contact">
                                        <label htmlFor="Address">Street Address</label><br />
                                        <input type="text" value={inputdata.Address}
                                            onChange={userData}
                                            name="Address" id="Address" placeholder="" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn contact">
                                        <label htmlFor="Address2">Street Address 2</label><br />
                                        <input type="text" value={inputdata.Address2}
                                            onChange={userData}
                                            name="Address2" id="Address2" placeholder="" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn contact">
                                        <label htmlFor="City">City</label><br />
                                        <input type="text" value={inputdata.City}
                                            onChange={userData}
                                            name="City" id="City" placeholder="Altadena" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn state-input">
                                        <div className="aem-Grid aem-Grid--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-Gridd">
                                            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn">
                                                <label htmlFor="State">State</label><br />
                                                <input type="text" value={inputdata.State}
                                                    onChange={userData}
                                                    name="State" id="State" placeholder="California" />
                                            </div>
                                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn">
                                                <label htmlFor="ZIP">ZIP</label><br />
                                                <input type="text" value={inputdata.ZIP}
                                                    onChange={userData}
                                                    name="ZIP" id="ZIP" placeholder="91001" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="dekstop-button"><button className="continue" onClick={handlechange}>CONTINUE TO SHIPPING METHOD</button></div>
                            <div className="mobile-button"><button className="continue-mobile-button" onClick={handlechange}>CONTINUE</button></div>
                        </div>}
                        {showdiv && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn shiping-address">
                            <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                                <div className="aem-Grid aem-Grid--12 demo-Grid shipng-address-data">
                                    <h6>Shipping Information</h6>
                                    <div className="edit-button">
                                        <button onClick={handlechange}><img src={edit1} alt="pencile" /> Edit</button>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-Grid--default--4 aem-Grid--tablet--6 aem-Grid--phone--12 demo-Grid">
                                    <p>{inputdata.Email}</p>
                                    <p>{inputdata.Phone}</p>
                                </div>
                                <div className="aem-Grid aem-Grid--default--8 aem-Grid--tablet--6 aem-Grid--phone--12 demo-Grid ">
                                    {/* <span><p>{inputdata.Country}</p></span> */}
                                    <span><p>{inputdata.FName} {inputdata.LName}</p></span>
                                    <span><p>{inputdata.Address} {inputdata.Address2}</p></span>
                                    <span><p>{inputdata.City} {inputdata.ZIP}</p></span>
                                    <span><p>{inputdata.State}</p></span>
                                </div>
                            </div>
                        </div>}</div>
                    {show1div && <div className="2nd-div">
                        {shiping && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn shiping-address siping-by">
                            <h1>2. Shipping Method</h1>
                            <div className="siping-by">
                                <input type="radio" id="first-redio" name="first-redio" value="Standard Shipping (4-8 business days via USPS) FREE" onChange={Getresiodata} />
                                <label htmlFor="first-redio">Standard Shipping (4-8 business days via USPS) FREE</label><br />
                                <input type="radio" id="second-redio" name="first-redio" value="Express Delivery (2-5 business days via USPS) $17.95" onChange={Getresiodata} />
                                <label htmlFor="redio2">Express Delivery (2-5 business days via USPS) $17.95</label><br />
                                <input type="radio" id="third-redio" name="first-redio" value="Next Day Delivery (Next business days via FedEx) $53.61" onChange={Getresiodata} />
                                <label htmlFor="redio3">Next Day Delivery (Next business days via FedEx) $53.61</label><br />
                            </div>
                            <br />
                            <div className="dekstop-button"><button className="continue" onClick={Rediohandal} >CONTINUE TO SHIPPING METHOD</button></div>
                            <div className="mobile-button"><button className="continue-mobile-button" onClick={Rediohandal}>CONTINUE</button></div>

                        </div>}
                        {editshiping && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn ">
                            <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                                    <h6>Shipping Method</h6>
                                    <p>{redio}</p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn edit-button">
                                    <button onClick={Rediohandal}><img src={edit1} alt="pencile" /> Edit</button>
                                </div>
                            </div>
                        </div>}</div>}
                    {show2div && <div className="3rd div">
                        {carddata && <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn payment-method">
                            <h2>3. Payment Information</h2>
                            <div className="card-details">
                                <input type="radio" id="card" name="card" value="card" />
                                <label htmlFor="card">Credit Card</label><br />
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn card-info">
                                    <label htmlFor="Cname">Name on Card</label><br />
                                    <input type="text" value={paydata.Cname}
                                        onChange={paymentData}
                                        name="Cname" id="Cname" placeholder="" /><br />
                                    <label htmlFor="cardno">Credit Card Number</label><br />
                                    <input type="text" value={paydata.cardno}
                                        onChange={paymentData}
                                        name="cardno" id="cardno" placeholder="" />
                                    <div className="date-cvv">
                                        <div>
                                            <label htmlFor="expdate">Expiration Date</label><br />
                                            <input type="text" value={paydata.expdate}
                                                onChange={paymentData}
                                                name="expdate" id="expdate" placeholder="" />
                                        </div>
                                        <div className="cvv">
                                            <label htmlFor="cvv">CVV</label><br />
                                            <input type="text" value={paydata.cvv}
                                                onChange={paymentData}
                                                name="cvv" id="cvv" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <p> <img src={csquare} alt="square box" />Billing address same as shipping address</p>
                                <hr />
                                <input type="radio" id="PayPal" name="PayPal" value="PayPal" />
                                <label htmlFor="PayPal">PayPal</label><br />
                                <hr />
                            </div>
                            <br />
                            <div className="dekstop-button"><button className="continue" onClick={Handalcard}>CONTINUE TO SHIPPING METHOD</button></div>
                            <div className="mobile-button"><button className="continue-mobile-button" onClick={Handalcard}>CONTINUE</button></div>
                        </div>}
                        {editcarddata && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn">
                            <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                                    <h6>Payment Information</h6>
                                    <p>Credit Card</p>
                                    <p>Visa ending in {paydata.expdate} </p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn edit-button">
                                    <button onClick={Handalcard}><img src={edit1} alt="pencile" /> Edit</button>
                                </div>
                            </div>
                        </div>}</div>}
                    <br />
                    {show3div && <div className="4rth div">
                        {<div className="aem-Grid aem-Grid--default--8 demo-Grid">
                            <div className="aem-Grid aem-Grid--12 demo-Grid orderd-product">
                                {Getcarddata.products && Getcarddata.products.map((carddata) => {
                                    return (
                                        <>
                                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn demo-GridColumn--separator">
                                                <div className="aem-Grid aem-Grid--12 demo-Grid card-product">
                                                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--3 demo-GridColumn demo-GridColumn--separator ">
                                                        <img src={carddata.image} alt="photo" />
                                                    </div>
                                                    <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--9 aem-GridColumn--phone--9 demo-GridColumn demo-GridColumn--separator cart-added-product-details ">
                                                        <h6>{carddata.title}</h6>
                                                        <ul>
                                                            <li>Size: Medium</li>
                                                            <li>Color: Storm</li>
                                                            <li>Quantity:{carddata.count}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );

                                })};
                            </div>
                            <br />
                            <div className="aem-Grid aem-Grid--12 demo-Grid place-order-button">
                                <button onClick={PlaceOrder}>PLACE ORDER</button>
                            </div>
                        </div>}</div>}
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn">
                    {show && <div className=" aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn sign-in">
                        <h3>Sign in for Express <br /> Checkout</h3>
                        <button>SIGN IN</button>
                    </div>}
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn cart-block">
                        <h1>Pricing Summary</h1>
                        <div className="cart-pricing">
                            <div className="pricing">
                                <div className="pricing-title">
                                    <h4>Subtotal</h4>
                                    <h4>Coupon</h4>
                                    <h4>Gift Card</h4>
                                    <h4>Estimated tax</h4>
                                    <h4>Estimated shipping</h4>
                                    <p>Estimated Total</p>
                                </div>
                                <div className="pricing-amount">
                                    <h4>$  {subTotal}</h4>
                                    <h4>- $ 77.60</h4>
                                    <h4>- $ 100.00</h4>
                                    <h4>$ 23.28</h4>
                                    <h4>FREE</h4>
                                    <p>$ {estTotal} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;