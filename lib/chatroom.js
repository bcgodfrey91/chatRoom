const Message = require('./message')

function Chatroom(){
  var localMessages = this.retrieveMessages()
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
  localStorage.setItem('messages', JSON.stringify(currentLocal))
}

Chatroom.prototype.retrieveMessages = function(message){
  var messages = localStorage.getItem('messages')
  if (!messages) return []
  return JSON.parse(messages)
}

Chatroom.prototype.removeMessageFromStorage = function(messageToRemove){
  var localMessages = this.retrieveMessages()
  localMessages.splice(messageToRemove, 1)
  localStorage.setItem('messages', JSON.stringify(localMessages))
  this.messages.splice(messageToRemove, 1)
}

Chatroom.prototype.editMessage = function(messageToEdit){
  var localMessages = this.retrieveMessages()
  localMessages[messageToEdit.id] = messageToEdit
  localStorage.setItem('messages', JSON.stringify(localMessages))
  this.messages[messageToEdit.id] = messageToEdit
}

module.exports = Chatroom
