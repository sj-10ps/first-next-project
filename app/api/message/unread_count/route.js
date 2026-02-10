import connectDB from "@/config/config"
import Message from "@/models/Message"
import getSessionUser from "@/utils/getServerSession"

export const GET=async()=>{
    try {
        await connectDB()
        const session=await getSessionUser()
        if(!session&&!session.user){
          return new Response('session required',{status:401})
        }
        const {userId}=session
        const messageCount=await Message.countDocuments({recipient:userId,read:false})
     
        return new Response(JSON.stringify({messageCount}),{status:200})
    } catch (error) {
        console.log(error.message)
        return new Response(JSON.stringify(error.message),{status:500})
    }
}