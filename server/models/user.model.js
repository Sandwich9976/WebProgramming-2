//import mongoose from "mongoose"
const mongoose = require("mongoose")

const User = mongoose.model("User", new mongoose.Schema({
    username: String, //String, but not string
    email: String,
    password: String, //Будем хэшировать пароль, но позже
}))

module.exports = User;