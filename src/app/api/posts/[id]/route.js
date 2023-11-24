import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"
export const GET = async(request, {params})=>{
    const {id} = params
    // console.log(id)
    //fetch
    try{
        await connect()
        const post = await Post.findById(id)

        return new NextResponse(JSON.stringify(post), {status: 200})

    }
    catch(err){

        return new NextResponse(`Error connecting to database ${err }`, {status: 200})
    }

}


export const DELETE = async(request, {params})=>{
    const {id} = params
    // console.log(id)
    //fetch
    try{
        await connect()
        const post = await Post.findByIdAndDelete(id)

        return new NextResponse("Post has been deleted", {status: 200})

    }
    catch(err){

        return new NextResponse(`Error connecting to database ${err }`, {status: 200})
    }

}