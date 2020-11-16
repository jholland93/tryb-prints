import React, { useState, useEffect, useRef, useContext } from "react";

import "./Navbar.css";
import "../App.css";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as HeartIcon } from "../icons/heart.svg";
import { ReactComponent as MessengerIcon } from "../icons/messenger.svg";
import { ReactComponent as CartIcon } from "../icons/cart.svg";
import { ReactComponent as AccountIcon } from "../icons/account.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";
import { ReactComponent as RightArrowIcon } from "../icons/rightArrow.svg";
import { ReactComponent as LeftArrowIcon } from "../icons/leftArrow.svg";
import { ReactComponent as OrdersIcon } from "../icons/orders.svg";
import { ReactComponent as SettingIcon } from "../icons/setting.svg";
import { ReactComponent as DarkModeIcon } from "../icons/darkMode.svg";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as CurrencyIcon } from "../icons/currency.svg";

//Cart
import { Container, Anchor } from 'atomize'
import { ShopContext } from '../context/shopContext'


import logo from "../logo/tryb_logo_medium.png";
import { Link, Route, Router } from "react-router-dom";
import { Button, Div, Icon, SideDrawer, Text } from "atomize";
import { Dropdown } from "react-bootstrap";

import Cart from './../components/Cart';

function Nav() {

  //Use fucntion sopen cart from shopConext
  const { openCart } = useContext(ShopContext)

  return (
    <Navbar>
      <Cart />
      {/* LOGO */}
      <Link to="/">
        <img className="_navbar-logo" src={logo} />
      </Link>

      {/* Hamburger Menu */}
      <div onClick="" class="menu-btn">
        <div class="menu-btn__burger"></div>
      </div>

      <div className="menu-items">
        <Link to="/product">New In</Link>
        <Link to="/signup">Prints</Link>
        <Link to="/product">Bestsellers</Link>
        <Link to="/product">Inspiration</Link>
        {/* onClick event to open side cart*/}
        {/* <Anchor onClick={() => openCart()}>Cart</Anchor> */}
      </div>

      {/* Menu Icons */}

      <NavItem class="hide-icons" icon={<HeartIcon class="icon" />} />
      <NavItem icon={<CartIcon class="icon" onClick={() => openCart()} />} />
      <NavItem icon={<AccountIcon class="icon" />}>

        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>

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
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
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
            <a href="#"> My Account</a>
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
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<LeftArrowIcon class="icon" />}
          >
            <h2>My Account</h2>
          </DropdownItem>
          <DropdownItem leftIcon="" ><a >Login</a></DropdownItem>
          <Dropdown.Item leftIcon="" href="/signup" class="dropdown-item">Sign Up</Dropdown.Item>
        </div>
      </CSSTransition>
    </div>
  );
}

export { Nav };
