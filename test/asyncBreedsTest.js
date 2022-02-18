const assert = require("chai").assert;
const breedDetailsFromFile = require("../asyncBreeds");

describe("#breedDetailsFromFile", () => {
  it("provides, via callback,breed details for the Bombay breed", (done) => {
    breedDetailsFromFile("Bombay", (bombay) => {
      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(expectedDesc, bombay)
      done();
    });
  });
  it("provides, via callback, undefined for a breed that does not exist", (done) => {
    breedDetailsFromFile("Saphire", (desc) => {
      assert.equal(undefined, desc);
      done();
    });
  });
});


//Move the console.log into a new function:
const printOutBreed = breed => {
  console.log('Return Value: ', breed)
};

//we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile("Bombay", printOutBreed)