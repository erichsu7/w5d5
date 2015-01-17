var readline = require("readline");
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
  } else {
    reader.question("Give a number", function (answer) {
      sum += parseInt(answer)
      console.log("Sum: " + sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    })
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
