import { useEffect, useRef, useState } from "react";
import { dataSet } from "../../data";
import useOnScreen from "../../hooks/intersecting";
import Item from "./Item";
import loading from "../../images/loading.png";
import "./item.css";
import { bestCamera, bestPerformance, bestValue } from "../../utils";
import DropDown from "../dropDown/DropDown";
const ItemList = () => {
  const allPhones = dataSet.slice();
  const [sliceValue, setSliceValue] = useState({ start: 0, end: 20 });
  const [phones, setPhones] = useState([]);

  const visibleRef = useRef(null);
  const isVisible = useOnScreen(visibleRef);

  const [isLoadMore, setIsLoadMore] = useState(true);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setSliceValue({ start: sliceValue?.end, end: sliceValue?.end + 20 });
      }, 1000);
    }
  }, [isVisible]);

  useEffect(() => {
    const { start, end } = sliceValue;
    const cpData = allPhones.slice(start, end);
    setPhones([...phones, ...cpData]);
    if (!cpData?.length) {
      setIsLoadMore(false);
    }
  }, [sliceValue]);

  const findBestPhone = (e) => {
    const fdata = dataSet.filter(
      ({ brand, phone_price, ram, storage, phone_details, display_amoled }) => {
        const { mainCamera, selfieCamera, external, chipset, displayRes } =
          phone_details;
        if (e === "value") {
          return bestValue({ brand, phone_price, storage, ram });
        }

        if (e === "performance") {
          return bestPerformance({
            phone_price,
            ram,
            storage,
            display_amoled,
            chipset,
            displayRes,
          });
        }

        if (e === "camera") {
          return bestCamera({ mainCamera, selfieCamera, storage, external });
        }
      }
    );
    setPhones([...fdata]);
  };

  return (
    <div>
      <div className="list-heading">
        <div className="list-heading__text">All Products</div>
        <DropDown onClick={findBestPhone} />
      </div>

      {/* header section   */}

      <div className="grid-header">
        <div>Model</div>
        <div>Ram/Rom</div>
        <div>Tag</div>
        <div style={{ textAlign: "right" }}>Price</div>
      </div>

      {/* body section  */}

      <div className="table-body">
        {phones?.map((e, idx) => (
          <div key={idx}>
            <Item data={e} />
          </div>
        ))}
      </div>
      {isLoadMore && (
        <div
          ref={visibleRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0px",
          }}
        >
          <img
            className="loading-icon"
            src={loading}
            alt=""
            style={{ width: "50px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ItemList;
