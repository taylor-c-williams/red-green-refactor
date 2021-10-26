const capitalizeAndFilter = (arrayOfStrings) => {
  const newArr = arrayOfStrings.map (
    word => word[0].toUpperCase() + word.slice(1));
  return newArr.filter(word => !word.startsWith('F'));
};
module.exports = capitalizeAndFilter;
