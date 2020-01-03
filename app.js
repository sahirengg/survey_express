const express = require('express'),
mongoose = require('mongoose')
const port = 3001;
const bodyParser = require('body-parser')
app = express();
//App configs
mongoose.connect('mongodb://localhost/sample_api')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({useNewUrlParser: true}))


// Mongoose/Model Config
const employeeSchema =  new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    created: {type: Date, default: Date.now}
})

var Employees = mongoose.model('Employees', employeeSchema)
let employees = [{name: 'Atif',age: 21, email: 'atif@gmail.com'},
                    {name: 'Bob',age: 23, email: 'bob@gmail.com'},
                    {name: 'David',age: 24, email: 'david@gmail.com'}]
app.get('/employees', (req,res)=>{
 
 res.json(employees)
})
//create new employees
app.post("/post/employee", (req, res) => {
    const employee = req.body;
    console.log('Adding new item: ', employee);
   
    let myData = new Employees(employee)
    // res.json(employees);
    myData.save()
    .then(emp=>{
        res.send(employees)
        Employees.create(employees)
    })
    .catch(err=>{
        res.status(400).send('unable to save to the database')
    })
 
    // add new item to array
     // employees.push(employee)
 
    // return updated list of employees
    //    res.send(employees)
    // db.employees.save(employees)
//     var myData = new User(req.body);
//  myData.save()
//  .then(item => {
//  res.send("item saved to database");
//  })
//  .catch(err => {
//  res.status(400).send("unable to save to database");
//  });
 });
app.listen(port, ()=>{
    console.log('server is listening')
})


