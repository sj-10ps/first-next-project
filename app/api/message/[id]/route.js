import connectDB from "@/config/config"
import Message from "@/models/Message"
import getSessionUser from "@/utils/getServerSession"

export const GET=async(request,{params})=>{
    try {
        await connectDB()
        const {id}=await params
        const session=await getSessionUser()
        if(!session||!session.user){
            return new Response('session required',{status:401})
        }
        
        const messageData=await Message.findById(id)
        return new Response(JSON.stringify(messageData),{status:200})
    } catch (error) {
        console.log(error.message)
        return new Response(JSON.stringify(error.message),{status:500})
    }
}

export const PUT=async(request,{params})=>{
    try {
        let message
        
        const {id}=await params
        const messageData=await Message.findById(id)
  
        const session=await getSessionUser()
        if(!session||!session.user){
            return new Response('session required',{status:404})
        }
        if(session.userId!==messageData.recipient.toString()){
            return new Response('Unauthorized Action',{status:401})
        }
        messageData.read=!messageData.read
        await messageData.save()
      
        return new Response(JSON.stringify({read:messageData.read}),{status:200})

    } catch (error) {
        console.log(error.message)
        return new Response(JSON.stringify(error.message),{status:500})
    }
}

export const DELETE=async(request,{params})=>{
    try {
        const {id}=await params
        await connectDB()
        const session=await getSessionUser()
        if(!session||!session.user){
            return new Response('Session required',{status:401})
        }
        const messageData=await Message.findById(id)
        if(messageData.recipient.toString()!==session.userId){
            return new Response('Unauthorized action',{status:404})
        }
        await messageData.deleteOne()
        return new Response('successfully deleted',{status:200})

    } catch (error) {
         return new Response(JSON.stringify(error.message),{status:500})
    }
}