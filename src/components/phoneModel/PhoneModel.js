import "./PhoneModel.css";
const PhoneModel = ({ image, brand, model }) => {
  return (
    <div className="model-wrapper">
      <img src={image} alt="" />
      <div>
        <div className="phone-model">{model}</div>
        <div className="phone-brand">{brand}</div>
      </div>
    </div>
  );
};

export default PhoneModel;
