import React, { useState, useEffect, useRef } from "react";

import "./Navbar.css";

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

import logo from "../logo/tryb_logo_medium.png";

function Nav() {
  return (
    <Navbar>
      <img className="_navbar-logo" src={logo} />
      <NavItem icon={<HeartIcon />} />
      <NavItem icon={<CartIcon />} />
      <NavItem icon={<AccountIcon />}>
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
            leftIcon={<AccountIcon />}
            rightIcon={<RightArrowIcon />}
            goToMenu="my-account"
          >
            My Account
          </DropdownItem>
          <DropdownItem leftIcon={<OrdersIcon />}>My Orders</DropdownItem>
          <DropdownItem leftIcon={<SettingIcon />} goToMenu="settings">
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<LeftArrowIcon />}>
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<DarkModeIcon />}>Dark Mode</DropdownItem>
          <DropdownItem leftIcon={<LocationIcon />}>Location</DropdownItem>
          <DropdownItem leftIcon={<CurrencyIcon />}>Currency</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "my-account"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<LeftArrowIcon />}>
            <h2>My Account</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Login</DropdownItem>
          <DropdownItem leftIcon="🐸">Register</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export { Nav };
