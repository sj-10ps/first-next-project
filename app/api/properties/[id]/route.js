import connectDB from "@/config/config"
import Property from "@/models/Property"
import getSessionUser from "@/utils/getServerSession"

export const GET=async(request,{params})=>{
    try {
         await connectDB()
         const {id}=await params
         const data=await Property.findById(id)
         return new Response(JSON.stringify(data),{status:200})
        
    } catch (error) {
         console.log(error.message)
         return new Response({status:500})
    }
}

export const DELETE=async(request,{params})=>{
     try {
          await connectDB()
          const {id}=await params
          const sessionUser=await getSessionUser()
          if(!sessionUser||!sessionUser.userId){
               return new Response('user id is required',{status:404})
          }
          const property=await Property.findById(id)
          if(property.owner.toString()!==sessionUser.userId){
               return new Response('authorization required',{status:401})
          }
          await property.deleteOne()
          return new Response('Property Deleted',{status:200})

     } catch (error) {
           console.log(error.message)
           return new Response({status:500})
     }
}

export const PUT=async(request,{params})=>{
     try {
          await connectDB()
          const {id}=await params
          const formData=await request.formData()
          const sessionUser=await getSessionUser()
          if(!sessionUser||!sessionUser.userId){
               return new Response('session required',{status:404})
          }
          const property=await Property.findById(id)
          if(property.owner.toString()!==sessionUser.userId){
               return new Response('unauthorized',{status:401})
          }

      const updatedProperty = {
      name: formData.get("name"),
      type: formData.get("type"),
      description: formData.get("description"),

      location: {
        street: formData.get("street"),
        city: formData.get("city"),
        state: formData.get("state"),
        zipcode: formData.get("zipcode"),
      },

      beds: Number(formData.get("beds")),
      baths: Number(formData.get("baths")),
      square_feet: Number(formData.get("square_feet")),

      amenities: formData.getAll("amenities"), // ✅ checkbox array

      rates: {
        monthly: formData.get("monthly") || null,
        weekly: formData.get("weekly") || null,
        nightly: formData.get("nightly") || null,
      },

      seller_info: {
        name: formData.get("seller_name"),
        email: formData.get("seller_email"),
        phone: formData.get("seller_phone"),
      },
    };
    await Property.findByIdAndUpdate(id,updatedProperty)
    return new Response('success',{status:200}) 
     } catch (error) {
          console.log(error.message)
          return new Response({status:500})
     }
}