const assert = require('chai').assert;
const Message = require('../../lib/message')

describe('Message', function(){
  it('should create a function', function(){
    assert.isFunction(Message)
  });

  it('should have an id, username, and text for each Message', function(){

    var message = new Message({id: 1, user: 'Ben and Andy', text: 'suh dude'})

    assert.equal(message.id, 1, message.user, 'Ben and Andy', message.text, 'suh dude')
  });
});
