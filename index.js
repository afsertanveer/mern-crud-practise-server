const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Simple Node Server Running');
})
app.use(cors());
app.use(express.json());
const users = [
    {id:1,name:'a',email:'a@gmail.com'},
    {id:2,name:'b',email:'b@gmail.com'},
    {id:3,name:'c',email:'c@gmail.com'},
]

app.get('/users',(req,res)=>{
    res.send(users);
})

app.post('/users',(req,res)=>{
    console.log(req.body);
})

app.listen(port,()=>{
    console.log(`Simple Noder server running on port ${port}`);
})