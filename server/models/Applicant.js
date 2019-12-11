const mongoose = require('mongoose')

const Schema = mongoose.Schema

const applicantScema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    projectRepo: String,
    projectUrl: {
        type: String,
        required: true
    },
    bestpracticeOOP: Number,
    modularDevelopment: Number,
    fulWorkUnderstanding: Number,
    testing: Number,
    databaseKnowledge: Number,
    debugging: Number,
    probSolvingSkills: Number,
    javascript: Number,
    html: Number,
    css: Number,
    workingTeam: Number,
    selfMotivation: Number,
    communicationSkills: Number,
    ownEnergyLvl: Number,
    intAptitude: Number,

})

module.exports = mongoose.model('Applicant', applicantScema)