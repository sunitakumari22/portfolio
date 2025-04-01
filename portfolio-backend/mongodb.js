// const {MongoClient} =require('mongodb');
// const url='mongodb+srv://sunitakumari:ejmad8O4hmfV7MvJ@cluster0.ioevoco.mongodb.net/';
// const database='portfolio'

// const client= new MongoClient(url);

//  async function dbConnect(){
//     let result =await client.connect();
//     let db =result.db(database);
//     return db.collection('message');
 
// }
// module.exports= dbConnect;
// require('dotenv').config();
// const { MongoClient } = require('mongodb');

// const url = process.env.MONGODB_URI;
// const database = 'portfolio';

// const client = new MongoClient(url);

// async function dbConnect() {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('message');
// }

// module.exports = dbConnect;
require('dotenv').config();
const { MongoClient } = require('mongodb');

let cachedClient = null;
const url = process.env.MONGODB_URI;
const database = 'portfolio';

async function dbConnect() {
    if (cachedClient) {
        return cachedClient;
    }
    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect();
    cachedClient = client.db(database).collection("message");
    return cachedClient;
}

module.exports = dbConnect;

