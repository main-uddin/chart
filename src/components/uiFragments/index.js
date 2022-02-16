import search from "../../images/search.png";
import "./fragments.css";

export const Input = () => {
  return (
    <div className="search-wrapper">
      <input placeholder="Search by Title or Brand" type="text" />
      <img src={search} alt="" />
    </div>
  );
};

export const Button = ({ value, color, background }) => {
  return (
    <button
      className="btn"
      style={{
        color: color,
        border: `0.5px solid ${color}`,
        background: background,
        marginRight: "10px",
        height: "26px",
      }}
    >
      {value}
    </button>
  );
};
