import React from 'react';
import './RightSideBar.css';
import { FiSettings } from "react-icons/fi";
import { IoRocketSharp, IoPencilSharp } from "react-icons/io5";
import { SiPrettier } from "react-icons/si";
import { FcFlashOn, FcGallery } from "react-icons/fc";
import { FiMinus } from "react-icons/fi";
import { FaBirthdayCake, FaLanguage } from "react-icons/fa";
import { GiStarSattelites, GiLovers } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";
import { BiChalkboard } from "react-icons/bi";
import { MdWork, MdSchool } from "react-icons/md";

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
                <div>

                </div>

                <div className="itemVerification">
                    <div className="itemVerification">

                    </div>
                </div>


            </div>
        </div>
     )

}
export default RightSideBar
