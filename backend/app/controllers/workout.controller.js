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
        res.status(200).send(
          'workout added to database'
        )
      ).catch(
        error =>{
          res.status(500).send({ message: err.message });
        }        
      )
}

exports.allWorkouts = (req, res) => {
  User.findAll({
    where: {
      username: req.body.username
    }
  })
    .then(workouts => {
      if (!workouts) {
        return res.status(404).send({ message: "User has no workouts." });
      }
      else{
        res.status(200).send({
          workouts: workouts
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.workout = (req, res) => {
  User.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(workout => {
      if (!workout) {
        return res.status(404).send({ message: "Workout Not found." });
      }
      else{
        res.status(200).send({
          id: workout.id,
          completed: workout.completed,
          name: workout.email,
          exercises: workout.exercises
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.update = (req, res) => {
  Workouts.User.findOne({
    where: {
      id: req.body.id
    }
  }).then(async workout => {
    workout = req.data
    await workout.save()
    res.status(200).send({
      id: workout.id,
      completed: workout.completed,
      name: workout.email,
      exercises: workout.exercises
    });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}