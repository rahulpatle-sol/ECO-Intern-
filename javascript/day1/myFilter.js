function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {  // callback returns true or false
      result.push(arr[i]);           // only push if true
    }
  }
  return result;
}

// Example usage
const data = [1, 2, 3, 4];
const filtered = myFilter(data, (i) => i === 2); // returns only [2]

console.log(filtered); // [2]
