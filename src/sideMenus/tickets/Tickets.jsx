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
import "../../index.css"

const Tickets = () => {
  return (
    <div className="ticket-container">
       
      <Header />
      {/* <h3>All tickets</h3> */}

      <div className="ticket-only">
      <h3 className=" ticket-title">All tickets</h3>
    
        <div className="ticket-heading">
          <p>Ticket details</p>
          <p className="customer-name">Customer name</p>
          <p>Date</p>
          <p>Priority</p>
        </div>

        <table>
      <tbody>
        {/* <!-- Ticket 1 --> */}
        <tr>
          <td className="cell1">
            <img src={ticket1} alt="img"  className="profile-photo " />
          </td>
          <td className="cell2">
            <p>Contact Email not Linked</p>
            <small>Updated 1 day ago</small>
          </td>
          <td>
            <p>Tom Cruise</p>
            <small>on 25.05.2019</small>
          </td>
          <td>
            <p>May 26, 2019</p>
            <small>6:30 PM</small>
          </td>
          <td className="priority">
            <p className="High">HIGH</p>
          </td>
          <td>
            <BiDotsVerticalRounded  />
          </td>
        </tr>

        {/* <!-- Ticket 2 --> */}
        <tr>
          <td>
          <img src={ticket2} alt="img"  className="profile-photo " />
          </td>
          <td>
            <p className="ticket-brief">Adding Images to Featured Posts</p>
            <small>Updated 1 day ago</small>
          </td>
          <td>
            <p>Matt Damon</p>
            <small>on 24.05.2019</small>
          </td>
          <td>
            <p>May 26, 2019</p>
            <small>8:00 AM</small>
          </td>
          <td>
            <p className="Low">LOW</p>
          </td>
          <td>
          <BiDotsVerticalRounded  />
          </td>
        </tr>
        {/* <!-- Ticket 3 --> */}
        <tr>
          <td>
          <img src={ticket3} alt="img"  className="profile-photo " />
          </td>
          <td>
            <p className="ticket-brief">When will I be charged this month?</p>
            <small>Updated 1 day ago</small>
          </td>
          <td>
            <p>Robert Downey</p>
            <p>on 24.05.2019</p>
          </td>
          <td>
            <p>May 26, 2019</p>
            <small>7:30 PM</small>
          </td>
          <td>
            <p className="High">HIGH</p>
          </td>
          <td>
          <BiDotsVerticalRounded  />
          </td>
        </tr>
        {/* <!-- Ticket 4 --> */}
        <tr>
          <td>
          <img src={ticket4} alt="img"  className="profile-photo "/>
          </td>
          <td>
            <p className="ticket-brief">Payment not going through</p>
            <small>Updated 2 day ago</small>
          </td>
          <td>
            <p>Christian Bale</p>
            <small>on 24.05.2019</small>
          </td>
          <td>
            <p>May 25, 2019</p>
            <small>5:00 PM</small>
          </td>
          <td>
            <p className="Normal">NORMAL</p>
          </td>
          <td>
          <BiDotsVerticalRounded  />
          </td>
        </tr>
        {/* <!-- Ticket 5 --> */}
        <tr>
          <td>
          <img src={ticket5} alt="img"  className="profile-photo " />
          </td>
          <td>
            <p className="ticket-brief">Unable to add replies</p>
            <small>Updated 2 day ago</small>
          </td>
          <td>
            <p>Henry Cavil</p>
            <small>on 24.05.2019</small>
          </td>
          <td>
            <p>May 25, 2019</p>
            <small>4:00 PM</small>
          </td>
          <td>
            <p className="High">HIGH</p>
          </td>
          <td>
          <BiDotsVerticalRounded  />
          </td>
        </tr>
        {/* <!-- Ticket 6 --> */}
        <tr>
          <td>
          <img src={ticket6} alt="img"  className="profile-photo "/>
          </td>
          <td>
            <p className="ticket-brief">Downtime since last week</p>
            <small>Updated 3 day ago</small>
          </td>
          <td>
            <p>Chris Evans</p>
            <small>on 23.05.2019</small>
          </td>
          <td>
            <p>May 25, 2019</p>
            <small>6:30 PM</small>
          </td>
          <td>
            <p className="Normal">NORMAL</p>
          </td>
          <td>
          <BiDotsVerticalRounded  />
          </td>
        </tr>
        {/* <!-- Ticket 7 --> */}
        <tr>
          <td>
          <img src={ticket7} alt="img"  className="profile-photo "/>
          </td>
          <td>
            <p>Referall Bonus</p>
            <small>Updated 4 day ago</small>
          </td>
          <td>
            <p>Sam Smith</p>
            <small>on 22.05.2019</small>
          </td>
          <td>
            <p>May 25, 2019</p>
            <small>2:00 PM</small>
          </td>
          <td>
            <p className="Low">LOW</p>
          </td>
          <td>
          <BiDotsVerticalRounded  />
          </td>
        </tr>
        {/* <!-- Ticket 8 --> */}
        <tr>
          <td>
          <img src={ticket8} alt="img"  className="profile-photo "/>
          </td>
          <td>
            <p className="ticket-brief">How do I change my password</p>
            <small>Updated 6 day ago</small>
          </td>
          <td>
            <p>Steve Rogers</p>
            <small>on 21.05.2019</small>
          </td>
          <td>
            <p>May 24, 2019</p>
            <small>1:00 PM</small>
          </td>
          <td>
            <p className="Normal">NORMAL</p>
          </td>
          <td>
          <BiDotsVerticalRounded  />
          </td>
        </tr>
      </tbody>
    </table>

      </div>
    </div>
  );
};

export default Tickets;
