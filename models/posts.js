const mongoose = require("mongoose");
const {format} = require("date-fns");

const Comment = new mongoose.Schema({
    name: {
        type:String,
    },
    comment: {
        type:String
    }  ,
    commentedAt: {
        type:String,
        default: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
})


const Post = mongoose.Schema({
    username: String,
    posts: [
        {
            username: {
                type:String
            },
            dp: {
                type:String
            },
            title:{
            type: String,
            required: true,
        },
        image:{
            type: String,
        },
        caption: {
            type: String,
            required: true
        },
        createdAt: {
            type:String,
            default: Date
        },
        updatedAt: {
            type:String,
            default : Date
        },
        likedBy: [
            {
                name: String,
                username:String,
                dp:String
            }
        ],
        commentedBy: [Comment],
        comments: {
            type:Number,
            default: 0
        }
    }
    ]
})

const postSchema = mongoose.model("post",Post);
const commentSchema = mongoose.model("comment",Comment);

module.exports = {
    Post: postSchema,
    Comment: commentSchema
}; 