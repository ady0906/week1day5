var assert = require("chai").assert;
var luhn_validate = require("../lib/luhn_algo");

describe("valid cc value", function() {
  it("should return true if value is legit according to the Luhn algorithm", function() {
    var value = 49927398716;
    var result = luhn_validate(value);
    assert.isTrue(result);
  });

  it("should return true if value is legit", function() {
    var value = 49927398717;
    assert.isTrue(luhn_validate(value));
  });

  it("should return true if value is legit", function() {
    var value = 1234567812345678;
    assert.isTrue(luhn_validate(value));
  });

  it("should return true if value is legit", function() {
    var value = 1234567812345670
    assert.isTrue(luhn_validate(value));
  });
  it("should return false if value is not legit", function() {
    var value = 'not a value';
    assert.isFalse(luhn_validate(value));
  });
});
