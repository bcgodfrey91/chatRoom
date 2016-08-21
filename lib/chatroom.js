const Message = require('./message');

function Chatroom(){
  var localMessages = this.retrieveMessages();
  if (localMessages) {
    this.messages = localMessages
  } else {
    this.messages = []
  }
}

Chatroom.prototype.createMessage = function(id, user, text, botMessage){
  var currentLocal = this.retrieveMessages()
  var newMessage = new Message({id: id, user: user, text: text})
  currentLocal.push(newMessage)
  currentLocal.push(botMessage)
  this.messages = currentLocal
  return currentLocal
}

Chatroom.prototype.storeMessages = function(id, user, text, botMessage){
  if (!text && !botMessage) {
    return /* nothing */
  }
  var currentLocal = this.createMessage(id, user, text, botMessage)
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
  var localMessages = this.retrieveMessages()
  localMessages[messageToEdit.id] = messageToEdit
  localStorage.setItem('messages', JSON.stringify(localMessages))
  this.messages[messageToEdit.id] = messageToEdit
}

module.exports = Chatroom;
