import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useConditions } from "../../hooks/hooksForChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      //   position: "top",
      display: false,
    },
    title: {
      display: true,
      text: "Conditions",
      position: "top",
      align: "start",
    },
  },
};

const labels = ["Official", "Unofficial", "Without warranty", "Used"];

const BarChart = () => {
  const conditions = useConditions();
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [...conditions],
        backgroundColor: "#0095A0",
      },
    ],
  };
  return (
    <div style={{ width: "600px", height: "500px" }}>
      <Bar options={options} data={data} />
    </div>
  );
};
export default BarChart;
