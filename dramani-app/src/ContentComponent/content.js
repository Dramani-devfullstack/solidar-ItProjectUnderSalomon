import React from 'react';
import './Content.css';
import LeftSideBar from '../ContentComponent/LeftSideBar'
import RightSideBar from '../ContentComponent/RightSideBar'
import Footer from '../FooterComponent/Footer'
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