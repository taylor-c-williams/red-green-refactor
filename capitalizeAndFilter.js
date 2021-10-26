const capitalizeAndFilter = (arrayOfStrings) => {
 
  for (let i = 0 ; i < arrayOfStrings.length ; i++){
    arrayOfStrings[i] = arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(1);
  }      

  const filteredArray = arrayOfStrings.filter((word) => word.charAt(0) !== 'F');
  return filteredArray;
};
module.exports = capitalizeAndFilter;
    
  
