Function.prototype.myBind = function (context) {
  var fn = this
  return function () {
    return fn.apply(context);
  }
};

function Dog(name) {
  this.name = name;
}

var test = function () {
  console.log(this.name);
}

var dog = new Dog("Sparky");

test.myBind(dog)();
