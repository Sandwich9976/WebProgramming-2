const mongoose = require("mongoose")
mongoose.Promise = global.Promise; //Настройка, чтобы mongoose понимал Promise

const db = {};

db.user = require("./user.model");
db.chat = require("./chats.model");
db.message = require("./message.model");

module.exports = db;