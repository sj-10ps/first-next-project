import ProfileCard from '@/components/ProfileCard'
import ProfileListings from '@/components/ProfileListings'
import React from 'react'
const userData={
    _id:1,
    image:'a1.jpg',
    name:'sj',
    email:'sj@gmail.com'
}

const ProfilePage = () => {
    
  return (
    <div className='pt-20 px-10'>
        <h2 className='text-3xl font-bold capitalize'>your profile</h2>
      <div className='flex flex-col gap-12  lg:flex-row lg:gap-48 lg:pl-12 py-6 '>
            <ProfileCard data={userData} />
            <div className='lg:w-[50%]'>
                  <ProfileListings/>
            </div>
         
      </div> 
    </div>
  )
}

export default ProfilePage