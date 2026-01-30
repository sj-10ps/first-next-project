import connectDB from "@/config/config"
import Property from "@/models/Property"

export const GET=async()=>{
    try {
        connectDB()
        const data=await Property.aggregate([
        {$sample:{size:3}}
    ])
       return new Response(JSON.stringify(data),{status:200})
        
    } catch (error) {
         console.log(error.message)
         return new Response('something went wrong',{status:500})
    }
    
}