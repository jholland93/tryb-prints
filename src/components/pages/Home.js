import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AppPromo from '../AppPromo';
<<<<<<< HEAD
import app from '../../config/fire'
import { Container } from 'react-bootstrap';

function Home(){
    return(
        
        <Container>
            <h1>Home</h1>
            <HeroSection/>
        </Container>
        
            
        
=======

function Home(){
    return(
        <>
            <HeroSection/>
            <AppPromo/>
        </>
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
    )
}

export default Home;