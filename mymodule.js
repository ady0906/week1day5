function privateFunc () {
  console.log("you can't run");
}

module.exports = {
  basic: function() {
    privateFunc();
  }
};
