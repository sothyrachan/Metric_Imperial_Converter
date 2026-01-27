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
      l: "gal",
      kg: "lbs",
      km: "mi",
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
      gal: 3.78541,
      l: 1 / 3.78541,
      lbs: 0.453592,
      kg: 1 / 0.453592,
      mi: 1.60934,
      km: 1 / 1.60934,
    };

    if (!conversions[initUnit]) {
      throw new Error(`Invalid unit input ${initUnit}`);
    }

    let result = Number((initNum * conversions[initUnit]).toFixed(5));

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
