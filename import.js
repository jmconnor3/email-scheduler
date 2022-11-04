const csvToJson = require("csvtojson");

module.exports = async function seed(db) {
  return await csvToJson({ trim: true, delimiter: "auto" })
    .fromFile("data.csv")
    .then((data) => {
      db.collection("Patients").insertMany(data, (err, res) => {
        if (err) {
          throw err;
        }
        console.log(`Inserted: ${res.insertedCount} rows`);
      });
    });
};
