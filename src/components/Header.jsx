
import { IoMdNotifications } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import profile from "../image/_header.png";
import "./header.css";
import "../index.css";

const Header = () => {
  return (
    <div className="container-header">
      <div className="top1">
        <div className="header-capture">
        <p>Overview</p>
        </div>
        <div className="profile-container">
          <div className="icon">
            <span>{<BsSearch />}</span>
            <span>{<IoMdNotifications />}</span>
          </div>
          <div className="profile-info">
            <small>Jones Ferdinand</small>
            <img className="profile-photo" src={profile} alt="Profile pics" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
