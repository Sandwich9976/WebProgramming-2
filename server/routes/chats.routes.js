const controller = require("../controllers/chats.controller");

module.exports = function(app){
    app.post("/chats", controller.createChat);
    app.get("/chats", controller.getChats);
    app.delete("/chats", controller.createChat);
    app.put("/chats", controller.createChat);
}