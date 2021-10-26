const copyAndPush = (array, number) => {
  const copy = [...array];
  copy.push(number);
  return copy; 
};
module.exports = copyAndPush;
  
