import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "USA", coordinates: [-95, 40] },
  { name: "Europe", coordinates: [10, 50] },
  { name: "Asia", coordinates: [100, 30] },
  { name: "Australia", coordinates: [133, -25] },
];

export default function AirportMap() {
  return (
    <ComposableMap projectionConfig={{ scale: 200 }} style={{border: "1px solid black", width: "100%", height: "100%" }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#dbe9ff"
              stroke="#fff"
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={8} fill="#2f80ed" />
        </Marker>
      ))}
    </ComposableMap>
  );
}
