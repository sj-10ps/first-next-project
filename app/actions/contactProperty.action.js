"use server"
import { property, z} from "zod"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/authOptions"
import connectDB from "@/config/config"
import Message from "@/models/Message"
import Property from "@/models/Property"


const contactSchema=z.object({
  name:z.string().min(2,"name must be atleast 2 characters"),
  email:z.string().email("invalid email"),
  phone:z.string().min(10,"must be 10 digits").max(10,"invalid number"),
  message:z.string().min(10,"minimum 10 characters"),
  property:z.string()
})

export async function contactPropertyAction(prevState,formData){
   const data={
    name:formData.get("name"),
    email:formData.get("email"),
    phone:formData.get("phone"),
    message:formData.get("message"),
    property:formData.get("property")
   }

   const result=contactSchema.safeParse(data)
   if(!result.success){
    
    return {
       errors:result.error.flatten().fieldErrors,
       input:data
    }
   }
   
   
   try {
    await connectDB()
    const session=await getServerSession(authOptions)
    if(!session||!session.user){
      return{
         input:data,
         error:"unauthorized"
      }
    }
    const userId=session.user.id
    const propertyData=await Property.findById(data.property)
   
    if(userId===propertyData.owner.toString()){
      return{
         input:data,
         error:'cannot send message to yourself'
      }
    }


    await Message.create({...result.data,sender:userId,recipient:propertyData.owner})
   
    return {
    success: true,
    input:{},
    errors:{},
    
  }
   } catch (error) {
     console.log(error)
      return { error: "Failed to save message" }
   }

}