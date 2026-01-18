function ConvertHandler() {
  this.getNum = function (input) {
    let result = "";

    for (let i = 0; i < input.length; i++) {
      const inputChar = input[i];
      if (
        (inputChar >= "0" && inputChar <= "9") ||
        inputChar === "." ||
        inputChar === "/"
      ) {
        result += inputChar;
      } else {
        break;
      }
    }

    if (result === "") return 1;

    const countSlash = (result.match(/\//g) || []).length;
    if (countSlash > 1) throw new Error("invalid number");

    if (countSlash === 1) {
      const [numerator, denominator] = result.split("/");
      const num = Number(numerator);
      const deno = Number(denominator);
      return isNaN(num) || isNaN(deno) ? "invalid number" : num / deno;
    }

    const num = Number(result);
    return isNaN(num) ? "invalid number" : num;
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
