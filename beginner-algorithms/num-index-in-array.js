//Goal: sort the given array. Find where to put num in array to keeo it sorted. return index.

function getIndexToIns(arr, num) {
  arr.sort(function(a, b){return a-b});

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;

      }
    }
    return arr.length;
  }


getIndexToIns([200, 40, 60], 50);


//This is the way I did it originally. It works, but it doesn't pass the "sort the array first" rule, and yet is still one of their "correct" answers.
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}
