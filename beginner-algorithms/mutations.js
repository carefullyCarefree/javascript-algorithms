//This is more or less the answer that made sense. the only problem is that it doesn't exactly solve the original problem, because if both words start with the same letter, it will automatically return true.
function mutation(arr) {
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  for (var i = 0; i < arr2.length;i++) {
    if (arr1.indexOf(arr2[i]) < 0)
      return false;
  }
  return true;
 }

//This is the first time I've heard of .every(). Its like a more specific indexOf. This solution is like the ultra simplified version of how I originally tried to solve the problem. I don't quite think code like this yet.
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}
