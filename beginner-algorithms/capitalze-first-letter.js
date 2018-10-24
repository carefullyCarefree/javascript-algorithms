//ES6 arrow function
const titleCase = (phrase) => {
  return phrase
  //Brings all letters to lower case
    .toLowerCase()
    //splits words apart
    .split(' ')
    //map stores input, word is a...variable? the array?
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};




function titleCase(str) {
    // bring all letters to lower case a create an array of the words
  var convertToArray = str.toLowerCase().split(" ");

  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
