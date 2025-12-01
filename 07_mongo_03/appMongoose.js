import mongoose from "mongoose";
// const mongoose = require("mongoose");
// const { Schema } = mongoose;

mongoose
  .connect(
    "mongodb+srv://admin:password1234@cluster0.7zrua8x.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB with Mongoose"))
  .catch((err) =>
    console.error("Error connecting to MongoDB with Mongoose:", err)
  );

const memberSchema = new mongoose.Schema({
  name: String,
  age: Number,
  region: String,
});

const User = mongoose.model("Member", memberSchema);

// Create:
const newUser = new User({ name: "한지민", age: 42, region: "부산" });
await newUser.save();

// Read:
// const users = await User.find({ age: { $lt: 30 } });

// Update:
// await User.updateOne({ name: 'Bob' }, { age: 26 });

// Delete:
// await User.deleteOne({ name: 'Bob' });
