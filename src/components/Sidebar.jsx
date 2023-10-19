import { useState } from "react";
import {SiVectorworks} from "react-icons/si";
import Logo from "../image/logo.png";
import "./sidebar.css"
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
                <h2>Dashboard Kit</h2>
              </div>
              <div class="close" id="close-btn">
                <span class="material-icons-sharp">close</span>
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
              <span>{<SiVectorworks/>}</span>
                <h3>Tickets</h3>
              </NavLink>
              {/* <!-- -----Side bar 3----- --> */}
              <a href="#">
              <span>{<SiVectorworks/>}</span>
                <h3>Ideas</h3>
              </a>
              {/* <!-- -----Side bar 4----- --> */}
              <a href="#">
              <span>{<SiVectorworks/>}</span>
                <h3>Contacts</h3>
              </a>
              {/* <!-- -----Side bar 5----- --> */}
              <a href="#">
              <span>{<SiVectorworks/>}</span>
                <h3>Agents</h3>
                {/* <span class="message-count">26</span> */}
              </a>
              {/* <!-- -----Side bar 6----- --> */}
              <a href="#">
              <span>{<SiVectorworks/>}</span>
                <h3>Settings</h3>
              </a>
              {/* <!-- -----Side bar 7----- --> */}
              <a href="#">
                <span>{<SiVectorworks/>}</span>
                <h3>Subscription</h3>
              </a>
              
            </div>
          </aside>
          </>
        
    
  )
}

export default Sidebar
