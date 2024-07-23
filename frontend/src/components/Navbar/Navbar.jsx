import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] = useState("Home");

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
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>

      </div>
    </div>
  )
}

export default Navbar
