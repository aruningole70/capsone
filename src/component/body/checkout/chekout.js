import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../../../App.css';
import csquare from '../../../assects/csquare.svg';
import edit1 from '../../../assects/edit1.svg';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [redio, setRedio] = useState();

    const Getresiodata = (x) => {
        setRedio(x.target.value);
    }
    const [show, setShow] = useState(true);
    const [showdiv, setShowDiv] = useState(false);
    const handlechange = () => {
        setShow(!show);
        setShowDiv(!showdiv);
        localStorage.setItem("inputdatainfo",JSON.stringify(inputdata));
    }
    const editdata = () => {
        setShow(!show);
        setShowDiv(!showdiv);
    }
    const [shiping, setShiping] = useState(true);
    const [editshiping, setEditShiping] = useState(false);
    const Rediohandal = () => {
        setShiping(!shiping);
        setEditShiping(!editshiping);
        localStorage.setItem("redioinfo",JSON.stringify(redio));
    }

    const EditRediohandal = () => {
        setShiping(!shiping);
        setEditShiping(!editshiping);
    }
    const [carddata, setCarddata] = useState(true);
    const [editcarddata, setEditCarddata] = useState(false);
    const Handalcard = () => {
        setCarddata(!carddata);
        setEditCarddata(!editcarddata);
        localStorage.setItem("paydatainfo",JSON.stringify(paydata));
    }
    const EditHandalcard = () => {
        setCarddata(!carddata);
        setEditCarddata(!editcarddata);
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
    return (
        <div>
            <div className="aem-Grid aem-Grid--12 demo-Grid checkout">
                <h1>Checkout</h1>
                <h2>Guest Checkout</h2>
                <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn">
                    {show && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn shiping-address">
                        <h3>Contact information</h3>
                        <p>We’ll use these details to keep you informed on your delivery.</p>
                        <div className="aem-Grid aem-Grid--12 demo-Grid ">
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact ">
                                <label htmlFor="Email">Email</label><br />
                                <input type="text" value={inputdata.Email}
                                    onChange={userData}
                                    name="Email" id="Email" placeholder="abc@xyz.com" />
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                <label htmlFor="Phone">Phone Number</label><br />
                                <input type="text" value={inputdata.Phone}
                                    onChange={userData}
                                    name="Phone" id="Phone" placeholder="(222) 222-2222" />
                            </div>
                            <h4>1. Shipping Information</h4>
                            <div className="aem-Grid aem-Grid--12 demo-Grid shiping-input">
                                <label htmlFor="Country">Country</label><br />
                                <input type="text" value={inputdata.Country}
                                    onChange={userData}
                                    name="Country" id="Country" placeholder="United States" />
                            </div>
                            <br />
                            <div className="aem-Grid aem-Grid--12 demo-Grid">
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                    <label htmlFor="FName">First Name</label><br />
                                    <input type="text" value={inputdata.FName}
                                        onChange={userData}
                                        name="FName" id="FName" placeholder="" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                    <label htmlFor="LName">Last Name</label><br />
                                    <input type="text" value={inputdata.LName}
                                        onChange={userData}
                                        name="LName" id="LName" placeholder="" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                    <label htmlFor="Address">Street Address</label><br />
                                    <input type="text" value={inputdata.Address}
                                        onChange={userData}
                                        name="Address" id="Address" placeholder="" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                    <label htmlFor="Address2">Street Address 2</label><br />
                                    <input type="text" value={inputdata.Address2}
                                        onChange={userData}
                                        name="Address2" id="Address2" placeholder="" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                    <label htmlFor="City">City</label><br />
                                    <input type="text" value={inputdata.City}
                                        onChange={userData}
                                        name="City" id="City" placeholder="Altadena" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn state-input">
                                    <div className="aem-Grid aem-Grid--12 demo-Gridd">
                                        <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn">
                                            <label htmlFor="State">State</label><br />
                                            <input type="text" value={inputdata.State}
                                                onChange={userData}
                                                name="State" id="State" placeholder="California" />
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn">
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
                        <button className="continue" onClick={handlechange}>CONTINUE TO SHIPPING METHOD</button>
                    </div>}
                    {showdiv && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn shiping-address">
                        <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                            <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn">
                                <h6>Shipping Information</h6>
                                <p>{inputdata.Email}</p>
                                <p>{inputdata.Phone}</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn ">
                                {/* <span><p>{inputdata.Country}</p></span> */}
                                <span><p>{inputdata.FName} {inputdata.LName}</p></span>
                                <span><p>{inputdata.Address} {inputdata.Address2}</p></span>
                                <span><p>{inputdata.City} {inputdata.ZIP}</p></span>
                                <span><p>{inputdata.State}</p></span>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn edit-button">
                                <button onClick={editdata}><img src={edit1} alt="pencile" /> Edit</button>
                            </div>
                        </div>
                    </div>}
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
                        <button className="continue" onClick={Rediohandal} >CONTINUE TO SHIPPING METHOD</button>
                    </div>}
                    {editshiping && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn ">
                        <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                                <h6>Shipping Method</h6>
                                <p>{redio}</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn edit-button">
                                <button onClick={EditRediohandal}><img src={edit1} alt="pencile" /> Edit</button>
                            </div>
                        </div>
                    </div>}
                    {carddata && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn payment-method">
                        <h2>3. Payment Information</h2>
                        <div className="card-details">
                            <input type="radio" id="card" name="card" value="card" />
                            <label htmlFor="card">Credit Card</label><br />
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn card-info">
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
                            <img src={csquare} alt="square box" /><p>Billing address same as shipping address</p>
                            <hr />
                            <input type="radio" id="PayPal" name="PayPal" value="PayPal" />
                            <label htmlFor="PayPal">PayPal</label><br />
                            <hr />
                        </div>
                        <br />
                        <button className="continue" onClick={Handalcard}>CONTINUE TO SHIPPING METHOD</button>
                    </div>}
                    {editcarddata && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn">
                        <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                                <h6>Payment Information</h6>
                                <p>Credit Card</p>
                                <p>Visa ending in {paydata.expdate} </p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn edit-button">
                                <button onClick={EditHandalcard}><img src={edit1} alt="pencile" /> Edit</button>
                            </div>
                        </div>
                    </div>}
                    <br />
                    <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn">
                        <div className="aem-Grid aem-Grid--12 demo-Grid orderd-product">
                            { Getcarddata.products && Getcarddata.products.map((carddata) => {
                                return (
                                    <>
                                        <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn demo-GridColumn--separator">
                                            <div className="aem-Grid aem-Grid--12 demo-Grid card-product">
                                                <div className="aem-GridColumn aem-GridColumn--default--3 demo-GridColumn demo-GridColumn--separator ">
                                                    <img src={carddata.image} alt="photo" />
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--9 demo-GridColumn demo-GridColumn--separator ">
                                                    <span><h6>{carddata.title}</h6></span>
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
                        <br/>
                        <div className="aem-Grid aem-Grid--12 demo-Grid place-order-button">
                            <button onClick={PlaceOrder}>PLACE ORDER</button>
                        </div>
                    </div>
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
                                    <h4>$  388.00</h4>
                                    <h4>- $ 77.60</h4>
                                    <h4>- $ 100.00</h4>
                                    <h4>$ 23.28</h4>
                                    <h4>FREE</h4>
                                    <p>$ $ 233.68</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <PlaceOrder inputdata={inputdata}  /> */}
        </div>
    );
}

export default Checkout;