const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Is server open or closed??");
})

app.listen(4200, () => console.log('Listening to the port 4200'));