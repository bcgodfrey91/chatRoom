const Message = require('./message');

function Chatroom(properties){
  this.messages = properties.messages || [];
}

Chatroom.prototype.createMessage = function(message){
  this.messages.push(message);
}

Chatroom.prototype.storeMessages = function(message){
  localStorage.setItem('messages', JSON.stringify(this.messages));
}

Chatroom.prototype.retrieveMessages = function(message){
  var messages = localStorage.getItem('messages')
  return JSON.parse(messages)
}

Chatroom.prototype.removeMessageFromStorage = function(messageToRemove){
  var id = messageToRemove;
  for (var i = 0; i < this.messages.length; i++) {
   if (this.messages[i].id === id) {
     this.messages.splice(i, 1);
   }
 }
 this.storeMessages();
}

Chatroom.prototype.editMessage = function(messageToEdit){
  var id = messageToEdit.id;
  var messages = this.messages

  messages.forEach(function(message, index) {
    if (message.id === id) messages[index] = messageToEdit;
  })

  this.messages = messages
  this.storeMessages();
}

module.exports = Chatroom;
