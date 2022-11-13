//require('dotenv').config({ path: '..\\stack-overflow-clone\\backend\\.env' });
const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://shivam:luYk2SlC544ZHbB1@cluster0.g0kn3uj.mongodb.net";

module.exports.connect = () => {
    mongoose
        .connect(MONGO_URL)
        .then(() => console.log("MongoDB is connected successfully"))
        .catch((err) => console.log("Error: ", err));
};


