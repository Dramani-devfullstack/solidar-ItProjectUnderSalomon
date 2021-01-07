import React from 'react';
import { Component } from 'react';
import '../HeaderComponent/Header.css';
import { Button, Navbar } from 'react-bootstrap';
import { FaBeer, FaPlay,  } from 'react-icons/fa';
import { BiLike } from "react-icons/bi";
import { BsGrid, BsChat, BsEye, BsHeart, BsBell, BsThreeDots } from "react-icons/bs";
import { FcFlashOn, FcGallery } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

const Header = ()=>{
    
        return(
            <div className="content">
                {/* <Navbar bg="light" className="navbar">
                <div className="brandNotifcation">
                    <span className="logo">TWOO </span>
                    <Navbar.Brand href="#home"><FaPlay/><br/>Live</Navbar.Brand>
                    
                    <Navbar.Brand href="#home"><span className="bilike"><BiLike size="1.5em" alignSelf="center" /><br/></span>Découvrir</Navbar.Brand>
                    
                   
                    <Navbar.Brand href="#home"><FaPlay/><br/>Chercher</Navbar.Brand>
                    <Navbar.Brand href="#home"><FaPlay/><br/>Tchatter</Navbar.Brand>
                    <Navbar.Brand href="#home"><FaPlay/><br/>Likes</Navbar.Brand>
                    <Navbar.Brand href="#home"><FaPlay/><br/>Visiteurs</Navbar.Brand>
                </div>

                <div className="userIcon">
                    <Navbar.Brand href="#home">Premium</Navbar.Brand>
                    <Navbar.Brand href="#home">Crédits</Navbar.Brand>
                    <Navbar.Brand href="#home">User Icon</Navbar.Brand>
                    <Navbar.Brand href="#home">Cloche</Navbar.Brand>
                    <Navbar.Brand href="#home">...</Navbar.Brand>
                </div>
                </Navbar> */}

                <div className="header">
                    <div className="navbar">
                    
                                    <ul className="firstBrandBox">
                                        <li href="#"><a href="#" className="logo">TWOO</a></li>
                                        <li href="#"><FaPlay/><br/> Live</li>
                                        <li href="#"><BiLike size="1.5em"/><br/>Découvrir</li>
                                        <li href="#"><BsGrid size="1.5em"/><br/>Chercher</li>

                                        <li href="#" className="chatBtn"><BsChat size="1.5em"/><span className="chatNotification">6</span><br/>Tchatter</li>
                                        <li href="#"><BsHeart size="1.5em"/><br/>Likes</li>
                                        <li href="#"><BsEye size="1.5em"/><br/>Visiteurs</li>
                                    </ul>
                                    <ul className="secondBrandBox">
                                        <Button className="premiumBtn">Premium</Button>
                                        <button className="creditBtn">
                                         <span><FcFlashOn/> </span>  
                                         <span>Crédits</span>  
                                        </button>
                                        
                                        <li href="#"><img src="../public/image/user.jpg"/></li>
                                        <li href="#"><BsBell size="1.5em"/> </li>
                                        <li href="#"> <BsThreeDots size="1.5em"/></li>   
                                    </ul>             
                        </div>

                        <div className="optionalBar">
                           <span className="closeBtn"> <GrClose/></span>
                            <div className="slideNum">
                                <span>1-</span>
                                <span>2-</span>
                                <span>3-</span>
                                <span>4</span>
                            </div>
                            <div className="profilePictureAsking">
                                <span><FcGallery size="2.5em" /></span>
                                <p>Salomon, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                 <button>Ajouter une photo</button>
                            </div>
                        </div>

                    </div>



                </div>
            
            
        
        )
}

export default Header
