export const dynamic="force-dynamic"

import { fetchData } from '@/utils/utils'
import PropertyBox from './PropertyBox'



const shuffleData=async()=>{
   const properties=await fetchData()
   let shuffled=properties.sort(()=>0.5-Math.random()).slice(0,3)
   return shuffled
}

const HomeOtherProperties = async() => {
  const shuffled=await shuffleData()
  return (
    <div className='flex flex-col gap-6 py-4 md:max-w-[85%] mx-auto p-4'>
         <h2 className='text-3xl text-blue-700 font-bold capitalize text-center'>recent properties</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  '>
            {shuffled.map((o)=>(
                <PropertyBox key={o._id} data={o}/>
            ))}
          </div>
    </div>
  )
}

export default HomeOtherProperties  