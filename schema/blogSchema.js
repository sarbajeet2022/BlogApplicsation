const mongoose = require("mongoose") ;

const blogSchema = new mongoose.Schema({
    data : {
        type:String
    },
    title:{
        type : String
    },
    author_name:{
        type:String
    },
    author_image:{
        type:String
    },
    created_at: {
        type: Number
    },
    description:{
        type: String
    },
    pic_courtesy:{
        type: String
    },
    blog_image:{
        type:String
    }


}) 

const data = mongoose.model("reactblogapp",blogSchema) ;
module.exports = data ;