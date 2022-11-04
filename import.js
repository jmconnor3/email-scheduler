const csvToJson = require('csvtojson');
const mongo = require('mongodb').MongoClient


const url = 'mongodb://localhost:27017'

module.exports.seed = async function seed() {
return await csvToJson()
.fromFile('data.csv')
.then(data => {
    console.log(data);
    mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true},
        (err, client) => {
            if(err) {
                throw err;
            }
            client.db('careMetx_db')
            .collection('Patients')
            .insertMany(data, (err, res) =>{
                if(err){
                    throw err
                }
                console.log(`Inserted: ${res.insertedCount} rows`);
                client.close()
            })
        })
})
}
