const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000)


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