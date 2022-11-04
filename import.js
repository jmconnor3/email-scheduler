const csvToJson = require("csvtojson");
const mongoose = require("mongoose");

const Patient = mongoose.model("Patients", {
  "Program Identifier": { type: String },
  "Data Source": { type: String },
  "Card Number": { type: String },
  "Member ID": { type: String },
  "First Name": { type: String },
  "Last Name": { type: String },
  "Date of Birth": { type: String },
  Address1: { type: String },
  "Address 2": { type: String },
  City: { type: String },
  State: { type: String },
  "Zip code": { type: String },
  "Telephone number": { type: String },
  "Email Address": { type: String },
  CONSENT: { type: String },
  "Mobile Phone": { type: String },
});

module.exports = async function seed(db) {
  return await csvToJson({ trim: true, delimiter: "auto" })
    .fromFile("data.csv")
    .then((data) => {
      return Patient.insertMany(data).then((err, res) => {
        if (err) {
          throw err;
        }
        console.log(`Inserted: ${res.insertedCount} rows`);
      });
    });
};
