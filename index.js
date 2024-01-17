const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.get('/', (req,res) => {
    console.log('Hello world')
})

app.get('/name', (req,res)=> {
    res.send("<h1>Hi, Chai Piyo aur code kro </h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`app is running on ${PORT}`)
})