import React from 'react';
import './RightSideBar.css';
import { FiSettings } from "react-icons/fi";
import { IoRocketSharp, IoPencilSharp } from "react-icons/io5";
import { SiPrettier } from "react-icons/si";
import { FcFlashOn, FcGallery } from "react-icons/fc";
import { FiMinus } from "react-icons/fi";

const RightSideBar =()=> {
     return (
        <div  className="RightSideBarContent">
            <IoPencilSharp className="pencilIcon" size="1.5em" />
            <div className="aboutUserBox">
                <h5>À propos de toi</h5>
                <p>Ecris quelque chose à propos de toi</p>
                <div>
                    <ul>
                        <li><img src="/image/user.jpg" width="100px" height="auto"   /></li>
                        <li><img src="/image/user.jpg" width="100px" height="auto"   /></li>
                        <li><img src="/image/user.jpg" width="100px" height="auto"   /></li>
                    </ul>

                </div>

            </div>
        
        </div>
     )

}
export default RightSideBar
