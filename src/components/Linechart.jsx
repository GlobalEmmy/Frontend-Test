import {Line} from "react-chartjs-2";
import {Chart as chartJS} from "chart.js/auto";
import "./chart.css";


const Linechart = ({chartData}) => {
  return <Line data={chartData} />;
}

export default Linechart
