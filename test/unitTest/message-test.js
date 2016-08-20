const assert = require('chai').assert;
const Message = require('../../lib/message')

describe('Message', function(){
  it('should create a function', function(){
    assert.isFunction(Message)
  });

  it('should be an object', function(){
    var message = new Message({})

    assert.isObject(message)
  })

  it('should have an id', function(){
    var message = new Message({id: 0})

    assert.equal(message.id, 0)
  });

  it('should have a user', function(){
    var message = new Message({id: 0, user: 'Bandy'})

    assert.equal(message.id, 0, message.user, 'Bandy')
  })

  it ('should have a text that the user submits', function(){
    var message = new Message({id: 0, user: 'Bandy', text: 'suh duh'})

    assert.equal(message.id, 0, message.user, 'Bandy', message.text, 'suh duh')
  })
});
