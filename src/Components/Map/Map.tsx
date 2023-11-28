import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
export const Map = () => {
  return (
    <MapContainer
      className="w-[600px] sm-x2:h-[300px] lg:w-full rounded-md h-[400px]"
      center={[15.9749742,108.2509214]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[15.9749742,108.2509214]}>
        <Popup>
          Nike
          <br /> Shop
        </Popup>
      </Marker>
    </MapContainer>
  );
};
