import React from "react";
import "../App.css";
import "./AppPromo.css";
import { Container, Text, Div, Row, Col, Card } from "atomize";
import appPromoImg from '../images/app-mockup-1.png'

function AppPromo() {
  return (
      <Row p="0" m="4rem" rounded="lg" bg="silver">
          
        <Col size="4" p="4rem 0">
          <Div
          p="0"
          m="0"
            h="100vh"
            bgImg={appPromoImg}
            bgSize="cover"
            
          />
        </Col>
      </Row>
  );
}

export default AppPromo;
