function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatString = "";
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      repeatString += str;
    }
  }
  return repeatString;

}

repeatStringNumTimes("abc", 3);
