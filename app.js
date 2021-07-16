const express = require('express');
const mongoose = require('mongoose')
const app = express();

//template engine
app.set('view engine', 'ejs');
//port 3000
app.listen(3000)
//databse connection
const mongodb =  'mongodb://127.0.0.1:27017/?compressors=snappy&gssapiServiceName=mongodb'
mongoose.connect(mongodb,{ useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Connected")
}).catch(err=>console.log(err))
//Home
app.get('/',(req,res)=>{

   const item =[
       {name:'computer',price:12}
   ]

   const n = 'Home'
   const navLname = 'Add-Items'
    res.render('index',{item:item,n,navLname});

})


//add-item page
app.get('/add-item',(req,res)=>{
    const n = 'Add-Item'
    const navLname = 'Home'
    res.render('add-item',{n,navLname});

})


//404 error page 
app.use((req,res)=>{
    const n = 'Error'
    res.render('error',{n});
})