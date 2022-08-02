import React, {useState} from "react";

function ContactDetail() {

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
    const userData = (a) => {
        const name = a.target.name;
        const value = a.target.value;
        console.log(inputdata);
        setInputData({ ...inputdata, [name]: value })
    }

    const [show, setShow] = useState(true);
    const [showdiv, setShowDiv] = useState(false);
    const handlechange = () => {
        setShow(!show);
        setShowDiv(!showdiv);
        localStorage.setItem("inputdatainfo",JSON.stringify(inputdata));
    }
    return (
        <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid">
            {show && <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid shiping-address">
                <h3>Contact information</h3>
                <p>We’ll use these details to keep you informed on your delivery.</p>
                <div className="aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid ">
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
                        <button onClick={editdata}><img src={handlechange} alt="pencile" /> Edit</button>
                    </div>
                </div>
            </div>}
        </div>
    );
}
export default ContactDetail;