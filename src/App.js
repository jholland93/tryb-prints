import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
//Shop
import ProductPage from "./components/pages/ProductPage";
import Products from "./components/pages/Products";
import ShopProvider from "./context/shopContext";
import Cart from "./components/Cart";

//Shop
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

//SignUp
import SignUp from './components/SignUp'
import { Navbar } from "react-bootstrap";

//Debug const (for shop)
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

//Engine
const engine = new Styletron();




function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <div className="page-container">
          {/* Navbar */}
          <Router>

            <Nav className="nav_desktop" />
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/product" exact component={Products} />
              <Route path="/product/:id" exact component={ProductPage} />
              <Route path="/signup" exact component={SignUp} />
            </Switch>
          </Router>
          <div className="content-wrap"></div>

          {/* Footer */}
          <Footer />
        </div>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
