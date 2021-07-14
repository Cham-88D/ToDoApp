const express = require('express');
const app = express();


app.listen(3000)

app.get('/',(req,res)=>{
    res.send('<h1>Hello H <h1>')

})


app.get('/add-item',(req,res)=>{
    res.send('<h1>Add <h1>')

})