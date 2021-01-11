import React from 'react';
import './Content.css';
import LeftSideBar from '../ContentComponent/LeftSideBar'
import RightSideBar from '../ContentComponent/RightSideBar'
const Content =()=> {
     return (
         <div  className="Content">
            <LeftSideBar/>
            <RightSideBar/>
         </div>
     )

}
export default Content 