import "./App.css";
import BarChart from "./components/barChart/BarChart";
import Header from "./components/header/Header";
import ItemList from "./components/item/ItemList";
import PieChart from "./components/pieChart/PieChart";
import { dataSet } from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="chart-container">
          <PieChart />
          <BarChart />
        </div>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
