const db = require("../models");
const Workouts = db.workouts;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    Workouts.create({
        userID: req.body.user,
        name: req.body.name,
        completed: 0,
        exercises: req.body.exercises
      }).then(

      )
}

exports.allWorkouts = (req, res) => {

}

exports.workout = (req, res) => {

}
