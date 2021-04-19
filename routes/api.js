"use strict";

// const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {

  app.get("/api/convert", (req, res) => {
    const convertHandler = new ConvertHandler();
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
        initNum instanceof Error && initUnit instanceof Error
          ? "invalid number and unit"
          : initNum instanceof Error
          ? initNum.message
          : initUnit instanceof Error
          ? initUnit.message
          : { initNum, initUnit, returnNum, returnUnit, string }

    res.send(result);
  });
};
