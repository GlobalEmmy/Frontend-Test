import { useState } from "react";
import LineChart from "../../components/Linechart";
// import {SiVectorworks} from "react-icons/si";
// import profile from "../../image/_header.png";
import Header from "../../components/Header";
import "./overview.css";
import  UserData  from "../../chart";



const Overview = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    dataSets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      }
    ]
  });
  return (
    <>
      <Header />
      {/* <LineChart chartData={userData} /> */}
    </>
  );
};

export default Overview;
