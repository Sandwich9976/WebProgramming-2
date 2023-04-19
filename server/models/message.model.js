const mongoose = require("mongoose")

const Message = mongoose.model("Message", new mongoose.Schema({
    sender: String,  //Имя пользователя, кто отправил сообщение
    message: String, //само сообщение
    date: String,  //Время, когда сообщение было отправлено
    readers: Number, // Количество прочтивших данное сообщение
}));

module.exports = Message;