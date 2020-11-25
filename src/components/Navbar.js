import React, { useState, useEffect, useRef, useContext } from "react";

import "./Navbar.css";
import "../App.css";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as HeartIcon } from "../icons/heart.svg";
import { ReactComponent as CartIcon } from "../icons/cart.svg";
import { ReactComponent as AccountIcon } from "../icons/account.svg";
import { ReactComponent as RightArrowIcon } from "../icons/rightArrow.svg";
import { ReactComponent as LeftArrowIcon } from "../icons/leftArrow.svg";
import { ReactComponent as OrdersIcon } from "../icons/orders.svg";
import { ReactComponent as SettingIcon } from "../icons/setting.svg";
import { ReactComponent as DarkModeIcon } from "../icons/darkMode.svg";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as CurrencyIcon } from "../icons/currency.svg";

import logo from "../logo/tryb_logo_medium.png";
import { Link, Route, Router } from "react-router-dom";
import { Button, Div, Icon, SideDrawer, Text } from "atomize";
import { Dropdown } from "react-bootstrap";

//Cart
import { Container, Anchor } from 'atomize'
import { ShopContext } from '../context/shopContext'

import "../context/AuthContext";
import fire from "../config/fire";
import Login from "./Login";

import Cart from './../components/Cart';



function Nav() {

  //Use fucntion sopen cart from shopConext
  const { openCart, checkout } = useContext(ShopContext)

  return (
    <Navbar>
      <Cart />
      {/* LOGO */}
      <Link to="/" exaxt>
        <img className="_navbar-logo" src={logo} />
      </Link>

      {/* Hamburger Menu */}
      <div onClick="" class="menu-btn">
        <div class="menu-btn__burger"></div>
      </div>

      <div className="menu-items">
        <Link to="/new-in">New In</Link>
        <Link to="/prints">Prints</Link>
        <Link to="/bestsellers">Bestsellers</Link>
        <Link to="/inspiration">Inspiration</Link>
      </div>

      {/* Menu Icons */}

      <NavItem class="hide-icons" icon={<HeartIcon class="icon" />} />

      {/* Changes for shopping cart count */}

      <li className="_nav-item" onClick={() => openCart()}>
        <a href="#" className="icon-button">
          <CartIcon class="icon" id="cart"  />
          <span className="cart-counter">{checkout.lineItems?.length || 0}</span>
        </a>
       
      </li>
      <NavItem icon={<AccountIcon class="icon" />}>

        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar >
  );
}

function Navbar(props) {
  return (
    <nav className="_navbar">
      <ul className="_navbar-buttons">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="_nav-item">
      <div className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>

      {open && props.children}
    </li>
  );
}


//dropdown menu for navbar 
function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <div

        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </div>
    );
  }

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

 

  //Logout
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);



  return (

    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef} >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AccountIcon class="icon" />}
            rightIcon={<RightArrowIcon class="icon" />}
            goToMenu="my-account"
          >
            <a > My Account</a>
          </DropdownItem>
          <DropdownItem leftIcon={<OrdersIcon class="icon" />}>
            My Orders
          </DropdownItem>
          <DropdownItem
            leftIcon={<SettingIcon class="icon" />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Settings Menu */}
      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<LeftArrowIcon class="icon" />}
          >
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<DarkModeIcon class="icon" />}>
            Dark Mode
          </DropdownItem>
          <DropdownItem leftIcon={<LocationIcon class="icon" />}>
            Location
          </DropdownItem>
          <DropdownItem leftIcon={<CurrencyIcon class="icon" />}>
            Currency
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* My Account Menu */}
      <CSSTransition
        in={activeMenu === "my-account"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div>
          <DropdownItem
            goToMenu="main"
            leftIcon={<LeftArrowIcon class="icon" />}
          >
            <h2>My Account</h2>
          </DropdownItem>
          {/*         
          <Link to="/account">
          <DropdownItem leftIcon="">
            Account
          </DropdownItem></Link> */}

          {user ? (
            <>
              <span>
                <Link to="/account">
                  <DropdownItem leftIcon="">Account</DropdownItem>
                </Link>
                <Link to="/" onClick={handleLogout} >
                  <DropdownItem>Logout</DropdownItem>
                </Link>
              </span>
            </>
          ) : (
              <>
                <span>
                  <Link to="/login" onClick={() => setOpen(!open)}>
                    <DropdownItem>Login</DropdownItem>
                  </Link>
                </span>
              </>
            )}
        </div>
      </CSSTransition>
    </div>
  );

  
}

export { Nav };
