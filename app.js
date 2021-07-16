const express = require('express');
const app = express();
app.listen(3000)


const location = './views/'
//Home
app.get('/',(req,res)=>{
    res.sendFile(location+'index.html',{root:__dirname})

})


//add-item page
app.get('/add-item',(req,res)=>{
    res.sendFile(location+'add-item.html',{root:__dirname})

})


//404 error page 
app.use((req,res)=>{
    res.sendFile(location+'error.html',{root:__dirname})
})