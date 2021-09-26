import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "./App.css";

const App = () => {
  const defaultPosition: LatLngExpression = [48.864716, 2.349]; // Paris

  const markerPositions: LatLngExpression[] = [
    [48.86, 2.34],
    [48.865, 2.35],
    [48.865, 2.36],
  ];

  const getMarkers = () => {
    return (
      <MarkerClusterGroup>
        {markerPositions.map((position: LatLngExpression, idx: number) => {
          return <Marker position={position} key={idx}></Marker>;
        })}
      </MarkerClusterGroup>
    );
  };

  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={14}
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

export default App;
