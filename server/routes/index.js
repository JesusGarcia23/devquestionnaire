var express = require('express');
var router = express.Router();
let Applicant = require('../models/Applicant')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/submitForm', (req, res, next) => {
  Applicant.create(req.body)
  .then(newApplicant => {
    res.json(newApplicant)
  }).catch(err => {
    console.log(err)
  })
})

module.exports = router;
