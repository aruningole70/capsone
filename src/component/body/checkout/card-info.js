import React ,{useState} from "react";

function CardDetils (){

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
    const [carddata, setCarddata] = useState(true);
    const [editcarddata, setEditCarddata] = useState(false);
    const Handalcard = () => {
        setCarddata(!carddata);
        setEditCarddata(!editcarddata);
        localStorage.setItem("paydatainfo",JSON.stringify(paydata));
    }
return (
    <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid">
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
    </div>
); 
}
export default CardDetils;