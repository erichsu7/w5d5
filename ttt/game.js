var Board = require("./board")

function Game(reader) {
  this.board = new Board();
  this.currentMove = "x";
  this.reader = reader;
}

Game.prototype.run = function (completionCallback) {
  this.board.print();
  console.log("Current move:" + this.currentMove);
  this.reader.question(
    "Where would you like to place your mark? Enter row and col", function (pos) {
      pos = pos.split(" ");
      if (this.board.placeMark(pos, this.currentMove)) {
        if (this.board.isWon(this.currentMove)) {
          console.log(this.currentMove + " is the winner");
          completionCallback();
          return;
        }

        if (this.board.isFull()) {
          console.log("Game ends in tie");
          completionCallback();
          return;
        }

        this.toggleMove();
        // this.run(completionCallback);
        // return;
      }
      this.run(completionCallback);

    }.bind(this));
  };

  Game.prototype.toggleMove = function () {
    this.currentMove = this.currentMove === "x" ? "o" : "x";
  };

  module.exports = Game;
