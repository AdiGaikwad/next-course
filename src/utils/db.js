import mongoose from "mongoose"
let mongourl = "mongodb+srv://riasec:JuFf6rNNlWRULmyx@cluster0.qeef3.mongodb.net/test?retryWrites=true&w=majority"

const connect = async () => {
    try{

        mongoose.connect(mongourl, {
            tlsAllowInvalidHostnames: true,
            tlsAllowInvalidCertificates: true,
            // tlsCertificateKeyFile: "./ssl/mongo.pem",
        })
    }
    catch{
        throw new Error("Database connection failed")
    }
}


export default connect