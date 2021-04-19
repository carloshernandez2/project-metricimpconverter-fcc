"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    const { input } = req.query;
    const initNum = convertHandler.getNum(input),
      initUnit = convertHandler.getUnit(input),
      returnUnit = convertHandler.getReturnUnit(initUnit),
      returnNum = convertHandler.convert(initNum, initUnit),
      string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      ),
      result =
        initNum && initUnit
          ? { initNum, initUnit, returnNum, returnUnit, string }
          : initNum
          ? "invalid unit"
          : initUnit
          ? "invalid number"
          : "invalid number and unit";

    res.send(result);
  });
};
