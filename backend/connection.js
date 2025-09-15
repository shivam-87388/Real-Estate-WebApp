const mongoose = require("mongoose");

const url = "mongodb+srv://Shivam:Shivam@cluster0.yk4kdyt.mongodb.net/mydb1100?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database error:", err);
  });

module.exports = mongoose;