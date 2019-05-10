const express = require('express'); //node function
const app = express();
// let bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.urlencoded());
// app.use(bodyParser.json());

app.get('/api/exercise', (req, res) => {
  res.send(req.query)
  console.log(req.method, req.path)
  for (const key in req.query){
  console.log(`${key}: ${req.query[key]}`)
}});


app.post('/api/exercise', (req, res) => {
console.log(req.body)
let list = "";
for (const key in req.body){
list += `<li>${key}: ${req.body[key]}</li>`
};
res.send(`<h1>Hello from Express!</h1>
<h2>POST parameters</h2>
<p>I received these parameters: </p>
<ul>${list}</ul>`);
});


app.post('/api/login', (req, res) => {
console.log(req.body.user)
console.log(req.body.pwd)

if (req.body.user == "" || req.body.pwd == ""){
  res.status(400).send('username or password is missing')
} else if
    (req.body.user == 'mark' && req.body.pwd == 'giraffe'){
    res.status(200).json({user:req.body.user});
  } else {
    res.status(403).end()
  }
});

app.listen(3000, () => console.log('Server ready'));
