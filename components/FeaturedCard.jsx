import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBath, FaBed, FaLocationArrow, FaMoneyBill, FaRulerCombined } from "react-icons/fa";

const FeaturedCard = ({ data }) => {
    const rates = data.rates
  const getMoneyDisplay = () => {
    if (rates.monthly) {
      return `${rates.monthly}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly}/wk`;
    } else {
      return `${rates.nightly}/ni`;
    }
  };
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex gap-6">
        <div className="relative h-48 w-64">
          <Image src={`/properties/${data.images[0]}`} fill alt="" className="hover:scale-105"></Image>
          <div className="absolute bg-white p-2 top-2 left-2 rounded-lg">
            <span className="text-blue-700 uppercase">{getMoneyDisplay()}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <p className="text-slate-600">{data.type}</p>
          <div className="flex gap-3 ">
            <p className="flex gap-1 text-gray-700 capitalize items-center">
              <FaBed />
              <span>{data.beds}beds</span>
            </p>
            <p className="flex gap-1 text-gray-700 capitalize items-center">
              <FaBath />
              <span>{data.baths}baths</span>
            </p>
            <p className="flex gap-1 text-gray-700 capitalize items-center">
              <FaRulerCombined />
              <span>{data.square_feet}sqft</span>
            </p>
          </div>
          <div className="flex justify-center gap-3">
              {rates.monthly&&(
                <p className="flex gap-1 text-gray-700 capitalize items-center">
                   <FaMoneyBill/>
                   monthly
                </p>
              )}
              {rates.weekly&&(
                <p className="flex gap-1 text-gray-700 capitalize items-center">
                   <FaMoneyBill/>
                   weekly
                </p>
              )}
              {rates.nightly&&(
                <p className="flex gap-1 text-gray-700 capitalize items-center">
                   <FaMoneyBill/>
                   nightly
                </p>
              )}

          </div>
          <div className="border-b border-gray-400"></div>
           <div className='flex justify-between'>
            <p className='flex gap-1 text-red-700 items-center group '>
              <FaLocationArrow className='group-hover:scale-120 group-hover:text-blue-700 group-hover:-translate-y-1'/>
              <span className='group-hover:text-blue-700'>{data.location.city}</span>
              <span className='group-hover:text-blue-700'>{data.location.state}</span>
            </p>
 
             <Link href={`/public/properties/${data._id}`} className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:opacity-80'>Details</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
