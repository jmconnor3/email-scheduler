const expect = require("chai").expect;
const csvToJson = require("csvtojson");

const { Patient } = require("../import");

describe("Verify the data in flat file matches the data in Patients collection", () => {
  it("should match the flat file given with the date seeded in mongo", () => {
    /// call findall on patient model and match it with csv output

    csvToJson({ trim: true, delimiter: "auto" })
      .fromFile("data.csv")
      .then(async (data) => {
        const fromDb = await Patient.find({});
        console.log({ data, fromDb });
        expect(data).to.equal(fromDb);
      });
  });
});
