const hours = [3, 6, 8, 10, 12, 14, 16, 18, 19, 20, 22, 23, 24];

export default routesDataFinder = hour => {
  for (let i = hour; i <= 24; i++) {
    const available = hours.includes(i);
    console.log(available);
    if (available) {
      switch (i) {
        case 3:
          return require("../data/routesData_03.json");
        case 6:
          return require("../data/routesData_06.json");
        case 8:
          return require("../data/routesData_08.json");
        case 10:
          return require("../data/routesData_10.json");
        case 12:
          return require("../data/routesData_12.json");
        case 14:
          return require("../data/routesData_14.json");
        case 16:
          return require("../data/routesData_16.json");
        case 17:
          return require("../data/routesData_17.json");
        case 18:
          return require("../data/routesData_18.json");
        case 19:
          return require("../data/routesData_19.json");
        case 20:
          return require("../data/routesData_20.json");
        case 22:
          return require("../data/routesData_22.json");
        case 23:
          return require("../data/routesData_23.json");
        case 24:
          return require("../data/routesData_24.json");
        default:
          return null;
      }
    }
  }
};
