const Message = require('./message');

function Chatroom(properties){
  this.messages = properties.messages || [];
}

Chatroom.prototype.createMessage = function(message){
  this.messages.push(message);
}

Chatroom.prototype.storeMessage = function(message){
  localStorage.setItem('messages', JSON.stringify(this.messages));
}

Chatroom.prototype.retrieveMessages = function(message){
  var messages = localStorage.getItem('messages')
  return JSON.parse(messages)
}



module.exports = Chatroom;
