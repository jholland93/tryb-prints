<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
=======
import React, { useState, useEffect, useRef, useContext } from "react";
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b

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

<<<<<<< HEAD
=======
//Cart
import { Container, Anchor } from 'atomize'
import { ShopContext } from '../context/shopContext'


>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
import logo from "../logo/tryb_logo_medium.png";
import { Link, Route, Router } from "react-router-dom";
import { Button, Div, Icon, SideDrawer, Text } from "atomize";
import { Dropdown } from "react-bootstrap";

<<<<<<< HEAD
import "../context/AuthContext";
import fire from "../config/fire";
import Login from "./Login";

function Nav() {
  return (
    <Navbar>
=======
import Cart from './../components/Cart';

function Nav() {

  //Use fucntion sopen cart from shopConext
  const { openCart } = useContext(ShopContext)

  return (
    <Navbar>
      <Cart />
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
      {/* LOGO */}
      <Link to="/">
        <img className="_navbar-logo" src={logo} />
      </Link>

      {/* Hamburger Menu */}
      <div onClick="" class="menu-btn">
        <div class="menu-btn__burger"></div>
      </div>

      <div className="menu-items">
<<<<<<< HEAD
        <Link to="/new-in">New In</Link>
        <Link to="/prints">Prints</Link>
        <Link to="/bestsellers">Bestsellers</Link>
        <Link to="/inspiration">Inspiration</Link>
      </div>

      {/* Menu Icons */}
      <div class="second-menu">
        <NavItem icon={<HeartIcon class="icon" />} />
        <NavItem icon={<CartIcon class="icon" />} />
        <NavItem icon={<AccountIcon class="icon" />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </div>
    </Navbar>
=======
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

>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
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
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
=======
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b

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

<<<<<<< HEAD
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

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

=======
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
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
<<<<<<< HEAD

=======
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
      <CSSTransition
        in={activeMenu === "my-account"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
<<<<<<< HEAD
        <div>
=======
        <div className="menu">
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
          <DropdownItem
            goToMenu="main"
            leftIcon={<LeftArrowIcon class="icon" />}
          >
            <h2>My Account</h2>
          </DropdownItem>
<<<<<<< HEAD
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
                <Link to="/" onClick={handleLogout}>
                  <DropdownItem>Logout</DropdownItem>
                </Link>
              </span>
            </>
          ) : (
            <>
              <span>
                <Link to="/login">
                  <DropdownItem>Login</DropdownItem>
                </Link>
              </span>
            </>
          )}
=======
          <DropdownItem leftIcon="" ><a >Login</a></DropdownItem>
          <Dropdown.Item leftIcon="" href="/signup" class="dropdown-item">Sign Up</Dropdown.Item>
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
        </div>
      </CSSTransition>
    </div>
  );
}

export { Nav };
