var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var Index = require("./index");
var game = new Index.Game(reader);

game.run(function () {
  console.log("done");
  reader.close();
})
