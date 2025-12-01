// const mongoose = require("mongoose");
require("dotenv").config();

// const dbConnect = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.DB_CONNECT);
//     console.log("DB connected");
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = dbConnect;

const { MongoClient } = require("mongodb");

const url = process.env.DB_CONNECT;
const database = "web";
const collection = "board";
const client = new MongoClient(url);
client.connect().then(() => {
  console.log(".......connect..........");
});

async function dbConnect() {
  const db = client.db(database);
  const collectResult = db.collection(collection);
  const result = await collectResult.find().toArray();
  console.log(result);
}

module.exports = dbConnect;
