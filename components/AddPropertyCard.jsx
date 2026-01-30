import React from "react";

const amenities = [
  "Wifi",
  "Full kitchen",
  "Washer & Dryer",
  "Free Parking",
  "Swimming Pool",
  "Hot Tub",
  "24/7 Security",
  "Wheelchair Accessible",
  "Elevator Access",
  "Dishwasher",
  "Gym/Fitness Center",
  "Air Conditioning",
  "Balcony/Patio",
  "Smart TV",
  "Coffee Maker",
];

const AddPropertyCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-xl w-full md:max-w-fit ">
      <h2 className="text-center text-3xl font-bold">Add Property</h2>
      <div className="flex flex-col gap-5 mt-4">
        <div className="flex flex-col gap-2">
          <label className="property-form-label">Property type</label>
          <select
            name=""
            id=""
            className="bg-white py-3 px-4 rounded-lg outline"
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
          <label className="property-form-label">Listing Name</label>
          <input
            type="text"
            placeholder="eg: beautiful place is maldives"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="property-form-label">description</label>
          <textarea
            type="text"
            placeholder="Add an optional description"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700 max-h-24"
          />
        </div>
        <div className="flex flex-col gap-2 p-3 bg-blue-50">
          <label className="property-form-label">location</label>
          <input
            type="text"
            placeholder="Street"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
          <input
            type="text"
            placeholder="City"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
          <input
            type="text"
            placeholder="State"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
          <input
            type="text"
            placeholder="Zipcode"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly">
          <div className="flex flex-col gap-2">
            <p className="property-form-label">Beds</p>
            <input
              type="number"
              className="bg-white py-3 px-4 rounded-lg outline "
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="property-form-label">baths</p>
            <input
              type="number"
              className="bg-white py-3 px-4 rounded-lg outline "
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="property-form-label">square feet</p>
            <input
              type="number"
              className="bg-white py-3 px-4 rounded-lg outline "
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="property-form-label">amenities</label>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, index) => (
              <label className="text-md" key={index}>
                <input type="checkbox" /> {a}
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-blue-50 p-2">
          <label className="property-form-label">
            Rates (Leave blank if not applicable)
          </label>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex gap-4">
              <label className="property-form-label">Weekly</label>
              <input
                type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
            </div>
            <div className="flex gap-4">
              <label className="property-form-label">Monthly</label>
              <input
                type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
            </div>
            <div className="flex gap-4">
              <label className="property-form-label">nightly</label>
              <input
                type="number"
                className="bg-white py-1 px-1 rounded-lg outline w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="property-form-label">Seller Name</label>
          <input
            type="text"
            placeholder="name"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="property-form-label">seller email</label>
          <input
            type="text"
            placeholder="Seller email"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="property-form-label">seller phone</label>
          <input
            type="text"
            placeholder="Seller phone"
            className="bg-white py-3 px-4 rounded-lg outline placeholder:text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="property-form-label">
            {" "}
            Images (Select up to 4 images)
          </label>
          <input type="file" className="py-3 px-4 rounded-lg outline " />
        </div>
        <button className="bg-blue-600 text-center font-bold text-white rounded-lg px-2 py-3 hover:opacity-80">
          add property
        </button>
      </div>
    </div>
  );
};

export default AddPropertyCard;
