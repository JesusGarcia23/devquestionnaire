var express = require('express');
var router = express.Router();
let Applicant = require('../models/Applicant')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/submitForm', (req, res, next) => {
  const {fullName, email, projectRepo, projectUrl, bestpracticeOOP, modularDevelopment,
fulWorkUnderstanding, testing, databaseKnowledge, debugging, probSolvingSkills, javascript,
html, css, workingTeam, selfMotivation, communicationSkills, ownEnergyLvl, intAptitude} = req.body  

  Applicant.create({
    fullName, email, projectRepo, projectUrl, bestpracticeOOP, modularDevelopment,
    fulWorkUnderstanding, testing, databaseKnowledge, debugging, probSolvingSkills, javascript,
    html, css, workingTeam, selfMotivation, communicationSkills, ownEnergyLvl, intAptitude
  }).then(newApplicant => {
    res.json(newApplicant)
  }).catch(err => {
    console.log(err)
  })
})

module.exports = router;
