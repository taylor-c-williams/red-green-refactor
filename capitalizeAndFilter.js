const capitalizeAndFilter = (arrayOfStrings) => {

  for(let i = 0 ; i < arrayOfStrings.length ; i++){
    arrayOfStrings[i] = arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(i);
  }      
};
module.exports = capitalizeAndFilter;
    
  
