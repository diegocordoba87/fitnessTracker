const path = require("path")

module.exports = function(app){
    //index view route
    app.get("/", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/index.html", (err, res) => {
            if (err) throw err;
        }))
    })
    
}
