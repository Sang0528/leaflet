import React from "react";
import "./App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import cities from "./data/cities.json";
import { Icon } from "leaflet";

const ShipIcon = new Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Emojione_1F6A2.svg/120px-Emojione_1F6A2.svg.png",
  iconSize: [30, 30],
});

const blueOptions = {
  color: "#ed6498",
  weight: 5,
  opacity: 0.8,
};
const polyline: [number, number][] = [
  [-1.4294536, -26.9883361],
  [-1.5039534, -26.9525199],
  [-1.5786312, -26.9168309],
  [-1.6539039, -26.8814505],
  [-1.7295841, -26.8450293],
  [-1.8043775, -26.8078496],
  [-1.8783609, -26.7711352],
  [-1.9521666, -26.7343889],
  [-2.0257165, -26.6974736],
  [-2.0994113, -26.6605179],
  [-2.1738418, -26.6231857],
  [-2.2489621, -26.5856776],
  [-2.3240607, -26.549572],
  [-2.3988201, -26.5135736],
  [-2.4735965, -26.4767715],
  [-2.5477097, -26.4394244],
  [-2.6218833, -26.401859],
  [-2.6968816, -26.3641802],
  [-2.7718619, -26.3262071],
  [-2.8470407, -26.287836],
  [-2.9233446, -26.2490524],
  [-2.9996837, -26.2099221],
  [-3.075845, -26.1705836],
  [-3.1527979, -26.1311425],
  [-3.230304, -26.0922295],
  [-3.3081596, -26.0555424],
  [-3.3865562, -26.0194826],
  [-3.4655367, -25.9832705],
  [-3.5441027, -25.9465915],
];

function App() {
  console.log(polyline[polyline.length - 1]);
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
      minZoom={2}
      maxZoom={15}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city) => (
        <Marker key={city.id} position={[city.latitude, city.longitude]}>
          <Popup className="request-popup">
            {city.cityname} | {city.JapaneseName}
            <br></br>
            <a
              target="_new"
              href={`https://en.wikipedia.org/wiki/${city.cityname}`}
            >
              Wikipedia
            </a>
            {/* latitude={city.latitude} <br></br>
            longitude={city.longitude} <br></br> */}
            <img src={city.image} alt="city"></img>
          </Popup>
        </Marker>
      ))}
      <Marker position={polyline[polyline.length - 1]} icon={ShipIcon}>
        <Popup className="request-popup">
          Ship name <br></br>
          Ship owner <br></br>
        </Popup>
      </Marker>
      <Polyline positions={polyline} pathOptions={blueOptions} />
    </MapContainer>
  );
}

export default App;
