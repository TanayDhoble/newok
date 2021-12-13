const { json } = require('express');
const hbs = require('hbs');
const express=require('express');
const app=express();
const MenRanking=require('./src/Model/men')
require('./src/db/con')
const port=process.env.Port || 3800;
app.use(express.json());
const router=require('./src/Router/mens')

app.set('view engine', 'hbs');

app.get("/",(req,res)=>{
    res.render('header')
})


app.use(router);
app.listen(port,()=>{
    console.log(`connection is ready on ${port}`)
})