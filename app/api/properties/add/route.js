import cloudinary from "@/config/cloudinary"
import connectDB from "@/config/config"
import Property from "@/models/Property"
import getSessionUser from "@/utils/getServerSession"


export const POST=async(request)=>{
try {
    await connectDB()
    const {userId}= await getSessionUser()
    if(!userId){
        return new Response('session is required',{status:401})
    }
 
    const formData=await request.formData()
    const amenities=formData.getAll("amenities")
    const images=formData.getAll("images").filter(i=>i.name!==" ")
    const propertyData={
        type:formData.get("type"),
        owner: userId,
        amenities:amenities,
        name:formData.get("name"),
        description:formData.get("description"),
        location:{
            street:formData.get("location.street"),
            city:formData.get("location.city"),
            state:formData.get("location.street"),
            zipcode:formData.get("location.zipcode")
        },
        beds:formData.get("beds"),
        baths:formData.get("baths"),
        square_feet:formData.get("square_feet"),
        rates:{
            monthly:formData.get("rates.monthly"),
            weekly:formData.get("rates.weekly"),
            nightly:formData.get("rates.nightly")
        },
        seller_info:{
            name:formData.get("seller_info.name"),
            email:formData.get("seller_info.email"),
            phone:formData.get("seller_info.phone")
        },
     
    }

    const uploadedImages=[]
    for(const img of images){
        const imgBuffer=Buffer.from(await img.arrayBuffer())
        await new Promise((resolve,reject)=>{
            const stream=cloudinary.uploader.upload_stream(
                {folder:'rental-seek'},
                (error,result)=>{
                    if(error){
                        reject(error)
                    }else{
                        uploadedImages.push(result.secure_url)
                        resolve(result)
                    }
                }
            )
            stream.end(imgBuffer)
        })
    }
    propertyData.images=uploadedImages
    const newProperty=new Property(propertyData)
    await newProperty.save()
    return Response.redirect(`${process.env.NEXTAUTH_URL}/public/properties/${newProperty._id}`)

} catch (error) {
     console.log(error)
     return new Response({status:500})
}
}