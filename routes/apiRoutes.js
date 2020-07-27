const { db } = require("../models/workout")


module.exports = (app)=>{
    app.get("api/workouts", (req, res)=>{
       db.Workout.find().then((results)=>{
           res.json(results);
       })
    })

    app.get("/api/workouts/range", (req, res)=>{
        db.Workout.find().then(response => {
      return res.json(response);
    })
    })

    app.post("/api/workout", (req, res)=>{
        db.Workout.create(req.body).then((response)=>{
            return res.json(response);
        })
    })

    app.put("/apit/workout/:id", (req, res)=>{
        db.Workout.update({_id: req.params.id}, {$push:{exercises:req.body}}).then((response)=>{
            return res.json(response)
        })
    })
    
    




}