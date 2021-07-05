var express = require('express');
var calculate= require('../utils/calculate')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/results', function(req, res, next) {
  const {num1, num2, selectedOp} = req.query;
  try{
  const result=calculate(Number(num1),Number(num2),selectedOp);
  res.json({result});
  }
  catch(e){
    res.status(500).send("Network Error: "+ e.message)
  }
});
module.exports = router;
