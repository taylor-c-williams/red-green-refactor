const fetchQuotes = require('./fetchQuotes.js');

describe ('fetchQuotes', () => {
  it('Should return a quote as an obj w/ name, text and image ', () => {
    const expected = [{
      name: 'name',
      text: 'text',
      image: 'image',
    }];
    const actual =  fetchQuotes();
    expect (expected).toEqual(actual);
  });
});
