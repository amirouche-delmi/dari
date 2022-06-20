const mongoose = require("mongoose");

mongoose
    .connect('mongodb://localhost:27017/dari', {
    // .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@dari.bosqo.mongodb.net/dari", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
