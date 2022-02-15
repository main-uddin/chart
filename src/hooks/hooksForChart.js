import { useEffect, useState } from "react";
import { dataSet } from "../data";

export const useConditions = () => {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    let noWarranty = dataSet.filter((f) => f?.no_warranty).length;
    let officialWarranty = dataSet.filter((f) => f?.official_warranty).length;

    let unOfficialWarranty = dataSet.filter(
      (f) => f?.unofficial_warranty
    ).length;
    let usedPhone = dataSet.filter((f) => f?.used_phone).length;

    setConditions([
      officialWarranty,
      unOfficialWarranty,
      noWarranty,
      usedPhone,
    ]);
  }, []);

  return conditions;
};

export const useSources = () => {
  const [sources, setSources] = useState({
    daraz: { total: 0, parcent: 0 },
    bikroy: { total: 0, parcent: 0 },
    pickaboo: { total: 0, parcent: 0 },
  });

  const total = dataSet?.length;

  useEffect(() => {
    let totalAmountOfDaraz = dataSet.filter(
      (f) => f?.phone_link?.match(/daraz/)?.[0]
    ).length;
    let totalAmountOfBikroy = dataSet.filter(
      (f) => f?.phone_link?.match(/bikroy/)?.[0]
    ).length;
    let totalAmountOfPickaboo = dataSet.filter(
      (f) => f?.phone_link?.match(/pickaboo/)?.[0]
    ).length;

    let parcentOfDaraz = Math.floor((100 / total) * totalAmountOfDaraz);
    let parcentOfBikroy = Math.floor((100 / total) * totalAmountOfBikroy);
    let parcentOfPickaboo = Math.floor((100 / total) * totalAmountOfPickaboo);

    let daraz = {
      total: totalAmountOfDaraz,
      parcent: parcentOfDaraz,
    };
    let bikroy = {
      total: totalAmountOfBikroy,
      parcent: parcentOfBikroy,
    };
    let pickaboo = {
      total: totalAmountOfPickaboo,
      parcent: parcentOfPickaboo,
    };

    setSources({ daraz, bikroy, pickaboo });
  }, []);

  return sources;
};
