const Message = require('./message');

function Chatroom(){
  var localMessages = this.retrieveMessages();
  if (localMessages) {
    this.messages = localMessages
  } else {
    this.messages = []
  }
}

Chatroom.prototype.createMessage = function(message){
  console.log("MESSAGE INBOUND", message);
  this.messages.push(message);
  console.log("CURENT MESSAGES", this.messages);
}

Chatroom.prototype.storeMessages = function(message, botMessage){
  if (!message && !botMessage) return /* nothing */
  var currentLocal = this.retrieveMessages()
  currentLocal.push(message)
  currentLocal.push(botMessage)
  this.messages = currentLocal
  localStorage.setItem('messages', JSON.stringify(currentLocal));
}

Chatroom.prototype.retrieveMessages = function(message){
  var messages = localStorage.getItem('messages');
  if (!messages) return []
  return JSON.parse(messages);
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
  var messages = this.messages;

  messages.forEach(function(message, index) {
    if (message.id === id) messages[index] = messageToEdit;
  });

  this.messages = messages;
  this.storeMessages();
}

module.exports = Chatroom;
