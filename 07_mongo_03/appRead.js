// import { MongoClient } from "mongodb";
const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://admin:password1234@cluster0.7zrua8x.mongodb.net/?appName=Cluster0";
const database = "users";
const collection = "member";
const client = new MongoClient(url);
client.connect().then(() => {
  console.log(".......connect..........");
});

async function dbConnection() {
  const db = client.db(database);
  const collectResult = db.collection(collection);
  const result = await collectResult.find().toArray();
  console.log(result);
}

dbConnection();

async function findDocuments(collectionName, query = {}) {
  try {
    const db = client.db(database);
    const collection = db.collection(collectionName);
    const documents = await collection.find(query).toArray();
    console.log("Found documents:", documents);
    return documents;
  } catch (error) {
    console.error("Error finding documents:", error);
  }
}

// Example usage:
findDocuments("member", { age: { $gte: 31 } });
