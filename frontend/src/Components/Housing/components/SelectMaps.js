import { useState,useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import L from "leaflet";
import "./SelectMaps.css"


function SelectMaps(props) {
    const [position,setPosition] = useState(null);

    useEffect(()=>
    {
        if(props.propPosition)
        {
            setPosition(props.propPosition)
            //console.log(props.propPosition);
        }
        else
        {
            setPosition(null);
        }
    },[props.propPosition])

    // useEffect(()=>
    // {
    //     props.onPositionChange(position)
    // },[position])

    const mapRef = useRef(null);

    function AddClick(){
        useMapEvents({
          click(e){
            setPosition([e.latlng.lat,e.latlng.lng])
            props.onPositionChange([e.latlng.lat,e.latlng.lng])
            //console.log(position);
          }
        })
        return null;
      }
    
      const markerIcon = L.icon({
        iconUrl: markerIconPng,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
      });

  return (
    <div className="map-section">
        {props.propPosition && (
      <MapContainer
        center={props.propPosition}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "50vh" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <LocationMarker /> */}
        <AddClick />
        {position && (
          <Marker position={position} icon={markerIcon}>
            <Popup>
              A marker is placed at lat: {position[0]}, lng: {position[1]}
            </Popup>
          </Marker>
        )}
      </MapContainer>
        )}
    </div>
  );
}

export default SelectMaps;