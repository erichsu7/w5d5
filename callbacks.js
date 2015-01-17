function Clock () {

}

Clock.TICK = 1000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  var time = this.date;
  console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  this.date = new Date();
  this.printTime();
  console.log(this);
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  console.log(this);
  this.date = new Date(this.date.getTime() + Clock.TICK)
  this.printTime()
};

var clock = new Clock();
clock.run();
