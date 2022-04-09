import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Mapbox = ({ size, size2, latt, lng, latt2, lng2 }) => {
  const data2 = useSelector((state) => state.reservation.data);

  const data = useSelector((state) => state.parking);
  const lat =
    window.location.pathname === "/home"
      ? latt
      : window.location.pathname === "/rezervacija"
      ? latt2
      : data.parking
      ? data.parking.lantitude
      : data2.parking.lantitude;
  const long =
    window.location.pathname === "/home"
      ? lng
      : window.location.pathname === "/rezervacija"
      ? lng2
      : data.parking
      ? data.parking.longitude
      : data2.parking.longitude;
  console.log(lat, long);
  const position = [lat, long];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={50}
        style={{ height: size, width: size2 }}
        className={`rounded-xl mx-auto fixed left-0 right-0  ${
          window.location.pathname === "/home" ? "top-20" : "top-0"
        }`}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default Mapbox;
