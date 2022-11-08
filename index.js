const express = require("express") ;
const dotenv = require("dotenv") ;
const app = express() ;
const Data = require("./schema/blogSchema")

var cors = require("cors") ;
app.use(cors()) ;

dotenv.config({path:'./config.env'})
require("./dbConnection/db") ;
app.use(express.json()) ;
app.use(require("./routes/blogRoutes"))

const PORT = process.env.PORT ;
app.use(express.json());

app.get("/api/blogs",async(req,res)=>{
    try{
        const getData = await Data.find({}) ;
        res.send(getData) ;
    }catch(err){
        res.status(400).send(err) ;
    }
})

// get data with id

app.get("/api/blogs/:id",(req, res)=>{
    getid = req.params.id ;
    Data.find(({_id : getid}),(err,val)=>{
        res.send(val) ;
    })

})

// app.post('/api/blog',(req,res)=>{
//     res.send("Post done") ;
//     console.log(req.body) ;
//     const data = new DB(req.body);
//     data.save().then(()=>{
//         res.send(data) ;
//     }).catch((err)=>{
//         res.send(err) ;

//     })
// })
app.listen(PORT,()=>{
    console.log(`port listening at ${PORT}`) ;
})