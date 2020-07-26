const path = require("path")

module.exports = function(app){
    //index view route
    app.get("/", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    // stats view route
    app.get("/stats", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/stats.html"));
        })
    

    app.get("/exercise", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
  
}
