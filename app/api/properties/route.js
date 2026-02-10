import connectDB from "@/config/config";
import Property from "@/models/Property";
import getSessionUser from "@/utils/getServerSession";


// GET /api/properties
export const GET=async (request)=>{
    try {
        await connectDB()
        const {searchParams}=new URL(request.url)
        
        const page=searchParams.get('page')
        const pageSize=searchParams.get('pageSize')
     
        const skip=(page-1)*pageSize
        const totalCount=await Property.countDocuments({})
        const data=await Property.find({}).skip(skip).limit(pageSize).sort({createdAt:-1})
        const result={
            data:data,
            totalCount:totalCount
        }
        return new Response(JSON.stringify(result),{status:200})
        
    } catch (error) {
        console.log(error.message)
        return new Response('something went wrong',{status:500})
    }
}


