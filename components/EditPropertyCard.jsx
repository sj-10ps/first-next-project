"use client"
import { fetchdatabyid } from '@/utils/requests'
import { Field, Form, Formik } from 'formik'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
const amenities = [
  "Wifi",
  "Full_kitchen",
  "Washer&Dryer",
  "Free_Parking",
  "Swimming_Pool",
  "Hot_Tub",
  "24/7_Security",
  "Wheelchair_Accessible",
  "Elevator_Access",
  "Dishwasher",
  "Gym/Fitness_Center",
  "Air_Conditioning",
  "Balcony/Patio",
  "Smart_TV",
  "Coffee_Maker",
];

const EditPropertyCard = () => {
    const router=useRouter()
    const [loading,setLoading]=useState(false)
    const [initialvalues,setInitialValues]= useState({
    name: '',
    type: '',
    description: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    beds: 0,
    baths: 0,
    square_feet: 0,
    amenities: [],
    monthly: '',
    weekly: '',
    nightly: '',
    seller_name: '',
    seller_email: '',
    seller_phone: ''
  })

const {id}=useParams()
 useEffect(()=>{
    const fetchData=async()=>{
        const res=await fetchdatabyid(id)
        setInitialValues(prev=>({
            ...prev,
            name:res.name??'',
            type:res.type??'',
            description:res.description??"",
            street:res.location.street??'',
            city:res.location.city??'',
            state:res.location.state??'',
            zipcode:res.location.zipcode??'',
            beds:res.beds??'',
            baths:res.baths??"",
            square_feet:res.square_feet??"",
            amenities:res.amenities||[],
            monthly:res.rates.monthly??"",
            weekly:res.rates.weekly??"",
            nightly:res.rates.nightly??"",
            seller_name:res.seller_info.name??"",
            seller_email:res.seller_info.email??"",
            seller_phone:res.seller_info.phone??"",
        }))
    }
    fetchData()
 },[id])

 const validationSchema=Yup.object({
    name:Yup.string().required("property is required"),
    type:Yup.string().required("type is required"),
    street:Yup.string().required("street is required"),
    city:Yup.string().required("city is required"),
    state:Yup.string().required("state is required"),
    zipcode:Yup.string().required("zipcode is required"),
    beds:Yup.number("must be a number").required("Bed count is required"),
    baths:Yup.number("must be a number").required("bath count is required"),
    square_feet:Yup.number("must be a number").required("sqft is required"),
    amenities:Yup.array().min(3,"amenities too short"),
    seller_name:Yup.string().required("seller name is required"),
    seller_email:Yup.string().required("seller email is required"),
 }
 )
  const handlesubmit=async(values)=>{
    const formData=new FormData()
    setLoading(true)
      try {
          Object.entries(values).forEach(([key,value])=>{
            if(Array.isArray(value)){
                value.forEach(v=>formData.append(key,v))
            }else{
                formData.append(key,value)
            }
          })
          const res=await fetch(`/api/properties/${id}`,{method:'PUT',body:formData})
          if(!res.ok){
            toast.error("cannot be updated")
          }else{
            toast.success("updated succesfully")
            router.back()
          }
      } catch (error) {
          console.log(error.message)
      }finally{
            setLoading(false)
      }
      
  }
  

  return (
     <div className="p-4 bg-white rounded-lg shadow-xl w-full md:max-w-fit " >
      <h2 className="text-center text-3xl font-bold">Add Property</h2>
     <Formik className="mt-4" initialValues={initialvalues} validationSchema={validationSchema} onSubmit={handlesubmit} enableReinitialize>
         {({errors,touched,setFieldValue})=>(
            <Form className='flex flex-col gap-5'>
                <div className="flex flex-col gap-2">
              <label htmlFor="type" className="property-form-label">Property type</label>

                <Field as="select" name="type" className="bg-white py-3 px-4 rounded-lg outline">
                    <option value={"Apartment"}>apartment</option>
                    <option value={"studio"}>Studio</option>
                    <option value={"condo"}>Condo</option>
                    <option value={"house"}>House</option>
                    <option value={"cabin"}>Cabin</option>
                    <option value={"loft"}>Loft</option>
                    <option value={"room"}>Room</option>
                    <option value={"other"}>Other</option>       
                </Field>
                {touched.type&&errors.type&&<p className='text-red-700'>{errors.type}</p>}
                 </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className='property-form-label'>Listing Name</label>
                        <Field name="name" className="bg-white py-3 px-4 rounded-lg outline"/>
                        {touched.name&&errors.name&&<p className='text-red-600'>{errors.name}</p>}
                  </div>
                   <div className="flex flex-col gap-2">
                     <label htmlFor="">description</label>
                     <Field as="textarea" name="description" className="bg-white py-3 px-4 rounded-lg outline"/>
                     {touched.description&&errors.description&&<p>{errors.description}</p>}
                   </div>
                   <div  className="flex flex-col gap-2 p-3 bg-blue-50">
          <label className="property-form-label" htmlFor="street">location</label>
          <Field
            name="street"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
           {touched.street&&errors.street&&<p className='text-red-700'>{errors.street}</p>}
          <Field
            name="city"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
            
          />
           {touched.city&&errors.city&&<p className='text-red-700'>{errors.city}</p>}
       <Field
            name="state"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
           {touched.state&&errors.state&&<p className='text-red-700'>{errors.state}</p>}
        <Field
            name="zipcode"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
           {touched.zipcode&&errors.zipcode&&<p className='text-red-700'>{errors.zipcode}</p>}
        </div>

         <div className="flex flex-col md:flex-row md:gap-3">
          <div className="flex gap-4 flex-col md:flex-row">
            <label htmlFor="beds" className="property-form-label">Beds</label>
            <Field
              name="beds"
              type="number"
              className="bg-white py-3 px-4 rounded-lg outline "
            
            />
             {touched.beds&&errors.beds&&<p className='text-red-700'>{errors.beds}</p>}
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <label htmlFor="baths" className="property-form-label">baths</label>
            <Field
              name="baths"
              type="number"
              className="bg-white py-3 px-4 rounded-lg outline "
             
            />
             {touched.baths&&errors.baths&&<p className='text-red-700'>{errors.baths}</p>}
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <label htmlFor="square_feet" className="property-form-label">square feet</label>
            <Field
              name="square_feet"
              type="number"
              className="bg-white py-3 px-4 rounded-lg outline"
            />
             {touched.square_feet&&errors.square_feet&&<p className='text-red-700'>{errors.square_feet}</p>}
          </div>
        </div>
         <div className="flex flex-col gap-2 bg-blue-50 p-2">
          <label className="property-form-label">
            Rates (Leave blank if not applicable)
          </label>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex gap-4 flex-col md:flex-row">
              <label htmlFor="weekly" className="property-form-label">Weekly</label>
              <Field
                id="weekly"
                name="weekly"
          
                type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
            </div>
              
            <div className="flex gap-4 flex-col md:flex-row">
              <label htmlFor="monthly" className="property-form-label">Monthly</label>
              <Field
                id="monthly"
                name="monthly"
                type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
               {touched.monthly&&errors.monthly&&<p className='text-red-600'>{errors.monthly}</p>}
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <label htmlFor="nightly" className="property-form-label">nightly</label>
              <Field
                name="nightly"
               type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
               {touched.nightly&&errors.nightly&&<p className='text-red-600'>{errors.nightly}</p>}
            </div>
          </div>
        </div>
           <div className="flex flex-col gap-2">
          <label htmlFor="seller_info" className="property-form-label">Seller Name</label>
          <Field
          
            name="seller_name"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
         
          />
           {touched.seller_name&&errors.seller_name&&<p className='text-red-600'>{errors.seller_name}</p>}
        </div>
                <div className="flex flex-col gap-2">
          <label htmlFor="seller_email" className="property-form-label">seller email</label>
          <Field
         
            name="seller_email"
       
    
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          
          />
           {touched.seller_email&&errors.seller_email&&<p className='text-red-600'>{errors.seller_email}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="seller_phone" className="property-form-label">seller phone</label>
          <Field
      
          name="seller_phone" 
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
           {touched.seller_phone&&errors.seller_phone&&<p className='text-red-600'>{errors.seller_phone}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="amenities" className="property-form-label">amenities</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, index) => (
              <label htmlFor={a} className="text-md" key={index}>
                <Field type="checkbox" value={a} name="amenities" /> {a.replaceAll('_',' ')}
              </label>
            ))}
            {touched.amenities && errors.amenities && (
              <p className="text-red-500">{errors.amenities}</p>
            )}
          </div>
        </div>
           <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg hover:opacity-80 focus:bg-red-700">
            {loading?<FaSpinner className='animate-spin'/>:'Add Property'}
          </button>

            </Form>
         )}  
          

     </Formik>
     </div>
  )
}

export default EditPropertyCard
