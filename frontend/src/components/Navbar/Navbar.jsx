import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/storeContext';

const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] = useState("Home");

    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

  return (
    <div className='navbar'>
        <Link to='/'><img className='logo' src={assets.logo} alt="logo" /></Link>   
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download'onClick={()=>setMenu("Mobile-App")}className={menu==="Mobile-App"?"active":""}>Mobile-App</a>        
        <a href='#footer'onClick={()=>setMenu("Contect-us")}className={menu==="Contect-us"?"active":""}>Contect-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search-Icons" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket-Icon" /></Link>
          <div className={getTotalCartAmount()?"dot":""}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul>
              <nav className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}>
                    <img src={assets.bag_icon} alt="" />
                    <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                    <img src={assets.logout_icon} alt="" />
                    <p>Logout</p>
                </li>
              </nav>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar
