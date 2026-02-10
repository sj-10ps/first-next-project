import connectDB from "@/config/config"
import Property from "@/models/Property"

export const GET=async(request,{params})=>{
    try {
        await connectDB()
        const {user_id}=await params
        const res=await Property.find({owner:user_id})
        return new Response(JSON.stringify(res),{status:200})
    } catch (error) {
         console.log(error.message)
         return new Response({status:500})
    }
}