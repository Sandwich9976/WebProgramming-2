const middlewares = require("../middlewares/auth.middleware");

module.exports = function(app){
    app.get("/auth/requireAuth", [middlewares.verifyToken], (req, res));
    app.get("/auth/signin", controller.signin);
}