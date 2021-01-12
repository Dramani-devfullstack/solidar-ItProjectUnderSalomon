import React from 'react';
import './Footer.css';
import { FaApple, FaGooglePlay, FaGooglePlusG, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer=()=>{

    return(
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
                    <ul>
                        <li>À propos</li>
                        <li>Presse</li>
                        <li>Emploi</li>
                        <li>Equipe</li>
                        <li>Applis et mobile</li>
                        <li>FAQ</li>
                        <li>Protection des données</li>
                        <li>Sécurité</li>  
                        <li>Blog</li>
                        <li>Ablo-parler à de nouvelles personnes dans le monde entier</li>
                        
                    </ul>
                </div>
                <div className="footerInformationRule">
                    <ul>
                            <li>Conditions</li>
                            <li>Confidentialités</li>
                            <li>Cookies</li>
                            <li>Code de conduites</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>&copy; 2021 TWOO</li>
                            
                            
                        </ul>
                </div>
            </div>

        

        </div>
    )
}

export default Footer