import React from 'react';
import { icons } from 'react-icons/lib';
import './LeftSideBar.css';
import { FiSettings } from "react-icons/fi";
import { IoRocketSharp } from "react-icons/io5";
import { SiPrettier } from "react-icons/si";
import { FcFlashOn, FcGallery } from "react-icons/fc";
import { FiMinus } from "react-icons/fi";

const LeftSideBar =()=> {
     return (
         <div  className="LeftSideBarContent">
            <div className="userNameBox">
                <FiSettings className="settingIcon" size="1.5em" />
                <div className="profilPicture">
                    <span>Ajoute une photo</span>
                </div>
                <div className="userName">
                    <h5 className="nameOfUser">Vigninou dagbémabou,24</h5>
                    <h6 className="userCity">Lokossa</h6>
                    <div className="profileView">
                        <p>
                            À qui tu plais <br/>
                            <span>0</span>
                        </p>
                        <span class="vl"></span>
                        <p>
                            Profil vu par <br/>
                            <span>1</span>
                            
                        </p>
                        <span class="vl"></span>
                        <p>
                            Compatibles <br/>
                            <span>0</span>
                        </p>
                    </div>    
                </div>    
            </div>
            <hr/>

            <div className="profileVisibility">
                <div className="profileParamter1">
                    <IoRocketSharp id="profileParamter1Icon"  size="2em" color="blue"/>
                    <span>Popularite</span>
                    <span className="profileParamter1Span">Augmenter</span>
                </div>

                <div className="profileParamter1">
                    <IoRocketSharp id="profileParamter1Icon"  size="2em" color="blue"/>
                    <span>Invisible</span>
                    <span className="profileParamter1Span">Inactif</span>
                </div>

                <div className="profileParamter1">
                    <SiPrettier id="profileParamter1Icon"   size="2em" color="green"/>
                    <span>Premium</span>
                    <span className="profileParamter1Span">Abonne-toi</span>
                </div>

                <div className="profileParamter1">
                    <FcFlashOn id="profileParamter1Icon"  size="2em" />
                    <span>Crédits</span>
                    <span className="profileParamter1Span">Acheter</span>
                </div>
            </div>
            <hr/>

            <div className="premiumAdvantage">
                Publicité <FiMinus size="1.5em"/><a href="#">Les utilisateurs premium ne voient pas de pub</a>
            </div>
            
         </div>
     )

}
export default LeftSideBar; 