import connectDB from "@/config/config";
import Property from "@/models/Property";


// GET /api/properties
export const GET=async ()=>{
    try {
        await connectDB()
        const data=await Property.find({})
        return new Response(JSON.stringify(data),{status:200})
        
    } catch (error) {
        console.log(error.message)
        return new Response('something went wrong',error.message)
    }
}


