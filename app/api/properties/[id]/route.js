import connectDB from "@/config/config"
import Property from "@/models/Property"

export const GET=async(request,{params})=>{
    try {
         connectDB()
         const {id}=await params
         const data=await Property.findById(id)
         return new Response(JSON.stringify(data),{status:200})
        
    } catch (error) {
         console.log(error.message)
         return new Response({status:500})
    }
}