import React from 'react'

const PropertySearchBar = () => {
  return (
    <div className='flex flex-col gap-3 md:flex-row w-full md:justify-center'>
                <input type="text" placeholder='Enter Location' className='bg-white placeholder:text-gray-600 py-3 px-6 pr-12 rounded-lg' />
                <select name="" id="" className='bg-white py-3 px-4 rounded-lg'>
                    <option value={'all'}>
                        All
                    </option> 
                     <option value={'Apartment'}>
                        apartment
                    </option>
                      <option value={'studio'}>
                        Studio
                    </option> 
                     <option value={'condo'}>
                        Condo
                    </option> 
                     <option value={'house'}>
                        House
                    </option> 
                     <option value={'cabin'}>
                        Cabin
                    </option> 
                     <option value={'loft'}>
                        Loft
                    </option> 
                     <option value={'room'}>
                        Room
                    </option>
                      <option value={'other'}>
                        Other
                    </option>
                     
                </select>
                <button className='bg-blue-500 py-2 px-6  rounded-lg text-white hover:opacity-75'>Search</button>

            </div>
  )
}

export default PropertySearchBar
