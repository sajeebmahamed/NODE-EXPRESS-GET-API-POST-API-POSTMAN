const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const students = {
        name : "Sajeeb",
        id  : 1,
        sec : "A",
        dept : "CSE"
    }
    res.send(students);
})
app.get('/fruits/banna', (req, res) => {
    res.send({fruit: 'banana', quantity: 100, pricew : 500});
})
const users = ['John', 'Cameron', 'Shunny', 'Hui Hui']
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})
//post data
app.post('/addUser', (req, res) => {
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
});
app.listen(4200, () => console.log('Listening to the port 4200'));