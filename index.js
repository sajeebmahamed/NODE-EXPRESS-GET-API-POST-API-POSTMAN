const express = require('express')
const app = express()

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
app.listen(4200, () => console.log('Listening to the port 4200'));