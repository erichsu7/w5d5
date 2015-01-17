function Board() {
  this.grid = new Array(3);
  for (var i = 0; i < 3; i++) {
    this.grid[i] = new Array(3);
  }
}

Board.prototype.placeMark = function (pos, mark) {
  if (!this.isValidMove(pos)) {
    console.log("That's not a valid move");
    return false;
  }
  this.grid[pos[0]][pos[1]] = mark;

  return true;
};

Board.prototype.getMark = function (pos) {
  var row = pos[0];
  var col = pos[1];
  return this.grid[row][col];
};

Board.prototype.isOccupied = function (pos) {
  if (this.getMark(pos) === undefined) {
    return false;
  }

  return true;
};

Board.prototype.isOnBoard = function (pos) {
  var row = pos[0];
  var col = pos[1];
  if (row < 0 || row > 2 || col < 0 || col > 2) {
    return false;
  }

  return true;
};

Board.prototype.isValidMove = function (pos) {
  return this.isOnBoard(pos) && !this.isOccupied(pos);
};

Board.prototype.isWon = function (mark) {
  for (var i = 0; i < 3; i++) {
    if (this.checkDirection([i, 0], mark, [0, 1]) ||
        this.checkDirection([0, i], mark, [1, 0])) {
      return true;
    }
  }
  if (this.checkDirection([0, 0], mark, [1, 1])) {
    return true;
  }
  if (this.checkDirection([0, 2], mark, [-1, 1])) {
    return true;
  }
  return false;
};

Board.prototype.checkDirection = function (pos, mark, vector) {
    for (var i = 0; i < 3; i++) {
      if (this.getMark(pos) !== mark ) {return false;}
      pos[0] += vector[0];
      pos[1] += vector[1];
    }
    return true;
};

Board.prototype.isFull = function () {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (!this.isOccupied([i, j])) { return false; }
    }
  }
  return true;
};


Board.prototype.print = function () {
  console.log()
  this.grid.forEach(function (row) {
    console.log(row);
  })
};


module.exports = Board;
