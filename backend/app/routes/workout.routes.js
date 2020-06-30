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
    
    app.get('/api/workouts/getone',
        controller.workout
        //get all workouts for a given user in an array of workouts [{name:'',exercisese:[{name:'',group:'',sets:0,reps:0,weight:null},...]},...]
    )

    app.get('/api/workouts/getall',
        //get specific workout for a user in an array of exercises [{name:'',group:'',sets:0,reps:0,weight:null},...]
        controller.allWorkouts
    )

    app.post('/api/workouts/create',
        //creates a users workout
        controller.create
    )

    app.put('/api/wprkouts/update',
        controller.update
        //updates a given workout
    )
};