const seed = require("./import");
const getEmails = require("./getEmails");

const { MongoClient } = require("mongodb-legacy");
// Connect URL
const url = "mongodb://127.0.0.1:27017";
let db;
// Connect to MongoDB
MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async (err, client) => {
    if (err) {
      return console.log(err);
    }

    // Specify the database you want to access
    db = client.db("careMetx_db");

    console.log(`MongoDB Connected: ${url}`);
    await seed(db);
    await getEmails(db);
  }
);
