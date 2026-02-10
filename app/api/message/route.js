import connectDB from "@/config/config"
import Message from "@/models/Message"
import getSessionUser from "@/utils/getServerSession"
export const dynamic = "force-dynamic"

export const GET=async()=>{
    try {
       await connectDB()
       const session=await getSessionUser()
       if(!session||!session.user){
          return new Response('session required',{status:404})
       }
       const newmessages=await Message.find({recipient:session.userId,read:false}).sort({createdAt:-1}).populate('property','name')
       const readmessages=await Message.find({recipient:session.userId,read:true}).sort({createdAt:-1}).populate('property','name')
       const messages=[...newmessages , ...readmessages]
       
       return new Response(JSON.stringify(messages),{status:200})
    } catch (error) {
      console.log(error.message)
      return new Response(JSON.stringify(error.message),{status:500}) 
    } 
}