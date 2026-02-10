'use client'
import React, { useState } from "react";

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

const AddPropertyCard = () => {
  const [field,setField]=useState({
    type:"",
    name:"",
    description:"",
    location:{
      street:"",
      city:'',
      state:'',
      zipcode:''
    },
    beds:0,
    baths:0,
    square_feet:0,
    amenities:[],
    rates:{
      monthly:'',
      weekly:'',
      nightly:''
    },
    seller_info:{
      name:"",
      email:"",
      phone:''
    },
    images:[]

  })
  const handleChange=(e)=>{
       const {name,value}=e.target
       if(name.includes(".")){
        const [parent,child]=name.split(".")
        setField((prev)=>({
          ...prev,
          [parent]:{
            ...prev[parent],
            [child]:value
          }
        }))
       }else{
        setField(prev=>({
          ...prev,
          [name]:value
        }))
       }
  }
  const handleAmenities=(e)=>{
       const {value,checked}=e.target
       const currentammenities=[...field.amenities]
       if(checked){
        currentammenities.push(value)
       }else{
         const index=currentammenities.indexOf(value)
         if(index!==-1){
          currentammenities.splice(index,1)
         }
       }
       setField(prev=>({
        ...prev,
        amenities:currentammenities
       }))
  }
  const handleimage=(e)=>{
      const {files}=e.target
      
      const currentImages=[...field.images]
      for(const file of files){
        currentImages.push(file) 
      }
      setField(prev=>({
        ...prev,
        images:currentImages.slice(0,4)
      }))
         
  }
  return (
    <form className="p-4 bg-white rounded-lg shadow-xl w-full md:max-w-fit " action='/api/properties/add' encType="multipart/form-data" method="POST">
      <h2 className="text-center text-3xl font-bold">Add Property</h2>
      <div className="flex flex-col gap-5 mt-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="type" className="property-form-label">Property type</label>
          <select
            name="type"
            id="type"
            className="bg-white py-3 px-4 rounded-lg outline"
            value={field.type}
            onChange={handleChange}
            required
          >
            <option value={"Apartment"}>apartment</option>
            <option value={"studio"}>Studio</option>
            <option value={"condo"}>Condo</option>
            <option value={"house"}>House</option>
            <option value={"cabin"}>Cabin</option>
            <option value={"loft"}>Loft</option>
            <option value={"room"}>Room</option>
            <option value={"other"}>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="property-form-label">Listing Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="eg: beautiful place is maldives"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
            value={field.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="property-form-label">description</label>
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Add an optional description"
            value={field.description}
            onChange={handleChange}
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700 max-h-24"
          />
        </div>
        <div  className="flex flex-col gap-2 p-3 bg-blue-50">
          <label className="property-form-label" htmlFor="street">location</label>
          <input
            type="text"
            id="street"
            name="location.street"
            placeholder="Street"
            value={field.location.street}
            onChange={handleChange}
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
          <input
            id="city"
            name="location.city"
            value={field.location.city}
            onChange={handleChange}
            type="text"
            placeholder="City"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
            required
          />
          <input
            type="text"
            placeholder="State"
            id="state"
            name="location.state"
            value={field.location.state}
            onChange={handleChange}
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
            required
          />
          <input
            type="text"
            placeholder="Zipcode"
            id="zipcode"
            name="location.zipcode"
            value={field.location.zipcode}
            onChange={handleChange}
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly">
          <div className="flex flex-col gap-2">
            <label htmlFor="beds" className="property-form-label">Beds</label>
            <input
              id="beds"
              name="beds"
              value={field.beds}
              onChange={handleChange}
              type="number"
              className="bg-white py-3 px-4 rounded-lg outline "
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="baths" className="property-form-label">baths</label>
            <input
              type="number"
              id="baths"
              name="baths"
              value={field.baths}
              onChange={handleChange}
              className="bg-white py-3 px-4 rounded-lg outline "
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="square_feet" className="property-form-label">square feet</label>
            <input
              id="square_feet"
              name="square_feet"
              value={field.square_feet}
              onChange={handleChange}
              type="number"
              className="bg-white py-3 px-4 rounded-lg outline"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amenities" className="property-form-label">amenities</label>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, index) => (
              <label htmlFor={a} className="text-md" key={index}>
                <input type="checkbox" value={a} id={a} name={"amenities"} checked={field.amenities.includes(a)} onChange={handleAmenities}/> {a.replaceAll('_',' ')}
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-blue-50 p-2">
          <label className="property-form-label">
            Rates (Leave blank if not applicable)
          </label>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex gap-4 flex-col md:flex-row">
              <label htmlFor="weekly" className="property-form-label">Weekly</label>
              <input
                id="weekly"
                name="rates.weekly"
                value={field.rates.weekly}
                onChange={handleChange}
                type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <label htmlFor="monthly" className="property-form-label">Monthly</label>
              <input
                id="monthly"
                name="rates.monthly"
                value={field.rates.monthly}
                onChange={handleChange}
                type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <label htmlFor="nightly" className="property-form-label">nightly</label>
              <input
                id="nightly"
                name="rates.nightly"
                value={field.rates.nightly}
                onChange={handleChange}
                type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="seller_info" className="property-form-label">Seller Name</label>
          <input
            id="seller_name"
            name="seller_info.name"
            value={field.seller_info.name}
            onChange={handleChange}
            type="text"
            placeholder="name"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="seller_email" className="property-form-label">seller email</label>
          <input
            id="seller_email"
            name="seller_info.email"
            value={field.seller_info.email}
            onChange={handleChange}
            type="text"
            placeholder="Seller email"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="seller_phone" className="property-form-label">seller phone</label>
          <input
          id="seller_phone"
          name="seller_info.phone"
          value={field.seller_info.phone}
          onChange={handleChange}
            type="number"
            placeholder="Seller phone"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="images" className="property-form-label">
            {" "}
            Images (Select up to 4 images)
          </label>
          <input id="images" name="images"  onChange={handleimage} type="file" className="py-3 px-4 rounded-lg outline " multiple required/>
        </div>
        <button className="bg-blue-600 text-center font-bold text-white rounded-lg px-2 py-3 hover:opacity-80">
          add property
        </button>
      </div>
    </form>
  );
};

export default AddPropertyCard;
