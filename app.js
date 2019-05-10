const express = require('express'); //node function
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));//bodyParser()
// app.use(expess.json());

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
const user = req.body.user;
const pwd = req.body.pwd;
// const { user, pwd } = request.body;

console.log(user);
console.log(pwd);

if (user == "" || pwd == ""){
  res.status(400).send('username or password is missing')
} else if
    (user == 'mark' && pwd == 'giraffe'){
    res.status(200).send({user}); 
  } else {
    res.status(403).end()
  }
});

app.listen(3000, () => console.log('Server ready'));
