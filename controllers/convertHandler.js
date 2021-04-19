function ConvertHandler() {
  this.getNum = function (input) {
    let result;

    const arr = input.split(/([0-9]+)/),
      unformattedValue = arr.slice(0, arr.length - 1),
      f = unformattedValue.find((element) => element.match(/^\.?\/\.?$/))
        ? unformattedValue.join("").split("/")
        : false,
      num = !unformattedValue.length
        ? 1
        : f && f.length < 3
        ? f.reduce((p, c) => p / c)
        : Number(unformattedValue.join(""));

    result = num ? num : new Error('invalid number');

    return result;
  };

  this.getUnit = function (input) {
    let result;

    const arr = input.split(/([0-9]+)/),
      unformattedValue = arr[arr.length - 1].toLowerCase().replace(".", ""),
      unit = unformattedValue.match(/^l$/)
        ? unformattedValue.toUpperCase()
        : unformattedValue.match(/^lbs$|^gal$|^mi$|^k[gm]$/)
        ? unformattedValue
        : false;

    result = unit ? unit : new Error('invalid unit');

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit) {
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "km":
        result = "mi";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "gal":
        result = "L";
        break;
      default:
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    switch (unit) {
      case "L":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "km":
        result = "kilometers";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "gal":
        result = "gallons";
        break;
      default:
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (!(initNum instanceof Error) && !(initUnit instanceof Error)) {
      switch (initUnit) {
        case "L":
          result = initNum / galToL;
          break;
        case "lbs":
          result = initNum * lbsToKg;
          break;
        case "km":
          result = initNum / miToKm;
          break;
        case "kg":
          result = initNum / lbsToKg;
          break;
        case "mi":
          result = initNum * miToKm;
          break;
        case "gal":
          result = initNum * galToL;
          break;
        default:
          break;
      }
      return Number(result.toFixed(5));
    } else {
      return false
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    const initUnitString = this.spellOutUnit(initUnit),
      returnUnitString = this.spellOutUnit(returnUnit);

    result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    return result;
  };
}

module.exports = ConvertHandler;
