function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    result = input.match(/\d+[.\/]?\d+/g);
    if (input.match(/\d+[\/]\d+[\/]\d+/g)) {
      console.log("invalid number");
    } else if (!Number(input)) {
      result++;
    } else {
      console.log("Error occurred");
    }
    return result;
  };

  this.getUnit = function (input) {
    let result;

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    result = unit;
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const conversions = {
      gal: { litter: 3.78541, toUnit: "l" },
      lbs: { kiligram: 0.453592, toUnit: "kg" },
      mi: { kilometer: 1.60934, toUnit: "km" },
    };

    if (conversions[initUnit]) {
      throw new Error(`Invalid unit input ${initUnit}`);
    }

    const { litter, toUnit } = conversions[initUnit];
    let result = initNum * litter;

    return `${result}${toUnit}`;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
