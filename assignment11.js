var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var sum=0;
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'))

app.get('/', function(req, res){
    res.render(path.join('assignment11'),{
        sum: sum,
    })
})

app.get('/assignment11-part2', function(req, res){
    res.render(path.join('assignment11-part2'))
})

app.get('/projects', function(req, res){
    res.send('This is the projects page')
})


app.get('/github', function(req, res){
    res.send('This is the github page')
})


app.get('/bibliography', function(req, res){
    res.send('This is the bibliography page')
})



app.post('/addition', function(req,res){
    var num1= parseInt(req.body.number1);
    var num2= parseInt(req.body.number2);
    sum=num1+num2;
    
 })



app.listen(3000, function(){
    console.log("server started on port 3000");
    
});