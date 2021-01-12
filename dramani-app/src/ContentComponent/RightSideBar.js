import React from 'react';
import './RightSideBar.css';
import { FiSettings } from "react-icons/fi";
import { IoRocketSharp, IoPencilSharp } from "react-icons/io5";
import { SiPrettier, SiAdguard} from "react-icons/si";
import { FcFlashOn, FcGallery } from "react-icons/fc";
import { FiMinus } from "react-icons/fi";
import { FaBirthdayCake, FaLanguage, FaHandPeace, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiStarSattelites, GiLovers, GiEnvelope } from "react-icons/gi";
import { BsHeart, BsPhone } from "react-icons/bs";
import { BiChalkboard } from "react-icons/bi";
import { MdWork, MdSchool } from "react-icons/md";
import { } from "react-icons/si";

const RightSideBar =()=> {
     return (
        <div className="RightSideBarContent">
            <IoPencilSharp className="pencilIcon" size="1.5em" />
            <div className="aboutUserBox">
                <h5>À propos de toi</h5>
                <p>Ecris quelque chose à propos de toi</p>
                <div className="aboutUserBoxImg">
                    <span>
                        <span className="aboutUserBoxText">
                            <icon>+</icon>
                            <span>AJOUTER</span>
                        </span>
                    </span>
                    <span></span>
                    <span></span>
                </div>
                <div className="compatibiliClass">
                    <h5>Question de compatibilité</h5>
                    <p>Ton taux de compatibilité est de 25%</p>
                    <p>Tu as répondu à une question</p>
                </div>
                 <button>Réponds à plus de question</button>
            </div>
            <hr/>
            <div className="profileInfo">
                <h5>INFOS PROFILE</h5>
                <button>Complèter votre profile</button>
                <div className="profileInfoDetail">
                    <div className="profileInfoBirth">
                    <div><FaBirthdayCake/><span id="profileInfoFirstSpan">Date de naissance</span></div>
                        <span>4 Avril 1993</span>
                    </div>

                    <div className="profileInfoBirth">
                    <div><GiStarSattelites/><span id="profileInfoFirstSpan">Signe astrologique</span></div>
                        <span>Belier</span>
                    </div>

                    <div className="profileInfoBirth">
                    <div><FaLanguage/><span id="profileInfoFirstSpan">Langue préférée</span></div>
                        <span>Français</span>
                    </div>

                    <div className="profileInfoBirth">
                        <div><GiLovers/><span id="profileInfoFirstSpan">Situation amoureuse</span></div> 
                        <span>Je suis célibataire</span>
                    </div>

                    <div className="profileInfoBirth">
                        <div><BsHeart/><span id="profileInfoFirstSpan">Orientation sexuelle</span></div>
                        <span>Hétérosexuelle</span>
                    </div>

                    <div className="profileInfoBirth">
                        <div><BiChalkboard/><span id="profileInfoFirstSpan">Travail et Etudes</span></div>
                        <span>...</span>
                    </div>

                    <div className="profileInfoBirth">
                    <div><MdWork/><span id="profileInfoFirstSpan">Emploi</span></div>
                        <span></span>
                    </div>

                    <div className="profileInfoBirth">
                    <div><MdSchool/><span id="profileInfoFirstSpan">Etudes</span></div>
                        <span></span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="profileVerification">
                <h5>Vérification</h5>
                    <div className="itemGuardVerification">
                            <div className="guardIcon">
                                <SiAdguard size="2rem" color="white"/>
                                <span>0/3</span>
                            </div>
                            <div>
                                Un profil vérifié te permet de faire plus de rencontres ! Encore 3 vérifications pour obtenir le statut vérifié
                            </div>    
                    </div>
              

                <div className="itemVerification">

                    <div className="eachItemVerification">
                        <div className="oneItemVerification">
                             <div className="iconManagement">
                                <span></span>
                                <FaHandPeace size="2rem" color="white"/> 
                             </div>
                            <div className="itemVerificationText" >
                                <span>Photo de profile</span>
                                <span>Pas vérifié</span>
                            </div>
                        </div>
                        <button className="verificationButton">Vérifier</button>
                    </div>

                    <div className="eachItemVerification">
                        <div className="oneItemVerification">
                             <div className="iconManagement">
                                <span></span>
                                <SiPrettier size="2rem" color="white"/> 
                             </div>
                            <div className="itemVerificationText" >
                                <span>Premium</span>
                                <span>Pas vérifié</span>
                            </div>
                        </div>
                        <button className="verificationButton">Vérifier</button>
                    </div>

                    <div className="eachItemVerification">
                        <div className="oneItemVerification">
                             <div className="iconManagement">
                                <span></span>
                                <FaFacebookF size="2rem" color="white"/> 
                             </div>
                            <div className="itemVerificationText" >
                                <span>Facebook</span>
                                <span>Pas vérifié</span>
                            </div>
                        </div>
                        <button className="verificationButton">Vérifier</button>
                    </div>

                    <div className="eachItemVerification">
                        <div className="oneItemVerification">
                             <div className="iconManagement">
                                <span></span>
                                <GiEnvelope size="2rem" color="white"/> 
                             </div>
                            <div className="itemVerificationText" >
                                <span>Windows Live</span>
                                <span>Pas vérifié</span>
                            </div>
                        </div>
                        <button className="verificationButton">Vérifier</button>
                    </div>

                    <div className="eachItemVerification">
                        <div className="oneItemVerification">
                             <div className="iconManagement">
                                <span></span>
                                <BsPhone size="2rem" color="white"/> 
                             </div>
                            <div className="itemVerificationText" >
                                <span>Numéro de téléphone</span>
                                <span>Pas vérifié</span>
                            </div>
                        </div>
                        <button className="verificationButton">Vérifier</button>
                    </div>

                    <div className="eachItemVerification">
                        <div className="oneItemVerification">
                             <div className="iconManagement">
                                <span></span>
                                <FaTwitter size="2rem" color="white"/> 
                             </div>
                            <div className="itemVerificationText" >
                                <span>Twitter</span>
                                <span>Pas vérifié</span>
                            </div>
                        </div>
                        <button className="verificationButton">Vérifier</button>
                    </div>

                    <div className="eachItemVerification">
                        <div className="oneItemVerification">
                             <div className="iconManagement">
                                <span></span>
                                <FaLinkedinIn size="2rem" color="white"/> 
                             </div>
                            <div className="itemVerificationText" >
                                <span>Linkedin</span>
                                <span>Pas vérifié</span>
                            </div>
                        </div>
                        <button className="verificationButton">Vérifier</button>
                    </div>

                    <div className="eachItemVerification">
                        <div className="oneItemVerification">
                             <div className="iconManagement">
                                <span></span>
                                <FaInstagram size="2rem" color="white"/> 
                             </div>
                            <div className="itemVerificationText" >
                                <span>Instagram</span>
                                <span>Pas vérifié</span>
                            </div>
                        </div>
                        <button className="verificationButton">Vérifier</button>
                    </div>

                </div>


            </div>
        </div>
     )

}
export default RightSideBar
