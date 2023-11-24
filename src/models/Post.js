import mongoose from "mongoose"

const {Schema} = mongoose

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
content:{
    type: String,
    required: true
},
    username:{
        type: String,
        required: true
    },
},
{timestamps: true}

)

// var Post;

// console.log(mongoose.model("Post"))
// if(mongoose.model("Post")){
//     Post = mongoose.model("Post")
// }
// else{
//     Post = mongoose.model("Post", postSchema)
// }

// // export default mongoose.model("Post", postSchema);
// module.exports = Post

// console.log(mongoose.modelNames());
// export default mongoose.model("Post") ? mongoose.model("Post") : mongoose.model("Post", postSchema);

const modelName = mongoose.models.Post || mongoose.model('Post', postSchema )  

export default  modelName;