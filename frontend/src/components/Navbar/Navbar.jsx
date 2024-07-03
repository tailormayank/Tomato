import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu , setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className="logo"><img src={assets.logo} alt="logo" /></div>     
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Mobile-App")}className={menu==="Mobile-App"?"active":""}>Mobile-App</li>        
        <li onClick={()=>setMenu("Contect-us")}className={menu==="Contect-us"?"active":""}>Contect-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search-Icons" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket-Icon" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>

      </div>
    </div>
  )
}

export default Navbar
