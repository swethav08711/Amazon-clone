import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import PositionedMenu from "./AccountDropdown";

function Header() {
  const [isAuth,setIsAuth] = useState(true)  
  const [ dispatch] = useStateValue();
  const handleLogout = () =>{
      setIsAuth(false)
  }
  return isAuth?(
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div onClick={handleLogout}>
          <div className="header__nav_option">
            <span className="header__nav_option_line1">Hello Guest</span>
            <span className="header__nav_option_line2">Sign Out</span>
          </div>
        </div>

        <div className="header__nav_option">
          <span className="header__nav_option_line1">Manage</span>
          <Link to="./address"><span className="header__nav_option_line2">Address</span></Link>
        </div>
        <div className="header__nav_option">
          <span className="header__nav_option_line1">Returns</span>
          <Link to="./order"><span className="header__nav_option_line2">Order</span></Link>
        </div>
        <div className="header__nav_option">
          <span className="header__nav_option_line1">Your</span>
          <span className="header__nav_option_line2"><PositionedMenu handleSignout={handleLogout}/></span>
        </div>
        <Link to="/checkout">
          <div className="header__nav_cart">
            <ShoppingCartIcon  />
            <span className="header__nav_cart_count">0</span>
          </div>
        </Link>
      </div>
    </div>
  ):(
    <div className="header">
    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
    </Link>
    
    <div className="header__search">
      <input className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
    </div>
    <div className="header__nav">
      <Link to="/login">
        <div className="header__nav_option">
          <span className="header__nav_option_line1">Hello Guest</span>
          <span className="header__nav_option_line2">Sign In</span>
        </div>
      </Link>

      <div className="header__nav_option">
        <span className="header__nav_option_line1">Returns</span>
        <span className="header__nav_option_line2">Orders</span>
      </div>
      <div className="header__nav_option">
        <span className="header__nav_option_line1">Signin</span>
        <span className="header__nav_option_line2">Account</span>
      </div>
      <Link to="/checkout">
        <div className="header__nav_cart">
          <ShoppingCartIcon />
          <span className="header__nav_cart_count">0</span>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default Header;