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

/* 

====================External Html FIle=============================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h4 id="userName">Show Data</h4>
    <div>
        <input type="text" id="uuser">
        <button id="btnUser">Add User</button>
    </div>
    <script>
        fetch('http://localhost:4200/users/1')
        .then(res => res.json())
        .then(data=>{
            document.getElementById('userName').innerText = data.name;
        });



        // post data to server

        const btn = document.getElementById('btnUser');
        btn.addEventListener('click', () =>{
            const name = document.getElementById('uuser').value;
            const user = {name};
            fetch('http://localhost:4200/addUser', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-type" : "application/json; charset=UTF-8"
                }
            })

            .then(res => res.json())
            .then(data => updateUser(data));
        })

        function updateUser(user){
            document.getElementById('userName').innerText = user.name;
        }


    </script>
</body>
</html>

*/