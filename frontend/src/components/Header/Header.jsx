import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  return (

    <div>
      <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae repellat quas, earum exercitationem impedit labore fuga</p>
        <button>View Menu</button>
      </div>
      </div>
    </div>
  )
}

export default Header
