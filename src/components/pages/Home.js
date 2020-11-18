import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AppPromo from '../AppPromo';
import app from '../../config/fire'
import { Container } from 'react-bootstrap';

function Home(){
    return(
        
        <Container>
            <h1>Home</h1>
            <HeroSection/>
        </Container>
        
            
        
    )
}

export default Home;