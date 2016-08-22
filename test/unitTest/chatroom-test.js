const assert = require('chai').assert
const Chatroom = require('../../lib/chatroom')
const Message = require('../../lib/message')

describe ('Chatroom', function(){
  beforeEach(function() {
    localStorage.clear()
  })

  it('should create a function', function(){
    assert.isFunction(Chatroom)
  })

  it('should be an object', function(){
    var chatroom = new Chatroom()

    assert.isObject(chatroom)
  })

  it('should have an array where it will store messages', function(){
    var chatroom = new Chatroom()

    assert.deepEqual(chatroom.messages, [])
  })

  it('should have a function that places a message to the array', function(){
    var chatroom = new Chatroom()
    var message = new Message({id: 'id', user: 'user', text: 'text'})

    chatroom.createMessage(0, 'bob', 'wow', 'hello')

    assert.equal(chatroom.messages.length, 2)
  })

  it('should let a message maintain its properties once it is placed into the array', function(){
    var chatroom = new Chatroom()

    chatroom.storeMessages(0, 'bob', 'wow', 'hello')

    assert.equal(chatroom.messages[0].id, 0)
    assert.equal(chatroom.messages[0].user, 'bob')
    assert.equal(chatroom.messages[0].text, 'wow')
  })

  it('should be able to store messages in local storage', function(){
    var chatroom = new Chatroom()

    chatroom.storeMessages(0, 'bob', 'wow', 'hello')

    var storedMessages = JSON.parse(localStorage.getItem('messages'))

    assert.equal(chatroom.messages[0].id, storedMessages[0].id)
  })

  it('should be able to retreive messages from local storage', function(){
    var chatroom = new Chatroom()

    chatroom.storeMessages(0, 'bob', 'wow', 'hello')

    var storedMessages = chatroom.retrieveMessages()

    assert.equal(chatroom.messages[0].id, storedMessages[0].id)
  })

  it('should be able to delete the message from local storage', function(){
    var chatroom = new Chatroom()

    chatroom.storeMessages(0, 'andy', 'wow', 'brah')
    chatroom.storeMessages(1, 'ben', 'howdy', 'sah duh')
    chatroom.removeMessageFromStorage(0)
    chatroom.retrieveMessages()

    assert.equal(chatroom.messages[1].id, 1)
  })

  it('should allow the user to edit their previous messages', function(){
    var chatroom = new Chatroom()

    chatroom.createMessage(0, 'bob', 'wow', 'hello')
    chatroom.storeMessages()

    var editedMessage = new Message({id: 0, user: 'Bandy', text: 'asuhduh'})

    chatroom.editMessage(editedMessage)

    chatroom.retrieveMessages()

    assert.equal(chatroom.messages[0].text, editedMessage.text)
  })
})
