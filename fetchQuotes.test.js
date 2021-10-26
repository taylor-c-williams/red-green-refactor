const fetchQuotes = require('./fetchQuotes.js');

describe ('fetchQuotes', () => {
  it('Should return a quote as an obj w/ name, text and image ', async () => {
    const expected = [{
      character: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String),
    }];
    const actual = await fetchQuotes();
    expect (actual).toEqual(expected);
  });
});
