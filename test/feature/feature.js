const assert = require('assert')

describe ('webpage interaction', function(){
  it('should have a title', function(){
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'suh dude')
  })
})
