const db  = require("../models")

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

    app.post("/api/workouts", (req, res)=>{
        db.Workout.create(req.body).then((response)=>{
            return res.json(response);
        })
    })

    app.put("/api/workouts/:id", (req, res)=>{
        db.Workout.update({_id: req.params.id}, {$push:{exercises:req.body}}).then((response)=>{
            return res.json(response)
        })
    })
    
    app.delete("/api/workouts/:id", (req, res)=>{
        db.Workout.destroy({_id: req.params.id}).then((response)=>{
            return res.json(response)
        })
    })
}