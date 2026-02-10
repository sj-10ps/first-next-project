import connectDB from "@/config/config"
import Property from "@/models/Property"
import User from "@/models/User"
import getSessionUser from "@/utils/getServerSession"

export const GET=async(request)=>{
    try {
        await connectDB()
        const session=await getSessionUser()
        if(!session||!session.user){
            return new Response('Session required',{status:404})
        }
        
        const {userId}=session
        const UserData=await User.findById(userId)
        const Propertyids=UserData.bookmarks
        const res=await Property.find({_id:{$in:Propertyids}})
       
        return new Response(JSON.stringify(res),{status:200})
    } catch (error) {
        console.log(error.message)
        return new Response({status:500})
    }
}