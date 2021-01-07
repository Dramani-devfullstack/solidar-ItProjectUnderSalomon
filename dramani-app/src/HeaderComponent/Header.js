import React from 'react';
import { Component } from 'react';
import '../HeaderComponent/Header.css';
import { Button, Navbar } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

const Header = ()=>{
    
        return(
            <div>
                <Navbar bg="light">
                <div className="brandNotifcation">
                    <Navbar.Brand href="#home">TWOO </Navbar.Brand>
                    <Navbar.Brand href="#home">Live</Navbar.Brand>
                    <Navbar.Brand href="#home">Découvrir</Navbar.Brand>
                    <Navbar.Brand href="#home">Chercher</Navbar.Brand>
                    <Navbar.Brand href="#home">Tchatter</Navbar.Brand>
                    <Navbar.Brand href="#home">Likes</Navbar.Brand>
                    <Navbar.Brand href="#home">Visiteurs</Navbar.Brand>
                </div>

                <div className="userIcon">
                    <Navbar.Brand href="#home">Premium</Navbar.Brand>
                    <Navbar.Brand href="#home">Crédits</Navbar.Brand>
                    <Navbar.Brand href="#home">User Icon</Navbar.Brand>
                    <Navbar.Brand href="#home">Cloche</Navbar.Brand>
                    <Navbar.Brand href="#home">...</Navbar.Brand>
                </div>
                </Navbar>
            </div>
            
        
        )
}

export default Header
