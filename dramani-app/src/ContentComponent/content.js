import React from 'react';
import './Content.css';
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import Footer from '../FooterComponent/Footer'
import Login from '../LoginPage/Login'
const Content =()=> {
     return (
         <div  className="Content">
             <LeftSideBar/>
            <RightSideBar/>
            <Footer/> 
         </div>
     )

}
export default Content 