"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");
  

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  
  app.get('api/convertValue', function (req, res) {
    const inputVal = req.query.input;

    try {
      const result = convertHandler.getNum(inputVal);
      res.json(result);
    } catch {
      
    }
    
  })
  
};
