import L, { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "./Map.css";
import lockers from "../data/lockers.json";
import heart from "../images/heart.png";

const Map = () => {
  const defaultPosition: LatLngExpression = [55.5604, 13.0246]; // Malmö

  const markerPositions: LatLngExpression[] = lockers.map((locker: any) => {
    return [locker.coordinates[1], locker.coordinates[0]];
  });

  const getMarkers = () => {
    return (
      <MarkerClusterGroup>
        {markerPositions.map((position: LatLngExpression, idx: number) => {
          return (
            <Marker position={position} icon={heartIcon} key={idx}></Marker>
          );
        })}
      </MarkerClusterGroup>
    );
  };

  const heartIcon = L.icon({
    iconUrl: heart,
    iconRetinaUrl: heart,
    iconSize: [25, 25],
  });

  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
        zoomControl={true}
      >
        <TileLayer
          attribution={`&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, imagery &copy; <a href="http://mapbox.com">Mapbox</a>`}
          url={`https://api.mapbox.com/styles/v1/kateblanchfield/cku009qcs0mr317oaitz26e49/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {getMarkers()}
      </MapContainer>
    </div>
  );
};

export default Map;
