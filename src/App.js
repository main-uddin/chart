import "./App.css";
import BarChart from "./components/barChart/BarChart";
import Header from "./components/header/Header";
import Item from "./components/item/Item";
import PhoneModel from "./components/phoneModel/PhoneModel";
import PieChart from "./components/pieChart/PieChart";
import { Button } from "./components/uiFragments";
import { dataSet } from "./data";

function App() {
  const handleClick = () => {
    console.log("clicked!", dataSet[0]);
  };

  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <PieChart />
        <BarChart />
      </div>
      <div>
        <ul>
          {dataSet?.map((e, idx) => (
            <li key={idx}>
              <Item data={e} />
            </li>
          ))}
        </ul>
      </div>
      <PhoneModel />
    </div>
  );
}

export default App;
