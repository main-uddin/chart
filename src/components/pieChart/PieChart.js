import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSources } from "../../hooks/hooksForChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        font: {
          size: 16,
        },
      },
    },
    title: {
      display: true,
      text: "Sources",
      position: "top",
      align: "start",
    },
  },
};

const PieChart = () => {
  const { bikroy, daraz, pickaboo } = useSources();

  const data = {
    labels: [
      `Bikroy ${bikroy?.parcent}%`,
      `Daraz ${daraz?.parcent}%`,
      `Pickaboo ${pickaboo?.parcent}%`,
    ],
    datasets: [
      {
        // label: "# of Votes",
        data: [bikroy?.total, daraz?.total, pickaboo?.total],
        backgroundColor: ["#0095A0", "#84AF27", "#FFC239"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChart;
