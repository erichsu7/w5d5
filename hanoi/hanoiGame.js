var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame () {
  this.stacks = [
  HanoiGame.FULLSTACK,
  [],
  []
  ];
}

HanoiGame.FULLSTACK = [3,2,1];

HanoiGame.prototype.isWon = function () {
  if (this.stacks[1].length === 3 || this.stacks[2].length === 3) {
      return true;
  }

  return false;
};

// function arrEqual(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (var i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {return false;}
//     }
//     return true;
//   }
//
//   return false;
// }


HanoiGame.prototype.isValidMove = function (start, end) {
  var start_stack = this.stacks[start];
  var end_stack = this.stacks[end];
  if (end_stack.length === 0) { return true; }
  if (start_stack.length === 0 ||
      (start_stack[start_stack.length - 1] > end_stack[end_stack.length - 1])) {
    return false;
  }

  return true;
};

HanoiGame.prototype.move = function (start, end) {
  if (!this.isValidMove(start, end)) {
    console.log("invalid move");
    return false;
  }
  var start_stack = this.stacks[start];
  var end_stack = this.stacks[end];

  end_stack.push(start_stack.pop());
  return true;
};

HanoiGame.prototype.print = function () {
  return JSON.stringify(this.stacks);
};

HanoiGame.prototype.promptMove = function (callback) {
  console.log(this.print());
  reader.question("Pick a start and end tower", function (answer) {
    var answers = answer.split(" ");
    callback(answers[0], answers[1]);
  });
};


HanoiGame.prototype.run = function (completionCallback) {
  this.promptMove(function (start, end) {
    this.move(start, end);

    if (this.isWon()) {
      completionCallback();
    }else {
      this.run(completionCallback);
    }
  }.bind(this));

};

a = new HanoiGame();
a.run(function () {
  console.log("done");
  reader.close();
});
