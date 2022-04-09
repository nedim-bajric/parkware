import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { latLng } from "leaflet";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Mapbox = ({ size, size2 }) => {
  const data = useSelector((state) => state.parking);
  const lat = data.parking?.lantitude;
  const long = data.parking?.longitude;
  const position =
    window.location.pathname === "/home" ? [44.203439, 17.907743] : [lat, long];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={50}
        style={{ height: size, width: size2 }}
        className="rounded-xl mx-auto fixed left-0 right-0 top-20"
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
