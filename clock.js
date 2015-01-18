function Clock() {
  this.time = null;
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log([
    this.time.getHours(),
    this.time.getMinutes(),
    this.time.getSeconds()]
    .join(":")
  );
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  this.time = new Date();
  this.printTime();
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  this.time = new Date(this.time.getTime() + Clock.TICK);
  this.printTime();
};

var clock = new Clock();
clock.run();
