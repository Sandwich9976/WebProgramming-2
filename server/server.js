const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

const dbConfig = require("./config/db.config");

const db = require("./models");
const User = db.user;

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("DB is connected.");
  initial();
}).catch((err)=>{
  console.log("Error. DB is NOT connected.", err);
  process.exit();
});


const initial = () => {
  User.estimatedDocumentCount().then((result, err) =>{
      console.log("user's count is ", result, err)
      if(!err && result == 0){
          new User({
              username: "Admin",
              email: "Admin",
              password: "root",
          }).save().then((result, err) => {
              if(err){
                  console.log("While adding admin: ", err)
              }
              else {
                  console.log("Admin was created: ", result);
              }
          });
      }
  })
}

/*function initial() { //функция инициал не работала, пришлось заменить константой
  User.estimatedDocumentCount((err, usersCount)=>{ 
    console.log("users count is: ", usersCount);
    if (!err && usersCount === 0){
      new User({
        username: "Admen", 
        email: "Admen",
        password: "root", 
    }).save(err => {
      if(err){
          console.log("Admin is not created", err);
          }
          else {
            console.log("Admin is created");
          }
      })
    }
  })
}*/


//require("./routes/auth.routes")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
