
import connectDB from "@/config/config"
import Property from "@/models/Property"
import User from "@/models/User"
import getSessionUser from "@/utils/getServerSession"

export const POST=async(request)=>{
    try {
        await connectDB()
        const propertyId=await request.json()

        console.log(propertyId)
        const session=await getSessionUser()
        if(!session.user||!session){
            return new Response('session needed',{status:404})
        }
        let message
         const {userId}=session
         const user=await User.findById(userId)
         let isBookmarked=user.bookmarks.includes(propertyId)
         if(isBookmarked){
           
            user.bookmarks.pull(propertyId)
             message="Bookmark removed successfully"
         }else{
            user.bookmarks.push(propertyId)
            message="Bookmark added successfully"
         }
         await user.save()
         return new Response(JSON.stringify({message}),{status:200})

        
    } catch (error) {
         console.log(error.message)
         return new Response({status:500})
    }
}