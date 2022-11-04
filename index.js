const mongoose = require("mongoose");
const seed = require("./import");
const getEmails = require("./seedEmail");

// Connect URL
const url = "mongodb://127.0.0.1:27017/careMetx_db";
// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Specify the database you want to access
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
console.log(`MongoDB Connected: ${url}`);
async function main() {
  await seed(db).catch((e) => console.error(e));
  //   await getEmails(db);
}
main();
