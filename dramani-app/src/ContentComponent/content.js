import React from 'react';
import './Content.css';
import LeftSideBar from '../ContentComponent/LeftSideBar'
import RightSideBar from '../ContentComponent/RightSideBar'
import Footer from '../FooterComponent/Footer'
import Login from '../LoginPage/Login'
const Content =()=> {
     return (
         <div  className="Content">
            {/* <LeftSideBar/>
            <RightSideBar/>
            <Footer/> */}
            <Login/>
         </div>
     )

}
export default Content 