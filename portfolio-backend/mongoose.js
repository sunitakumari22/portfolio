const {MongoClient} =require('mongodb');
const url='mongodb+srv://sunitakumari:ejmad8O4hmfV7MvJ@cluster0.ioevoco.mongodb.net/';
const database='portfolio'

const client= new MongoClient(url);

 async function dbConnect(){
    let result =await client.connect();
    let db =result.db(database);
    return db.collection('users');
 
}
module.exports= dbConnect;