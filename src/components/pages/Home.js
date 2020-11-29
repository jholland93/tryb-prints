import React, { useState, useEffect, useContext } from "react";

import HeroSection from "../HeroSection";

import { ShopContext } from "../../context/shopContext";
import "./Home.css";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/swiper.scss";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Text, Div, Row, Col, Container, Image } from "atomize";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import AppPromo from "../AppPromo";

function Home() {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0)//scroll to top on page load
  }, [fetchAllProducts]);


  //breakpoints for carousel items
  const responsive = {
    0: { items: 1 },
    300: { items: 1 },
    600: { items: 2 },
    920: { items: 3 },
    1400: { items: 5 }
  };

  return (
    <div>
      <HeroSection/>
      
      <AliceCarousel
        disableDotsControls
        disableButtonsControls
        autoPlay
        autoPlayStrategy="default"
        autoPlayInterval={2000}
        animationDuration={2000}
        infinite
        mouseTracking
        touchTracking
        swipeExtraPadding="1900"
        items={products.map((product) => (
          
            <Row m= "4rem">
              <Col>
                <Link to={`/product/${product.id}`}>
                  <Div
                    
                    h="20rem"
                    w="14rem"
                    bgImg={product.images[0].src}
                    bgSize="cover"
                    bgPos="centre centre"
                    shadow="4"
                    hoverShadow="5"
                    transition="0.3s"
                    m={{ b: "1.5rem" }}
                    rounded="xs"
                   
                  />
                </Link>
              </Col>
            </Row>
          
        ))}
        responsive={responsive}
      />
      <AppPromo/>

      {/* <Carousel>

          </Carousel>
      <Row>
      <Swiper slidesPerView={4} rebuildOnUpdate true>
            
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                 
                      <Div
                        h="20rem"
                        w="15rem"
                        bgImg={product.images[0].src}
                        bgSize="cover"
                        bgPos="centre centre"
                        m= "0.25rem"
                        rounded="lg"
                      />
        
                </SwiperSlide>
               
              ))}
            
          </Swiper>
          </Row> */}
    </div>
  );
}

export default Home;
