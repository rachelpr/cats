const fs = require("fs");

const breedDetailsFromFile = function (breed, functionToPassTheData) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // Pass data into callback instead of returning it directly
    if (!error) {
      functionToPassTheData(data)
    } else {
      return functionToPassTheData(undefined)
    }
  });
};

module.exports = breedDetailsFromFile

