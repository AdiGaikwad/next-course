import mongoose from "mongoose"

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
},
{timestamps: true}

)

// var User;

// if(mongoose.model.User){
//     User = mongoose.model("User")
// }
// else{
//     User = mongoose.model("User", userSchema)
// }

// // export default mongoose.model("User", userSchema);
// module.exports = User

//  export default mongoose.model("User") ? mongoose.model("User") : mongoose.model("User", userSchema);
const modelName = mongoose.models.User || mongoose.model('User', userSchema )  

export default modelName;
