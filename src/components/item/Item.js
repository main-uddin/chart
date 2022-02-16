import { bestCamera, bestPerformance, bestValue } from "../../utils";
import PhoneModel from "../phoneModel/PhoneModel";
import { Button } from "../uiFragments";

const Item = ({ data }) => {
  const {
    brand,
    phone_price,
    ram,
    storage,
    phone_details,
    display_amoled,
    phone_images,
  } = data;

  const { mainCamera, selfieCamera, external, chipset, displayRes, model } =
    phone_details;

  return (
    <div className="grid-body">
      <PhoneModel model={model} brand={brand} image={phone_images[0]} />
      <div className="grid-body__ram">{`${ram}/${storage}`}</div>
      <div>
        {bestValue({ brand, phone_price, ram, storage }) && (
          <Button
            value="Best Value"
            background="rgba(221, 158, 16, 0.1"
            color="#DD9E10"
          />
        )}
        {bestCamera({
          mainCamera,
          selfieCamera,
          storage,
          external,
        }) && (
          <Button
            value="Best Camera"
            background="rgba(135, 76, 114, 0.1)"
            color="#874C72"
          />
        )}
        {bestPerformance({
          phone_price,
          ram,
          storage,
          display_amoled,
          chipset,
          displayRes,
        }) && (
          <Button
            value="Best Performance"
            background="rgba(17, 160, 219, 0.1)"
            color="#11A0DB"
          />
        )}
      </div>
      <p className="grid-body__price">{phone_price}</p>
    </div>
  );
};
export default Item;
