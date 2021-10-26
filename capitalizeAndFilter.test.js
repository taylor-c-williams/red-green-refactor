const capitalizeAndFilter = require('./capitalizeAndFilter.js');

describe ('capitalizeAndFilter', () => {
  it('Should capitalize each word and remove any that begin with "f"', () => {
    const arrayOfStrings = ['Friendly', 'apple', 'fiend', 'kiwi'];
    const newFilter =  capitalizeAndFilter(arrayOfStrings);
    expect (newFilter).toEqual(['Apple', 'Kiwi']);
  });
});
