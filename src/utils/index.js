export const bestValue = (data) => {
  const { ram, storage, brand, phone_price } = data;
  if (
    ram >= 4 &&
    storage >= 64 &&
    phone_price <= 20000 &&
    (brand == "Realme" || brand == "Xiaomi")
  ) {
    return true;
  } else {
    return false;
  }
};

export const bestCamera = (data) => {
  const { storage, external, mainCamera, selfieCamera } = data;

  const abc = external.match(/microSDXC/)?.[0];
  const mainC = parseInt(mainCamera?.match(/\d+/)[0]);
  const selfie = parseInt(selfieCamera?.match(/\d+/)[0]);
  if (selfie >= 13 && storage >= 64 && mainC >= 16 && abc == "microSDXC") {
    return true;
  } else {
    return false;
  }
};

export const bestPerformance = (data) => {
  const { storage, ram, phone_price, chipset, displayRes, display_amoled } =
    data;
  const chip = chipset?.match(/Snapdragon/)?.[0];
  const resulation = displayRes?.match(/1080/)?.[0];

  if (
    storage >= 128 &&
    ram > 4 &&
    phone_price > 20000 &&
    display_amoled &&
    chip == "Snapdragon" &&
    resulation == "1080"
  ) {
    return true;
  } else {
    return false;
  }
};
