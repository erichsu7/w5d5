Function.prototype.myBind = function () {
  var fn = this;
  return function (context) {
    return fn.apply(context);
  }
}
