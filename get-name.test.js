const getName = require('./get-name.js');

describe ('getName', () => {
  it('Should return the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect (name).toEqual('spot');
  });
});
