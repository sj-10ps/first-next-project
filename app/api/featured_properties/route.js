import connectDB from "@/config/config"
import Property from "@/models/Property"


export const GET=async(request)=>{
   try {
     await connectDB()
     const data=await Property.find({is_featured:true})
     return new Response(JSON.stringify(data),{status:200})
   } catch (error) {
      console.log(error.message)
   }
}