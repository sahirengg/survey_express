var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/surveys');

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})


model.exports('emplyees', employeeSchema)