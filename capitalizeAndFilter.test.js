const capitalizeAndFilter = require('./capitalizeAndFilter.js');

describe ('capitalizeAndFilter', () => {
  it('Should capitalize each word and remove any that begin with "f"', () => {
    const arrayOfStrings = ['friendly', 'apple', 'fiend', 'kiwi'];
    capitalizeAndFilter(arrayOfStrings);
    expect (arrayOfStrings).toEqual(['Apple', 'Kiwi']);
  });
});
