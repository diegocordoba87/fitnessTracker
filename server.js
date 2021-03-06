const express = require("express");
const mongoose = require ("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;




app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/workouts", { useNewUrlParser: true, useUnifiedTopology: true});

//require("./seeders/seed");
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });