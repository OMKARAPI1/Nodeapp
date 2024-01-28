var express = require('express')
var bp=require('body-parser')
var app = express()
app.use(bp.json())

var studentdata=[
    
]
var uid=1

app.use(express.static('public'))

app.get('/loadstudents',(req,res)=>{
    res.send(studentdata);
})

app.get('/loadstudents/:id',(req,res)=>{
    var uid=parseInt(req.params.id)
    var mtd =_.findwhere(userdata,{id:uid})
   
    if(mtd){
        res.send(mtd)
    }
})

app.post('/addstudents',(req,res)=>{
    var data=req.body
    data.id=uid++
    userdata.push(data)
    res.send('user added....')
})

app.listen(4000,()=>{
    console.log('server is ready....');
})
