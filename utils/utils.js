const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN||null
//fetch properties
export const fetchData=async()=>{
  console.log(apiDomain)
  if(!apiDomain){
    console.log("No API Domain found");
    return []
  }
  try {
   
    const res=await fetch(`${apiDomain}/properties`)
    if(!res.ok){
      throw new Error("cant fetch data") 
    }
    return res.json()
  } catch (error) {
    console.log(error.message)
  }
}

//fetch properties by id
export const fetchdatabyid=async(id)=>{
  if(!apiDomain){
    return []
  }
  try {
    
     const res=await fetch(`${apiDomain}/properties/${id}`)
     if(!res.ok){
        throw new Error('cant fetch data')
     }
     return res.json()
  } catch (error) {
      console.log(error.message)
      return []
  }
}

//fetch featured properties
export const fetchFeaturedData=async()=>{
  if(!apiDomain){
    return []
  }
    try {
       const res=await fetch(`${apiDomain}/featured_properties`) 
       if(!res.ok){
        throw new Error("cant fetch data")
       }
       return res.json()
    } catch (error) {
         console.log(error.message)
         return []
    } 
}
