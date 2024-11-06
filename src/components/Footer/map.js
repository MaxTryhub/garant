import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const AnyReactComponent = ({ position, icon, link }) => {
  return (
    <Marker position={position} icon={icon}>
      <Popup>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Посилання на Google Maps
          </a>
        </div>
      </Popup>
    </Marker>
  );
};

const SimpleMap = () => {
  const markerCoords = {
    lat: 48.470233,
    lng: 35.043791,
  };

  const defaultProps = {
    center: markerCoords,
    zoom: 10,
  };

  // Иконка маркера
  const customMarkerIcon = new L.Icon({
    iconUrl: process.env.PUBLIC_URL + "./img/marker-icon.png",
    iconSize: [20, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  // Ссылка на Google Maps
  const googleMapsLink =
    "https://www.google.com.ua/maps/place/48%C2%B033'41.1%22N+34%C2%B055'21.1%22E/@48.5614075,34.9199581,17z/data=!3m1!4b1!4m4!3m3!8m2!3d48.561404!4d34.922533?hl=ru&entry=ttu";

  return (
    <div
      className="map-container"
      style={{
        height: "250px",
        width: "350px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (min-width: 480px) {
          .map-container {
            width: 800px !important;
            height: 400px !important; /* Устанавливаем ширину 600px при ширине экрана 480px и больше */
              border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
          }
        }
      `}</style>
      <MapContainer
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AnyReactComponent
          position={markerCoords}
          icon={customMarkerIcon}
          link={googleMapsLink}
        />
      </MapContainer>
    </div>
  );
};

export default SimpleMap;
