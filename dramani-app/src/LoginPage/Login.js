import React from 'react';
import { Component } from 'react';
import './Login.css';
import { Button, Navbar } from 'react-bootstrap';
import { BiLike } from "react-icons/bi";
import { BsGrid, BsChat, BsEye, BsHeart, BsBell, BsThreeDots, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FcFlashOn, FcGallery } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaApple, FaGooglePlay, FaChevronDown, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import appstore from '../img/appstore.png'
import googleplay from '../img/googleplay.png'

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="loginLeftSide">
                <div className="socialMediaIcon">   
                   <ul>
                       <li><FaFacebookF size="1.5rem"  /></li>
                       <li><FaTwitter size="1.5rem" color="" /></li>
                       <li><FaInstagram size="1.5rem" color="" /></li>
                   </ul>
                </div>
            <div className="loginTextBox">
                <div className="loginText">
                    <h1>TWOO</h1>
                    <h3>Heureux de te revoir !</h3>
                </div>
                <button>
                <span className="facebookIcon"><FaFacebookF size="1rem" color="white"/></span> 
                <span>Inscris-toi avec Facebook</span></button>
                <h6>(Il s'agit simplement d'une connexion plus rapide, nous ne publions jamais sur Facebook)</h6>
            </div>
            <div className="loginFooterBox">
                <div className="conversationBox">
                    <p>2 048 864 724</p>
                    <p>conversations sur Twoo</p>
                </div>
                    <div className="footerBoxInformation" >
                        <span><a href="#">À propos</a></span>
                        <span><a href="#">Presse</a></span>
                        <span><a href="#">Emplois</a></span>
                        <span><a href="#">Mobile</a></span>
                        <span><a href="#">FAQ</a></span>
                        <span><a href="#">Conditions</a></span>
                        <span><a href="#">Confidentialité</a></span>
                        <span><a href="#">Cookies</a></span>
                        <span><a href="#">Protection des données</a></span>
                    </div>
                        <div className="footerBoxInformation2">
                        <span><a href="#">Sécurité</a></span>  
                        <span><a href="#">Blog</a></span>
                        <span><a href="#">Ablo-parler à de nouvelles personnes dans le monde entier</a></span>
                        </div>
            </div>

            </div>

            <div className="loginRightSide">
                <div className="suscribeBox">
                    <select name="languages">
                        <option>Français</option>
                        <option>English</option>
                        <option>Swahili</option>
                    </select>
                    <a href="#">Inscris-toi</a>
                </div>
                <div className="loginFormBox">
                    <h6>OU CONNECTE TOI AVEC TON ADDRESSE E-MAIL</h6>
                    <form>
                        <label>Adresse e-mail</label><br/>
                        <input></input> <br/>
                        <label>Mot de passe</label><br/>
                        <input></input> <br/>
                    </form>
                    <button className="loginFormBtn" href="#">Connecte-toi</button>
                    <p><a href="#">Mot de passe oublié</a></p>
                    <p>Pas encore membre ? <a href="#">Inscris-toi</a></p>
                </div>
                <div className="appLink">
                    <img src={appstore} width="150px" />
                    <img src={googleplay} width="150px" />
                </div>
                
            </div>

        </div>



    )
}

export default Login
