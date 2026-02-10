import connectDB from "@/config/config"
import Property from "@/models/Property"

export const GET=async(request)=>{
 try {
    await connectDB()
    const {searchParams}=new URL(request.url)
    const location=searchParams.get('location')
    const type=searchParams.get('type')
    const typePattern=new RegExp(type,'i')
    const locationPattern=new RegExp(location,'i')
    let query={}
    if(type&&type!=="all"){
        query.type=typePattern
    }
    if(location){
        query.$or=[
            {name:locationPattern},
            {description:locationPattern},
            {'location.street':locationPattern},
            {'location.city':locationPattern},
            {'location.state':locationPattern},
            {'location.zipcode':locationPattern}
        ]
    }
    

    
    
    const res=await Property.find(query)
    return new Response(JSON.stringify(res),{status:200})
 } catch (error) {
     return new Response(JSON.stringify(error.message),{status:500})
 }
}