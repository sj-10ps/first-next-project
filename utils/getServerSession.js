import { getServerSession } from "next-auth"

const { authOptions } = require("./authOptions")

const getSessionUser=async()=>{
    try {
         const session=await getServerSession(authOptions)
         if(!session||!session.user){
            return null
         }
         return {
            user:session.user,
            userId:session.user.id
         }
    } catch (error) {
        console.log(error.message)
        return null
    }
     
}
export default getSessionUser