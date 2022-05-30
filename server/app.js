const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/authControl");
const Port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

const app = express();

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://ioabhishek:ioabhishek123@cluster0.r2osl.mongodb.net/?retryWrites=true&w=majority");
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  await connectDB();
  app.use(express.json());
  app.use("/", authRoute);

  app.listen(Port, () => {
    console.log("Server is running at PORT");
  });
}
main();
