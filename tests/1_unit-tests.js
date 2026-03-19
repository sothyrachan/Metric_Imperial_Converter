const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("convertHandler.getNum(input)", function () {
    test("Test Whole Number Input", function () {
      const inputVal = "10l";
      assert.equal(
        convertHandler.getNum(inputVal),
        10,
        "Value should be a whole number!",
      );
    });

    test("Test Decimal Number Input", function () {
      const inputVal = "5.5mi";
      assert.equal(
        convertHandler.getNum(inputVal),
        5.5,
        "Value should be a decimal number!",
      );
    });

    test("Test Fractional Number Input", function () {
      const inputVal = "5/3km";
      assert.equal(
        convertHandler.getNum(inputVal),
        5 / 3,
        "Value should be a fractional number!",
      );
    });

    test("Test Fractional Number with Decimal Input", function () {
      const inputVal = "2.3/2kg";
      assert.equal(
        convertHandler.getNum(inputVal),
        2.3 / 2,
        "Value should be a fractional input with decimal number!",
      );
    });

    test("Test An Error on Double-Fraction Input", function () {
      assert.equal(convertHandler.getNum("2/5/8lbs"), "invalid number");
    });

    test("Test non Numerical Input Provided", function () {
      assert.strictEqual(convertHandler.getNum(""), 1);
      assert.strictEqual(convertHandler.getNum(0), 1);
    });

    test("Test Each Valid Input Unit to Be Read Correctly", function () {
      assert.equal(convertHandler.getUnit("2.5/7kg"), "kg");
      assert.equal(convertHandler.getUnit("7l"), "l");
      assert.equal(convertHandler.getUnit("85.08km"), "km");
      assert.equal(convertHandler.getUnit("0.07gal"), "gal");
      assert.equal(convertHandler.getUnit("0.4mi"), "mi");
      assert.equal(convertHandler.getUnit("6.3/0.9lbs"), "lbs");
    });

    test("Test for Correct Return Error Message for Multiple Slash Input", function () {
      assert.strictEqual(convertHandler.getNum("0.03/4/3.90"), "invalid number");
    });

    const result = {
      gal: "l",
      lbs: "kg",
      mi: "km",
      l: "gal",
      kg: "lbs",
      km: "mi",
    };
    
    test("Test for Correct Return Unit for Valid Input Unit", function () {
      assert.strictEqual(convertHandler.getReturnUnit("gal"), "l");
      assert.strictEqual(convertHandler.getReturnUnit("lbs"), "kg");
      assert.strictEqual(convertHandler.getReturnUnit("kg"), "lbs");
      assert.strictEqual(convertHandler.getReturnUnit("mi"), "km");
    });
    
  });
});
