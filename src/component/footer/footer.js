import '../../App.css';

function Footer() {
    return (
        <div className='demo-GridRowExample-markup'>
            <div className='aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid footer-item '>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>Account</h4>
                    <li>Sign In</li>
                    <li>Register</li>
                    <li>Order Status</li>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>About Us</h4>
                    <li>Our Story</li>
                    <li>Careers</li>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>Help</h4>
                    <li>Contact Us</li>
                    <li>Order Status</li>
                    <li>Returns</li>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>Follow Us!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='footer-icon'>
                        <li><img src={"../../../logo/instagram.svg"} /></li>
                        <li><img src={"../../../logo/facebook.svg"} /></li>
                        <li><img src={"../../../logo/twitter.svg"} /></li>
                    </div>
                </div>
            </div>
            <hr />
            <div className='demo-GridRowExample-markup'>
                <div className='aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid'>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-GridColumn--phone--hide aem-Grid--phone--1  demo-GridColumn demo-GridColumn--separator logo-image'>
                    <img src={"../../../images/logo.png"} />
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-Grid--tablet--6 aem-Grid--phone--1 demo-GridColumn demo-GridColumn--separator policy'>
                    <p>© Company Name Address Ave, City Name, State ZIP</p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1 demo-GridColumn demo-GridColumn--separator contact-com'>
                    <a href='#'>Terms of Use</a>
                    <a href='#'>Privacy Policy</a>
                </div>
            </div></div>
            
        </div>
    );

}
export default Footer; 