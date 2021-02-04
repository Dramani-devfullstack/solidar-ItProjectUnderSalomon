import React from 'react';
import './Footer.css';
import { FaApple, FaGooglePlay, FaGooglePlusG, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer=()=>{

    return(
        
        <div className="mainFooter">
            <div className="footerContent">

            <div className="footerIconList">
                <button> <FaApple size="3.5rem"/> <span>Télécharger dans <span id="footerIconText">Apple Store</span> </span></button>
                <button> <FaGooglePlay size="3.5rem" /><span>Disponible sur <span id="footerIconText">Google Play</span>  </span></button>
                <div className="iconManagementone">
                <span></span>
                <FaFacebookF size="1.5rem" color="white"/>
                </div>

                <div className="iconManagementtwo">
                <span></span>
                <FaGooglePlusG size="1.5rem" color="white"/>
                </div>

                <div className="iconManagementthree">
                <span></span>
                <FaTwitter size="1.5rem" color="white"/>
                </div>

                <div className="iconManagementfour">
                <span></span>
                <FaInstagram size="1.5rem" color="white" />
                </div>
                <hr/>
            </div>    
            <div className="footerInformation">
                <div className="footerInformationText">
                    <div className="footerInformationTextSpan" >
                        <span><a href="#">À propos</a></span>
                        <span><a href="#">Presse</a></span>
                        <span><a href="#">Emploi</a></span>
                        <span><a href="#">Equipe</a></span>
                        <span><a href="#">Applis et mobile</a></span>
                        <span><a href="#">FAQ</a></span>
                        <span><a href="#">Protection des données</a></span>
                        <span><a href="#">Sécurité</a></span>  
                        <span><a href="#">Blog</a></span>
                    </div>
                    <div><a href="#">Ablo-parler à de nouvelles personnes dans le monde entier</a></div>
                </div>
                <div id="footerInformationRule">
                    <span><a href="#">Conditions</a></span>
                    <span><a href="#">Confidentialités</a></span>
                    <span><a href="#">Cookies </a></span>
                    <span><a href="#">Code de conduites</a></span>
                    <span><a href="#">Facebook</a></span>
                    <span><a href="#">Youtube</a></span>
                    <span><a href="#">Twitter</a></span>
                    <span><a href="#">Instagram</a></span>
                    <span><a href="#">&copy; 2021 TWOO</a></span>
                </div>
            </div>

            </div>
            
        </div>
    )
}

export default Footer