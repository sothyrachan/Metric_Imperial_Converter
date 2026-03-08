const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
    suite('convertHandler.getNum(input)', function() {
      test('Test Whole Number Input', function() {
        const inputVal = "10l";
        assert.equal(convertHandler.getNum(inputVal), 10, 'Value should be a whole number!');
      });

      test('Test Decimal Number Input', function() {
        const inputVal = "5.5mi";
        assert.equal(convertHandler.getNum(inputVal), 5.5, 'Value should be a decimal number!');
      });

      test('Test Fractional Number Input', function() {
        const inputVal = "5/3km";
        assert.equal(convertHandler.getNum(inputVal), 5/3, 'Value should be a fractional number!');
      });

      test('Test Fractional Number with Decimal Input', function() {
        const inputVal = "2.3/2kg";
        assert.equal(convertHandler.getNum(inputVal), 2.3/2, 'Value should be a fractional input with decimal number!');
      });

      test('Test An Error on Double-Fraction Input', function() {
        assert.equal(convertHandler.getNum("2/5/8lbs"), "invalid number");
      });

    });
});