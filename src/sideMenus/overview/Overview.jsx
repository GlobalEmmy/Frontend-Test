import { useState } from "react";
import { UserData } from "../../data";
import LineChart from "../../components/Linechart";
// import {SiVectorworks} from "react-icons/si";
// import profile from "../../image/_header.png";
import Header from "../../components/Header";
import { AiOutlinePlus } from "react-icons/ai";
import "./overview.css";
import "../../index.css";

const Overview = () => {
  // 👇️ initialize checked state to true
  const [isSubscribed, setIsSubscribed] = useState(true);

  const handleChange = () => {
    setIsSubscribed((current) => !current);
  };
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "blue",
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="overview-container">
      <Header />
      <div className="cards-container1">
        <div className="card">
          <p>Unresolved</p>
          <p>60</p>
        </div>

        <div className="card">
          <p>Overdue</p>
          <p>16</p>
        </div>

        <div className="card">
          <p>Open</p>
          <p>43</p>
        </div>

        <div className="card">
          <p>On hold</p>
          <p>64</p>
        </div>
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />

        <div className="container-card2">
          <div className="card2__1">
            <div className="top">
              <div className="left">
                <p>Unresolved tickets</p>
                <p>
                  {" "}
                  Group: <span>Support</span>
                </p>
              </div>
              <div className="right">
                <p className="view">View details</p>
              </div>
            </div>

            <div className="others">
              <p>Waiting on Feature Request</p>
              <p>4238</p>
            </div>

            <div className="others">
              <p>Waiting on Customer Response</p>
              <p>1005</p>
            </div>

            <div className="others">
              <p>Awaiting Developer Fix</p>
              <p>914</p>
            </div>

            <div className="others">
              <p>pending</p>
              <p>281</p>
            </div>
          </div>

          <div className="card2__1">
            <div className="top">
              <div className="left">
                <p>Tasks</p>
                <p>Today</p>
              </div>
              <div className="right">
                <p className="view">View all</p>
              </div>
            </div>
            <div className="others">
              <p>Create new task</p>
              <span>
                {" "}
                <AiOutlinePlus />{" "}
              </span>
            </div>

            <div className="others">
              <input type="text" name="select" id="select" />
              <p>Finished ticket update</p>
              <p className="Low">URGENT</p>
            </div>

            <div className="others">
              <input type="checkbox" name="select" id="select" />
              <p>Create new ticket example</p>
              <p className="Normal">NEW</p>
            </div>

            <div className="others">
              <input type="checkbox" name="select" id="select" />
              <p>Update ticket report</p>
              <p className="Default">DEFAULT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
