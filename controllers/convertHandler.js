function ConvertHandler() {
  this.getNum = function (input) {
    let result;

    const arr = input.split(/([0-9]+)/),
      unformattedValue = arr.slice(0, arr.length - 1),
      f = unformattedValue.find((element) => element === "/")
        ? unformattedValue.join("").split("/")
        : false,
      num = !unformattedValue.length
        ? 1
        : f && f.length < 3
        ? f.reduce((p, c) => p / c)
        : Number(unformattedValue.join(""));

    result = num;

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
    const initUnitString = convertHandler.spellOutUnit(initUnit),
      returnUnitString = convertHandler.spellOutUnit(returnUnit);

    result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    return result;
  };
}

module.exports = ConvertHandler;
