import ticket1 from "../../image/1.png";
import ticket2 from "../../image/2.png";
import ticket3 from "../../image/3.png";
import ticket4 from "../../image/4.png";
import ticket5 from "../../image/5.png";
import ticket6 from "../../image/6.png";
import ticket7 from "../../image/7.png";
import ticket8 from "../../image/8.png";
import "./tickets.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Header from "../../components/HeaderTicket";
import '../../index'

const Tickets = () => {
  return (
    <div className="ticket-container">
       
      <Header />
      {/* <h3>All tickets</h3> */}

      <div className="ticket-only">
      <h3 className=" ticket-title">All tickets</h3>
    
        <div className="ticket-heading">
          <p>Ticket details</p>
          <p>Customer name</p>
          <p>Date</p>
          <p>Priority</p>
        </div>

        {/* Ticket 1 */}
        <div className="ticket__detail-1">
          <img className="profile-photo" src={ticket1} alt="" />
          <div className="ticket-detail">
            <p>Contact Email not Linked</p>
            <p>Updated 1 day ago</p>
          </div>
          <div className="ticket-bio">
            <p>Tom Cruise</p>
            <p>on 25.05.2019</p>
          </div>
          <div className="ticket-date">
            <p> May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="ticket-status">
            <p className="High">HIGH</p>
          </div>
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>

        {/* Ticket 2 */}
        <div className="ticket__detail-1">
          <img className="profile-photo" src={ticket2} alt="" />
          <div className="ticket-detail">
            <p className="ticket-brief">Adding Images to Featured Posts</p>
            <p>Updated 1 day ago</p>
          </div>
          <div className="ticket-bio">
            <p>Matt Damon</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="ticket-date">
            <p> May 26, 2019</p>
            <p>8:00 AM</p>
          </div>
          <div className="ticket-status">
            <p className="Low">LOW</p>
          </div>
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>

        {/* Ticket 3 */}
        <div className="ticket__detail-1">
          <img className="profile-photo" src={ticket3} alt="" />
          <div className="ticket-detail">
            <p className="ticket-brief">When will I be charged this month?</p>
            <p>Updated 1 day ago</p>
          </div>
          <div className="ticket-bio">
            <p>Robert Downey</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="ticket-date">
            <p> May 26, 2019</p>
            <p>7:30 PM</p>
          </div>
          <div className="ticket-status">
            <p className="High">HIGH</p>
          </div>
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>

        {/* Ticket 4 */}
        <div className="ticket__detail-1">
          <img className="profile-photo" src={ticket4} alt="" />
          <div className="ticket-detail">
            <p className="ticket-brief">Payment not going through</p>
            <p>Updated 2 day ago</p>
          </div>
          <div className="ticket-bio">
            <p>Christian Bale</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="ticket-date">
            <p> May 25, 2019</p>
            <p>5:00 PM</p>
          </div>
          <div className="ticket-status">
            <p className="Normal">NORMAL</p>
          </div>
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>

        {/* Ticket 5 */}
        <div className="ticket__detail-1">
          <img className="profile-photo" src={ticket5} alt="" />
          <div className="ticket-detail">
            <p className="ticket-brief">Unable to add replies</p>
            <p>Updated 2 day ago</p>
          </div>
          <div className="ticket-bio">
            <p>Henry Cavil</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="ticket-date">
            <p> May 25, 2019</p>
            <p>4:00 PM</p>
          </div>
          <div className="ticket-status">
            <p className="High">HIGH</p>
          </div>
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>

        {/* Ticket 6 */}
        <div className="ticket__detail-1">
          <img className="profile-photo" src={ticket6} alt="" />
          <div className="ticket-detail">
            <p className="ticket-brief">Downtime since last week</p>
            <p>Updated 3 day ago</p>
          </div>
          <div className="ticket-bio">
            <p>Chris Evans</p>
            <p>on 23.05.2019</p>
          </div>
          <div className="ticket-date">
            <p> May 25, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="ticket-status">
            <p className="Normal">NORMAL</p>
          </div>
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>

        {/* Ticket 7 */}
        <div className="ticket__detail-1">
          <img className="profile-photo" src={ticket7} alt="" />
          <div className="ticket-detail">
            <p>Referall Bonus</p>
            <p>Updated 4 day ago</p>
          </div>
          <div className="ticket-bio">
            <p>Sam Smith</p>
            <p>on 22.05.2019</p>
          </div>
          <div className="ticket-date">
            <p> May 25, 2019</p>
            <p>2:00 PM</p>
          </div>
          <div className="ticket-status">
            <p className="Low">LOW</p>
          </div>
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>

        {/* Ticket 8 */}
        <div className="ticket__detail-1">
          <img className="profile-photo" src={ticket8} alt="" />
          <div className="ticket-detail">
            <p className="ticket-brief">How do I change my password</p>
            <p>Updated 6 day ago</p>
          </div>
          <div className="ticket-bio">
            <p>Steve Rogers</p>
            <p>on 21.05.2019</p>
          </div>
          <div className="ticket-date">
            <p> May 24, 2019</p>
            <p>1:00 PM</p>
          </div>
          <div className="ticket-status">
            <p className="Normal">NORMAL</p>
          </div>
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
