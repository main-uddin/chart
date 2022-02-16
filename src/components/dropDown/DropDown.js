import { useState } from "react";
import "./dropDown.css";
const DropDown = ({ onClick }) => {
  const [toggle, setToggle] = useState(false);
  const [selectedValue, setSelectedValue] = useState("All Products");

  const dropdownToggle = () => {
    setToggle(!toggle);
  };

  const handleClick = (e) => {
    if (e === "value") {
      setSelectedValue(" Best Value");
    }
    if (e === "performance") {
      setSelectedValue(" Best Performance");
    }
    if (e === "camera") {
      setSelectedValue(" Best Camera");
    }
    onClick(e);
    setToggle(false);
  };

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-select-wrapper">
        <div style={{ marginRight: "5px" }}>Sort by : </div>
        <div className="drop-down-select" onClick={dropdownToggle}>
          {selectedValue}
        </div>
      </div>
      {toggle && (
        <div className="drop-down-options">
          <div onClick={() => handleClick("value")}>Best Value</div>
          <div onClick={() => handleClick("performance")}>Best Performance</div>
          <div onClick={() => handleClick("camera")}>Best Camera</div>
        </div>
      )}
    </div>
  );
};
export default DropDown;
