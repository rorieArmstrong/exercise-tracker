const { authJwt } = require("../middleware");
const controller = require("../controllers/workout.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    
    app.get(
        //get all workouts for a given user in an array of workouts [{name:'',exercisese:[{name:'',group:'',sets:0,reps:0,weight:null},...]},...]
    )

    app.get(
        //get specific workout for a user in an array of exercises [{name:'',group:'',sets:0,reps:0,weight:null},...]
    )

    app.post(
        //creates a users workout
    )

    app.put(
        //updates a given workout
    )
};