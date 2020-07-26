const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
})

const Resistance = mongoose.model("Resistancw", ResistanceSchema);

module.exports = Resistance;

