import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      {/* Navbar */}
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
      <div className="content-wrap"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
