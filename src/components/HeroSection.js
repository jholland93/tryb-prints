import React from "react";
import "../App.css";
import "./HeroSection.css";

import { Container, Text, Div, Row, Col, Image } from "atomize";

import Login from "./Login";
import three_d_1 from "../images/3dmockup.png";
import hero_bg from "../images/hero-img-1.png";
import { logDOM } from "@testing-library/react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@material-ui/core";

const outlineText = () => {};

const handleDragStart = (e) => e.preventDefault();

const items = [<Image src={hero_bg} />];

const OutlineText = () => {
  return (
    <div className="outline-text-container">
      {/* outline logo animatiion */}
      <svg
        id="outline-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 450 260"
        fill="none"
      >
        <path
          stroke="white"
          stroke-width="2"
          d="M94.08,190.31c-6.42,5.91-16.71,9.77-26.99,9.77c-25.19,0-41.38-19.27-41.38-49.34v-41.12H8.75v-8.48
 l16.96-9.77V59.75l26.47-8.74v38.81l36.75-2.06v21.85H52.19v39.84c0,20.05,8.74,30.07,23.39,30.07c5.4,0,9.77-1.29,12.85-2.57
 L94.08,190.31z"
        />
        <path
          stroke="white"
          stroke-width="2"
          d="M178.12,84.94v22.36c-16.96-1.03-29.56,4.11-37.01,13.11v77.1h-26.47V87.77h26.47v13.88
 C149.07,91.62,162.18,84.94,178.12,84.94z"
        />
        <path
          stroke="white"
          stroke-width="2"
          d="M235.17,187.23l-47.29-99.46h29.56l30.58,72.48l30.33-72.48h29.81l-75.56,165h-30.33L235.17,187.23z"
        />
        <path
          stroke="white"
          stroke-width="2"
          d="M437.94,142.77c0,34.44-21.33,57.31-53.46,57.31c-10.54,0-21.59-3.85-30.07-10.28v7.71h-26.47V9.89h26.47
 v83.78c9-5.4,19.28-8.74,30.07-8.74C416.61,84.94,437.94,108.07,437.94,142.77z M411.73,142.77c0-22.1-12.08-37.01-30.33-37.01
 c-10.02,0-20.3,3.85-26.99,10.28v52.69c6.94,6.94,17.48,11.31,26.99,11.31C399.65,180.03,411.73,165.12,411.73,142.77z"
        />
      </svg>
    </div>
  );
};

function HeroSection() {
  return (
    <div className="hero-container">
      {/* background carousel */}

      <Row m="0" p="1rem 0">
        <Col
          p={{ t: "1rem" }}
          size={{ xs: "12", sm: "6", md: "6", lg: "6", xl: "6" }}
        >
          <Div>
            <OutlineText />
          </Div>
        </Col>

        <Col
           
          p={{ y:{xs: '1rem', sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem"  }}}
          p={{ t:{xs: '1rem', sm: "1rem", md: "1rem", lg: "5rem", xl: "6rem"  }}}
          size={{ xs: "12", sm: "6", md: "6", lg: "6", xl: "6" }}
        >
          <Div p="2rem">
            <button className="hero-btn-1" type="button">
              SHOP NOW
            </button>
          </Div>
          <Div p="0rem 2rem">
            <button className="hero-btn-2" type="button">
              VR APP
            </button>
          </Div>
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
