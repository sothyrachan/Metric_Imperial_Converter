function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    result = input.match(/[.\d\/]+/g);
    if (result) {
      result = result[0];
    }
    if (input.match(/\d+[\/]\d+[\/]\d+/g)) {
      console.log("invalid number");
    } else if (!Number(input)) {
      result = 1;
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

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
