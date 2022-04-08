import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Mapbox = ({ size, size2 }) => {
  const position = [44.203439, 17.907743];
  return (
    <MapContainer
      center={position}
      zoom={50}
      style={{ height: size, width: size2 }}
      className={`rounded-xl fixed inset-x-0 mx-auto ${
        window.location.pathname === "/" && "top-10"
      }`}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>
  );
};

export default Mapbox;