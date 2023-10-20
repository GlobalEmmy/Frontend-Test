import { useState } from "react";
import {SiVectorworks} from "react-icons/si";
import {FaTicketAlt} from "react-icons/fa";
import {FaLightbulb} from "react-icons/fa";
import {IoIosPeople} from "react-icons/io";
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillSetting} from "react-icons/ai";
import {FaAward} from "react-icons/fa";
import {MdArticle} from "react-icons/md";
import Logo from "../image/logo.png";
import "./sidebar.css"
import "../index.css"
import { NavLink } from "react-router-dom";
import links from "../data"

const Sidebar = () => {
          const [isNavShowing, setIsNavShowing] = useState(false);
  return (
        
          <>
          {/* <div class="container"> */}
          {/* <!-- ======== Left section ======== --> */}
          <aside>
            <div class="top">
              <div class="logo">
                <img src={Logo} alt="" />
                <p>Dashboard Kit</p>
              </div>
             
            </div>
            <div class="sidebar">
              {/* <!-- -----Side bar 1----- --> */}
              <NavLink to="./" class="active">
                <span>{<SiVectorworks/>}</span>
                <h3>Overview</h3>
              </NavLink>
              {/* <!-- -----Side bar 2----- --> */}
              <NavLink to={"/tickets"}>
              <span>{<FaTicketAlt/>}</span>
                <h3>Tickets</h3>
              </NavLink>
              {/* <!-- -----Side bar 3----- --> */}
              <a href="#">
              <span>{<FaLightbulb/>}</span>
                <h3>Ideas</h3>
              </a>
              {/* <!-- -----Side bar 4----- --> */}
              <a href="#">
              <span>{<IoIosPeople/>}</span>
                <h3>Contacts</h3>
              </a>
              {/* <!-- -----Side bar 5----- --> */}
              <a href="#">
              <span>{<BsFillPersonFill/>}</span>
                <h3>Agents</h3>
                {/* <span class="message-count">26</span> */}
              </a>
              {/* <!-- -----Side bar 6----- --> */}
              <a href="#" className="article-menu">
              <span >{<MdArticle/>}</span>
                <h3 >Articles</h3>
              </a>
               {/* <!-- -----Side bar 7----- --> */}
               <a href="#">
              <span>{<AiFillSetting/>}</span>
                <h3>Settings</h3>
              </a>
              {/* <!-- -----Side bar 8----- --> */}
              <a href="#">
                <span>{<FaAward/>}</span>
                <h3>Subscription</h3>
              </a>
              
            </div>
          </aside>
          </>
        
    
  )
}

export default Sidebar
