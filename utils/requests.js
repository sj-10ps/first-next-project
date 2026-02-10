

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN||null
//fetch properties


//fetch random
export const fetchRandom=async()=>{
  if(!apiDomain){
    console.log("No API Domain found");
    return []
  }
  try{
    const res=await fetch(`${apiDomain}/random_properties`,{
      cache:'no-store'
    })
    if(!res.ok){
      throw new Error("cant fetch")
    }
    return res.json()
  }catch(err){
    console.log(err.message)
    return []
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

//fetch saved properties
export const fetchSaved=async ()=>{
  if(!apiDomain){
    return []
  }
  try {
    const res=await fetch(`${apiDomain}/properties/saved`)
    if(!res.ok){
      throw new Error('failed to fetch')
    }
  } catch (error) {
    console.log(error.message)
     return []
  }
}


//fetch listed
export const fetchListed=async(user_id)=>{
try {
  if(!apiDomain){
    return []
  }
  const res=await fetch(`${apiDomain}/user/${user_id}`)
  if(!res.ok){
    throw new Error("cant fetch")

  }
  return res.json()
} catch (error) {
  console.log(error.message)
  return []
}
}


