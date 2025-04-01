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
require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URI;
const database = 'portfolio';

const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('message');
}

module.exports = dbConnect;
