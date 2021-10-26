const copyAndPush = require('./copyAndPush.js');

describe ('copyAndPush', () => {
  it('Should copy an array and push a new item to the end', () => {
    const numbers = [1, 2, 3];
    const copiedAndPushed = copyAndPush(numbers, 4);
    expect (copiedAndPushed).toEqual([1, 2, 3, 4]);
  });
});
