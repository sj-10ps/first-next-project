import React from 'react'
import InfoBox from './InfoBox'


const InfoBoxSection = () => {
  return (
    <div className='flex gap-4 my-10 flex-col px-4 md:flex-row md:justify-center '>
       <InfoBox bgColor={'bg-gray-300'} Heading='for renters' ButtonProps={{bgColor:'bg-black',title:'Browse Properties',href:'/public/properties'}}>Find your dream rental property. Bookmark properties and contact owners</InfoBox>
        <InfoBox bgColor={' bg-blue-300'} Heading='For Property Owners' ButtonProps={{bgColor:'bg-blue-500',title:'Add Properties',href:'/public/properties/add'}}>List your properties and reach potential tenants. Rent as an airbnb or long term.</InfoBox>
    </div>
    
  )
}

export default InfoBoxSection
