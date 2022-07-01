import '../../App.css';
import search from '../../assects/search.svg';
import shoppingbag from '../../assects/shoppingbag.svg';
import user from '../../assects/user.svg';
import menu from '../../assects/menu.svg';
import logo from '../../assects/logo.png';
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
        <h1 onClick={homeClick} className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 demo-GridColumn demo-GridColumn--separator logo-image'><img src={logo} /></h1>
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
                <li><img src={search} />search</li>
                <li><img src={user} />Sign in</li>
                <li onClick={handleClick}><a><img src={shoppingbag} /></a></li>
            </ul>
        </div>
        </div>
        <div className='mobile-nav'>
            <ul>
                <li><button><img src={menu} /></button></li>
                <li onClick={homeClick}><img src={logo} /></li>
                <li><img src={search} /></li>
                <li onClick={handleClick}><img src={shoppingbag} /></li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;

