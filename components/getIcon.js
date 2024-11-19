import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";

const getIcon = (forecast) => {
  if (forecast === "Sunny") {
    return sunny;
  } else if (forecast == "Rainy") {
    return rainy;
  } else if (forecast == "Partly cloudy") {
    return partlyCloudy;
  } else if (forecast == "Cloudy") {
    return cloudy;
  } else {
    return sunny;
  }
};

module.exports = getIcon;
