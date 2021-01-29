import React from 'react';
import { Component } from 'react';
import './About.css';

const About = () => {
    return (
        <div className="aboutUser"> 
            <div className="aboutUserHeader">
                <span id="stars">TWOO</span>
                <span>Tu n'es pas Mahussi ?</span>
            </div>  
            <hr/>      
            <div className="aboutUserContent">
            <div className="aboutUserTitle" >
                <h3>Mahussi,une dernière chose...</h3>
                <p>Racontes-en un peu plus sur toi pour pouvoir rencontrer des gens intéressants.</p>
                <hr/>
            </div>
            <div className="aboutUserBox">
                <div className="aboutUserBoxForm">
                    <div>TA VILLE<span id="stars">*</span></div>
                    <input required></input><br/>
                    <div>TU ES ICI POUR<span id="stars">*</span></div>
                    <select required>
                        <option>Choix</option>
                        <option>Choix</option>
                    </select>    
                </div>
                
                <div className="aboutUserBoxSubTitle">
                    <p>SOUHAITES-TU RECEVOIR NOS OFFRES UNIQUES, DES CREDITS GRATUITS ET PLUS ENCORE PAR E-MAIL</p>
                    <span>Bien sûr !</span>
                    <span>Non merci</span>
                </div>
                <div className="aboutUserBoxBtn">
                    <a id="continuBtn">Continuer</a>
                    <a><span id="stars">*</span>Champ est obligatoire</a>
                </div>
                
            </div>
                
            </div>        

        </div>



    )
}

export default About
