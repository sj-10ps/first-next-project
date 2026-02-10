import connectDB from "@/config/config"
import User from "@/models/User"


import getSessionUser from "@/utils/getServerSession"


export const GET=async(request,{params})=>{
    try {
        await connectDB()
        const {id}=await params
        const session=await getSessionUser()
        if(!session||!session.user){
            return new Response('session required',{status:404})
        }
        const {userId}=session
        const userData=await User.findById(userId)
        let isBookmarked=userData.bookmarks.includes(id)
        return new Response(JSON.stringify({isBookmarked}),{status:200})
    } catch (error) {
        console.log(error.message)
        return new Response({status:500})
    }
}