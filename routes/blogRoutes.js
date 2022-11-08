const express = require("express") ;
const router = express.Router() ;
const db = require("../dbConnection/db") ;
const Data = require("../schema/blogSchema") ;

router.post("/api/blogs", async (req, res) => {
    const data = new Data({
        data : req.body.data,
        title : req.body.title,
        author_name : req.body.author_name,
        author_image : req.body.author_image,
        created_at : req.body.created_at,
        description : req.body.description,
        pic_courtesy :req.body.pic_courtesy,
        blog_image : req.body.blog_image

    });

    router.get("/api/blogs",async(req,res)=>{
        try{
            const getData = await Data.find({}) ;
            res.send(getData) ;
            console.log(getData);
        }catch(err){
            res.status(400).send(err) ;
        }
    })

    // router.delete("/api/blogs/_id", (req, res)=>{
    //     _id : req.

    // })
    
    // const deleteDocument = async(_id) =>{
    //     try{
    //         const result = await Data.deleteOne({_id});
    //         console.log(result);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    // deleteDocument("63689feab89d9132f4814c46");
    data.save().then(()=>{
        res.status(201).json({message : "Data posted successfully"});

    }).catch((err)=>res.status(400).json({error : "Failed to post data to database"})) ;
})

module.exports = router ;