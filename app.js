const express = require('express');
const mongoose = require('mongoose')
const Item = require('./models/items');
const app = express();

app.use(express.urlencoded({ extended: true }));
//template engine
app.set('view engine', 'ejs');
//port 3000
app.listen(3000)
//databse connection
const mongodb =  ' mongodb://127.0.0.1:27017/item-databse'
mongoose.connect(mongodb,{ useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Connected")
}).catch(err=>console.log(err))



//Home
app.get('/',(req,res)=>{
   res.redirect('/get-items');
})

//get data
app.get('/get-items', (req, res) => {
    const n = 'Home'
    const navLname = 'Add-Items'
    Item.find().then(result => {

        res.render('index', { items: result,n,navLname });
    }).catch(err => console.log(err))
})


//add-item page
app.get('/add-item',(req,res)=>{
    const n = 'Add-Item'
    const navLname = 'Home'
    res.render('add-item',{n,navLname});

})


// post items to database
app.post('/items', (req, res) => {
    console.log(req.body)
    const item = Item(req.body);
    item.save().then(() => {
        res.redirect('/get-items')
    }).catch(err => console.log(err))

})

// get by id
app.get('/items/:id',(req,res)=>{
   const n = 'Item-Details'
   const navLname = 'Home'
   const Id = req.params.id
    Item.findById(Id).then(result=>{
        res.render('item-details',{item:result,n,navLname})
    })
})

// delete

app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id).then(result => {
        res.json({ redirect: '/get-items' })
    })
})
//update
 app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    Item.findByIdAndUpdate(id, req.body).then(result => {
        res.json({ msg: 'Updated Successfully' })
    })
})






//404 error page 
app.use((req,res)=>{
    const n = 'Error'
    res.render('error',{n});
})




