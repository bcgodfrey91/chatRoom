const Message = require('./message');

function Chatroom(properties){
  this.messages = properties.messages || [];
}

Chatroom.prototype.storeMessage = function(message){
  this.messages.push(message);
}



module.exports = Chatroom;
