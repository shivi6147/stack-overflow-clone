//require('dotenv').config({ path: '..\\stack-overflow-clone\\backend\\.env' });
const mongoose = require("mongoose");

module.exports.connect = () => {
    mongoose
        .connect(MONGO_URL)
        .then(() => console.log("MongoDB is connected successfully"))
        .catch((err) => console.log("Error: ", err));
};


