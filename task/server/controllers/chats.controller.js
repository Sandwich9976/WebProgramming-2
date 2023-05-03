const db = require("../models");

const Chat = db.Chat;

const createchat = (req, res)=>{
    const chat = new Chat({
        chatname: req.body.chatname, 
        participants: req.body.participants,
        owner: req.body.owner,
        messages: []
    })
chat.save((err, user)=>{
        if (err){
            res.status(500).send({message: err});
            return;
        }
        res.status(200).send({message: "Chat successfully added"});
        console.log(`Chat with name ${chat.chatname} is added`);
    })
}


const getChats = (req, res)=>{
    Chat.findOne({participants: req.params.user}).exec((err, chats)=>{
        if (err){
            res.status(500).send({message: err});
            return;
        }
        if (!chats){
            res.status(404).send({message: `Chats for ${req.params.user} is not found`});
        }
        
        res.status(200).send({
            message: "Chats are found", chats
        }
        );
        }
    )
}


const deleteChat = (req, res)=>{
    const id = req.params.id;

    Chat.findById(id, (err, chat)=>{
        if (err){
            res.status(500).send({message: err});
            return;
        }
        if (!chat){
            res.status(404).send({message: `Chat is not found`});
            return;
        }
        if (chat.owner !== req.body.owner){
            res.status(401).send({message: `This user is not the owner of chat`});
            return;
        }

        Chat.deleteOne({_id: id}, (err,chat)=>{
            if (err){
                res.status(500).send({message: err});
            return;
            }
            res.status(200).send({message: 'chat with ${req.body.chatname} is deleted'});
        });
    });
}

const updateChat = (req, res) => {
    Chat.updateOne({_id:req.params.id},{
        chatname: req.body.chatname, 
        participants: req.body.participants,
        owner: req.body.owner,
        messages: req.body.messages
    }).exec((err, chat)=>{
            if (err){
              res.status(500).send({message: err});
               return;
            }
            if (!chat){
             res.status(404).send({message: `Chats for ${req.params.user} is not found`});
            }
            res.status(200).send({
                message: 'Chat with ${req.body chatname} is deleted'
            }
            )
    }
    )
}


module.exports = {
    createchat,
    getChats,
    deleteChat,
    updateChat
}