"use client"
import { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Map = ({data}) => {
    const [coords,setCoords]=useState([42.422,-71.444])
    useEffect(()=>{
        const address=`${data.street},${data.city},${data.state},${data.zipcode}`;
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.length){
                setCoords([parseFloat(data[0].lat),parseFloat(data[0].lon)])
            }
        })
    },[data])
  return (
   <MapContainer center={coords} zoom={15} style={{height:"400px",width:'100%'}}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'/>
      <Marker position={coords}>
          <Popup>
             {data.street}, {data.city}, {data.state} {data.zipcode}
          </Popup>
      </Marker>

   </MapContainer>
  )
}

export default Map
