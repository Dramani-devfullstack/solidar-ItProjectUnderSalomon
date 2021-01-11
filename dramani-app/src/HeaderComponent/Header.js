import React from 'react';
import { Component } from 'react';
import '../HeaderComponent/Header.css';
import { Button, Navbar } from 'react-bootstrap';
import { FaBeer, FaPlay,  } from 'react-icons/fa';
import { BiLike } from "react-icons/bi";
import { BsGrid, BsChat, BsEye, BsHeart, BsBell, BsThreeDots, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FcFlashOn, FcGallery } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";



const Header = ()=>{
    
        return(
            <div className="content">
               
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
                                        <button className="premiumBtn">Premium</button>
                                        <button className="creditBtn">
                                         <span><FcFlashOn/> </span>  
                                         <span>Crédits</span>  
                                        </button>
                                        
                                        <li href="#"><img src="/image/user.jpg" width="30px" height="30px"   /></li>
                                        <li href="#"><BsBell size="1.5em"/> </li>
                                        <li href="#"> <BsThreeDots size="1.5em"/></li>   
                                    </ul>             
                        </div>

                        <div className="optionalBar">
                           <span className="closeBtn"> <GrClose/></span>
                            <div className="slideNum">
                                <span>1</span>
                                <FiMinus size="1.5em" color="#fff" />
                                <span>2</span>
                                <FiMinus size="1.5em" color="#fff" />
                                <span>3</span>
                                <FiMinus size="1.5em" color="#fff" />
                                <span>4</span>
                            </div>
                            <div className="profilePictureAsking">
                                <span><FcGallery size="2.5em" color="white" /></span>
                                <p>Salomon, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. </p>
                                 <button>Ajoute une photo</button>
                            </div>
                            </div>
                            <div className="users">
                            <BsChevronLeft size="1.5em"  />
                                <span id="imgProfileSpan">
                                <span className="imgText">Ma photo ici</span>
                                <img  id="imgProfile" src="/image/user.jpg" width="80px" height="80px"   />
                                </span>
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                                <img src="/image/user.jpg" width="80px" height="80px"   />
                            <BsChevronRight size="1.5em" />
                            </div>

                        

                    </div>



                </div>
            
            
        
        )
}

export default Header
