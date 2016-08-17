const assert = require('assert')

describe ('webpage interaction', function(){
  it('should have a title', function(){
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Cat Chat')
  });
})

describe('attributes of our application', function(){
  it('should have an input field that we can type in', function(){
    browser.url('/');
    var userMessage = browser.element('.user-message')

    userMessage.setValue('generally terrible comment')

    assert.equal(userMessage.getValue(), 'generally terrible comment')
  })

  it('should have a button that lets us send that message', function(){
    browser.url('/');
    //message info
    var userMessage = browser.element('.user-message')
    userMessage.setValue('generally terrible comment')
    assert.equal(userMessage.getValue(), 'generally terrible comment')
    //submit button info
    browser.click('.submit-button')

    var allIdeas = browser.getText('li')
    assert.equal(allIdeas.replace(/\n/g, ", "), 'great comment')
  })
})
