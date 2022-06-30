import '../../App.css';
import search from '../../assects/search.svg';
// import  search  from '../../assets/images/search.svg';
import { useNavigate } from 'react-router-dom';
// import mobileMenue from './mobi-nav';
// import {Routes, Route, useNavigate} from 'react-router-dom';
function Header() {

    const navigate = useNavigate();
    const homeClick = () =>{
        navigate ('/');
    }

    const handleClick = () => {
      navigate('/cart');
    };
  return (
    <nav className='aem-Grid'>
        <div className='aem-Grid aem-Grid--12 demo-Grid main-nav'>
        <h1 onClick={homeClick} className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 demo-GridColumn demo-GridColumn--separator logo-image'><img src={"../../../images/logo.png"} /></h1>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 demo-GridColumn demo-GridColumn--separator list-item'>
            <ul>
                <li><a href='#'>Women</a></li>
                <li><a href='#'>Men</a></li>
                <li><a href='#'>Smart Gear</a></li>
                <li><a href='#'>Accessories</a></li>
            </ul>
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--4 demo-GridColumn demo-GridColumn--separator list-item-icon'>
            <ul>
                <li><img src={"../../../logo/search.svg"} />search</li>
                <li><img src={"../../../logo/user.svg"} />Sign in</li>
                <li onClick={handleClick}><a><img src={"../../../logo/shopping-bag.svg"} /></a></li>
            </ul>
        </div>
        </div>
        <div className='mobile-nav'>
            <ul>
                <li><button><img src={"../../../logo/menu.svg"} /></button></li>
                <li onClick={homeClick}><img src={"../../../images/logo.png"} /></li>
                <li><img src={"../../../images/search.svg"} /></li>
                <li onClick={handleClick}><img src={"../../../logo/shopping-bag.svg"} /></li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;

