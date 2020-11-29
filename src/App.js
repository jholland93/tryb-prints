import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Nav } from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
//Shop
import ProductPage from "./components/pages/ProductPage";
import Products from "./components/pages/Products";
import ShopProvider from "./context/shopContext";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Shop
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

//SignUp
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import { AuthProvider } from "./context/AuthContext";
import { Container } from "react-bootstrap";

import fire from "./config/fire";
import HeroSection from "./components/HeroSection";

//Themes
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./styles.css";
import { Label, Switch } from "atomize";
import { GlobalStyles } from "./global";

//Debug const (for shop)
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

//Engine
const engine = new Styletron();



function App() {
  //set initial theme state
  const [theme, setTheme] = useState({ mode: "dark" });

  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          {/* Router */}
          <Router>
            <ToastContainer />

            <Nav className="nav" />
            
        <div className="sign-up">JOIN THE TRYB</div>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/prints" exact component={Products} />
            <Route path="/product/:id" exact component={ProductPage} />
            <Route path="/login" exact component={Login} />
          </Router>
          <Footer />

          {/* theme toggle switch */}
          <Label className="toggleTheme">
            <Switch
              onClick={(e) =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
              inactiveColor="grey"
              activeColor="blue"
              activeShadow="5"
              checked={theme.mode === "dark"}
            />
          </Label>
          {/* Footer */}
        </StyletronProvider>
      </ShopProvider>
    </ThemeProvider>
    
  );
  
}


export default App;
