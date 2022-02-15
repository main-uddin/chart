import { useMemo } from "react";
import { bestCamera, bestPerformance, bestValue } from "../../utils";
import { Button } from "../uiFragments";

const Item = ({ data }) => {
  const { brand, phone_price, ram, storage, phone_details, display_amoled } =
    data;

  const { mainCamera, selfieCamera, external, chipset, displayRes } =
    phone_details;

  let abc = bestPerformance({
    phone_price,
    ram,
    storage,
    display_amoled,
    chipset,
    displayRes,
  });

  console.log("abc: ", data);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'space-around',
        boxShadow: "0 0 2px",
        padding: " 10px",
        margin: "5px 0px",
        width: "50%",
      }}
    >
      <h1>{data?.brand}</h1>
      <p>{data?.phone_details?.model}</p>
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
  );
};
export default Item;
