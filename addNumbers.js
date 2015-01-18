var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });

function addNumbers(sum, numsleft, completionCallback) {
  if (numsleft > 0) {
    reader.question("Choose a number", function (number) {
      var number = parseInt(number);
      sum += number;
      console.log("Sum:" + sum);
      addNumbers(sum, numsleft - 1, completionCallback);
    });
  } else if (numsleft === 0) {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
