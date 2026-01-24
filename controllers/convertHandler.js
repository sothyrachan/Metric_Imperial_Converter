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
    let result = "";

    for (let i = 0; i < input.length; i++) {
      const inputChar = input[i];

      if (
        isNaN(inputChar) &&
        inputChar !== "." &&
        inputChar !== "/" &&
        inputChar.match(/[a-zA-Z]/)
      ) {
        result += inputChar;
      } else {
        continue;
      }
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    const result = {
      gal: "l",
      lbs: "kg",
      mi: "km",
    };

    return result[initUnit.toLowerCase() || undefined];
  };

  this.spellOutUnit = function (unit) {
    let result = "";

    let units = {
      gal: "gallons",
      lbs: "pounds",
      mi: "miles",
      l: "liters",
      kg: "kilograms",
      km: "kilometers",
    };

    result = units[unit.toLowerCase()];

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
